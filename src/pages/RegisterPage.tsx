import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SearchSelect } from "@/components/register/SearchSelect";
import { searchMovies, searchTVSeries, MediaItem } from "@/services/tmdbService";
import { searchBooks, BookItem } from "@/services/booksService";
import { useData } from "@/context/DataContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { updateUserFavorites, refreshUser } = useData();
  const [step, setStep] = useState(1);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    age: "",
    gender: "",
    zodiac: "",
    city: "",
    bio: "",
    interests: [] as string[],
    genres: [] as string[],
    movies: [] as MediaItem[],
    series: [] as MediaItem[],
    books: [] as BookItem[],
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleRegister = async () => {
    try {
      // 1. Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        console.log("Signup successful. User:", authData.user.id);
        console.log("Session:", authData.session);

        let avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.email}`;

        // Upload avatar if selected
        if (avatarFile) {
          const fileExt = avatarFile.name.split('.').pop();
          const fileName = `${authData.user.id}.${fileExt}`;
          const filePath = `${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filePath, avatarFile, {
              upsert: true
            });

          if (uploadError) {
            console.error("Avatar upload error:", uploadError);
            toast.error("Profil fotoğrafı yüklenemedi, varsayılan avatar kullanılacak.");
          } else {
            console.log("Avatar upload successful to path:", filePath);
            const { data } = supabase.storage
              .from('avatars')
              .getPublicUrl(filePath);

            console.log("Avatar public URL data:", data);
            if (data) {
              avatarUrl = data.publicUrl;
            }
          }
        }


        if (!authData.session) {
          console.warn("No session returned after signup. Email confirmation might be required.");
          toast.success("Kayıt başarılı! Lütfen e-posta adresinizi doğrulayıp giriş yapın.");
          // Redirect to login because we can't auto-login without email confirmation
          navigate("/login");
          return;
        }

        // 2. Create profile in 'profiles' table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              name: formData.name,
              handle: `@${formData.username || formData.email.split('@')[0]}`,
              avatar_url: avatarUrl,
            }
          ]);

        if (profileError) {
          console.error("Profile creation error details:", JSON.stringify(profileError, null, 2));
          // Proceeding even if profile creation fails, though ideally we retry or alert
        }

        // 3. Save favorites to 'favorites' table
        const formattedFavorites = [
          ...formData.movies.map(m => ({ user_id: authData.user!.id, item_id: String(m.id), item_type: 'movie', title: m.title, poster_path: m.posterPath, release_date: m.releaseDate, overview: m.overview })),
          ...formData.series.map(s => ({ user_id: authData.user!.id, item_id: String(s.id), item_type: 'tv', title: s.title, poster_path: s.posterPath, release_date: s.releaseDate, overview: s.overview })),
          ...formData.books.map(b => ({ user_id: authData.user!.id, item_id: String(b.id), item_type: 'book', title: b.title, poster_path: b.coverPath, overview: b.description, release_date: b.publishedDate }))
        ];

        console.log("Attempting to save favorites:", formattedFavorites.length);

        if (formattedFavorites.length > 0) {
          const { error: favError } = await supabase.from('favorites').insert(formattedFavorites);
          if (favError) {
            console.error("Favorites insert error details:", JSON.stringify(favError, null, 2));
            toast.error("Favoriler kaydedilirken bir hata oluştu.");
          } else {
            console.log("Favorites saved successfully");
          }
        }

        toast.success("Kayıt başarılı! Giriş yapılıyor...");

        // Force refresh data to get the new profile and favorites
        await refreshUser();

        navigate("/profile"); // Navigate to profile as requested by user context "profil sekmesine girdim"
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message || "Kayıt olurken bir hata oluştu.");
    }
  };

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Favorilerin</h1>
        <p className="text-muted-foreground">
          Seni daha iyi tanımamız için sevdiğin yapımları seç.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full" defaultValue="movies">
        {/* Movies */}
        <AccordionItem value="movies">
          <AccordionTrigger>En Sevdiğin Filmler</AccordionTrigger>
          <AccordionContent>
            <SearchSelect
              placeholder="Film ara..."
              onSearch={searchMovies}
              selectedItems={formData.movies}
              onSelect={(item) => setFormData({ ...formData, movies: [...formData.movies, item] })}
              onRemove={(item) => setFormData({ ...formData, movies: formData.movies.filter((i) => i.id !== item.id) })}
              renderItem={(item) => (
                <div className="w-20 flex flex-col gap-1">
                  <img src={item.posterPath || "https://placehold.co/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                  <span className="text-xs truncate text-center">{item.title}</span>
                </div>
              )}
              renderResult={(item) => (
                <>
                  <img src={item.posterPath || "https://placehold.co/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.releaseDate?.split("-")[0]}</span>
                  </div>
                </>
              )}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Series */}
        <AccordionItem value="series">
          <AccordionTrigger>En Sevdiğin Diziler</AccordionTrigger>
          <AccordionContent>
            <SearchSelect
              placeholder="Dizi ara..."
              onSearch={searchTVSeries}
              selectedItems={formData.series}
              onSelect={(item) => setFormData({ ...formData, series: [...formData.series, item] })}
              onRemove={(item) => setFormData({ ...formData, series: formData.series.filter((i) => i.id !== item.id) })}
              renderItem={(item) => (
                <div className="w-20 flex flex-col gap-1">
                  <img src={item.posterPath || "https://placehold.co/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                  <span className="text-xs truncate text-center">{item.title}</span>
                </div>
              )}
              renderResult={(item) => (
                <>
                  <img src={item.posterPath || "https://placehold.co/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.releaseDate?.split("-")[0]}</span>
                  </div>
                </>
              )}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Books */}
        <AccordionItem value="books">
          <AccordionTrigger>En Sevdiğin Kitaplar</AccordionTrigger>
          <AccordionContent>
            <SearchSelect
              placeholder="Kitap ara..."
              onSearch={searchBooks}
              selectedItems={formData.books}
              onSelect={(item) => setFormData({ ...formData, books: [...formData.books, item] })}
              onRemove={(item) => setFormData({ ...formData, books: formData.books.filter((i) => i.id !== item.id) })}
              renderItem={(item) => (
                <div className="w-20 flex flex-col gap-1">
                  <img src={item.coverPath || "https://placehold.co/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                  <span className="text-xs truncate text-center">{item.title}</span>
                </div>
              )}
              renderResult={(item) => (
                <>
                  <img src={item.coverPath || "https://placehold.co/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.authors?.join(", ")}</span>
                  </div>
                </>
              )}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" className="flex-1" onClick={handleBack}>
          Geri
        </Button>
        <Button className="flex-1 bg-primary-app hover:bg-primary-app/90" onClick={handleRegister}>
          Kaydı Tamamla
        </Button>
      </div>
    </div>
  );

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/explore`
        }
      });
      if (error) throw error;
    } catch (error: any) {
      console.error("Google login error:", error);
      toast.error("Google ile giriş yapılırken bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${step >= i ? "bg-primary-app" : "bg-muted"
                }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Hesap Oluştur</h1>
              <p className="text-muted-foreground">StoryLink dünyasına katıl.</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-11"
                onClick={handleGoogleLogin}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Google ile devam et</span>
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-11"
                onClick={() => console.log('Facebook login')}
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook ile devam et</span>
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-11"
                onClick={() => console.log('Apple login')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>Apple ile devam et</span>
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">veya e-posta ile</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" placeholder="ornek@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
              </div>
              <Button className="w-full bg-primary-app hover:bg-primary-app/90" onClick={handleNext}>Devam Et</Button>
            </div>

            <div className="text-center text-sm">
              Zaten hesabın var mı?{" "}
              <Link to="/login" className="text-primary-app hover:underline font-medium">Giriş Yap</Link>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Profil Bilgileri</h1>
              <p className="text-muted-foreground">Kendinden bahset ve profilini oluştur.</p>
            </div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">

              {/* Avatar Upload */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24">
                  <img
                    src={avatarPreview || "https://placehold.co/150"}
                    alt="Avatar Preview"
                    className="w-full h-full rounded-full object-cover border-2 border-primary-app"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 bg-primary-app text-white p-1.5 rounded-full cursor-pointer hover:bg-primary-app/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </div>
                <span className="text-sm text-muted-foreground">Profil Fotoğrafı Ekle</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">@</span>
                  <Input
                    id="username"
                    placeholder="kullaniciadi"
                    className="pl-7"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '') })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input
                  id="name"
                  placeholder="Adın ve soyadın"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Yaş</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Cinsiyet</Label>
                  <select
                    id="gender"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="">Seç</option>
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zodiac">Burç</Label>
                  <select
                    id="zodiac"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.zodiac}
                    onChange={(e) => setFormData({ ...formData, zodiac: e.target.value })}
                  >
                    <option value="">Seç</option>
                    <option value="aries">♈ Koç</option>
                    <option value="taurus">♉ Boğa</option>
                    <option value="gemini">♊ İkizler</option>
                    <option value="cancer">♋ Yengeç</option>
                    <option value="leo">♌ Aslan</option>
                    <option value="virgo">♍ Başak</option>
                    <option value="libra">♎ Terazi</option>
                    <option value="scorpio">♏ Akrep</option>
                    <option value="sagittarius">♐ Yay</option>
                    <option value="capricorn">♑ Oğlak</option>
                    <option value="aquarius">♒ Kova</option>
                    <option value="pisces">♓ Balık</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Şehir</Label>
                  <select
                    id="city"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  >
                    <option value="">Seç</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                    <option value="bursa">Bursa</option>
                    <option value="antalya">Antalya</option>
                    <option value="adana">Adana</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biyografi</Label>
                <textarea
                  id="bio"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  placeholder="Kendinden kısaca bahset... Film ve kitap zevkini anlat 🎬📚"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  maxLength={150}
                />
                <p className="text-xs text-muted-foreground text-right">{formData.bio.length}/150</p>
              </div>

              <div className="space-y-2">
                <Label>İlgi Alanları</Label>
                <div className="flex flex-wrap gap-2">
                  {["🎨 Sanat", "🎵 Müzik", "✈️ Seyahat", "🍳 Yemek", "📸 Fotoğraf", "🎮 Oyun", "⚽ Spor", "🧘 Yoga"].map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => {
                        const interests = formData.interests.includes(interest)
                          ? formData.interests.filter(i => i !== interest)
                          : [...formData.interests, interest];
                        setFormData({ ...formData, interests });
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${formData.interests.includes(interest)
                        ? "bg-primary-app text-white"
                        : "bg-muted hover:bg-muted/80"
                        }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex-1" onClick={handleBack}>Geri</Button>
              <Button className="flex-1 bg-primary-app hover:bg-primary-app/90" onClick={handleNext}>Devam Et</Button>
            </div>
          </div>
        )}

        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default RegisterPage;