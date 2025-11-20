import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SearchSelect } from "@/components/register/SearchSelect";
import { searchMovies, searchTVSeries, MediaItem } from "@/services/tmdbService";
import { searchBooks, BookItem } from "@/services/booksService";
import { useData } from "@/context/DataContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { updateUserFavorites } = useData();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
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

  const handleRegister = () => {
    // Save favorites to context (simulating registration)
    updateUserFavorites("movie", formData.movies);
    updateUserFavorites("tv", formData.series);
    updateUserFavorites("book", formData.books);

    // Navigate to explore
    navigate("/explore");
  };

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Favorilerin</h1>
        <p className="text-muted-foreground">
          Seni daha iyi tanımamız için sevdiğin yapımları seç.
        </p>
      </div>

      <div className="space-y-6">
        {/* Movies */}
        <div className="space-y-2">
          <Label>En Sevdiğin Filmler</Label>
          <SearchSelect
            placeholder="Film ara..."
            onSearch={searchMovies}
            selectedItems={formData.movies}
            onSelect={(item) => setFormData({ ...formData, movies: [...formData.movies, item] })}
            onRemove={(item) => setFormData({ ...formData, movies: formData.movies.filter((i) => i.id !== item.id) })}
            renderItem={(item) => (
              <div className="w-20 flex flex-col gap-1">
                <img src={item.posterPath || "https://via.placeholder.com/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                <span className="text-xs truncate text-center">{item.title}</span>
              </div>
            )}
            renderResult={(item) => (
              <>
                <img src={item.posterPath || "https://via.placeholder.com/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.releaseDate?.split("-")[0]}</span>
                </div>
              </>
            )}
          />
        </div>

        {/* Series */}
        <div className="space-y-2">
          <Label>En Sevdiğin Diziler</Label>
          <SearchSelect
            placeholder="Dizi ara..."
            onSearch={searchTVSeries}
            selectedItems={formData.series}
            onSelect={(item) => setFormData({ ...formData, series: [...formData.series, item] })}
            onRemove={(item) => setFormData({ ...formData, series: formData.series.filter((i) => i.id !== item.id) })}
            renderItem={(item) => (
              <div className="w-20 flex flex-col gap-1">
                <img src={item.posterPath || "https://via.placeholder.com/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                <span className="text-xs truncate text-center">{item.title}</span>
              </div>
            )}
            renderResult={(item) => (
              <>
                <img src={item.posterPath || "https://via.placeholder.com/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.releaseDate?.split("-")[0]}</span>
                </div>
              </>
            )}
          />
        </div>

        {/* Books */}
        <div className="space-y-2">
          <Label>En Sevdiğin Kitaplar</Label>
          <SearchSelect
            placeholder="Kitap ara..."
            onSearch={searchBooks}
            selectedItems={formData.books}
            onSelect={(item) => setFormData({ ...formData, books: [...formData.books, item] })}
            onRemove={(item) => setFormData({ ...formData, books: formData.books.filter((i) => i.id !== item.id) })}
            renderItem={(item) => (
              <div className="w-20 flex flex-col gap-1">
                <img src={item.coverPath || "https://via.placeholder.com/100x150"} alt={item.title} className="w-full h-28 object-cover rounded-md shadow-sm" />
                <span className="text-xs truncate text-center">{item.title}</span>
              </div>
            )}
            renderResult={(item) => (
              <>
                <img src={item.coverPath || "https://via.placeholder.com/40x60"} alt={item.title} className="w-10 h-14 object-cover rounded" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.authors?.join(", ")}</span>
                </div>
              </>
            )}
          />
        </div>
      </div>

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
              <p className="text-muted-foreground">Kendinden bahset.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="age">Yaş</Label>
                  <Input id="age" type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="gender">Cinsiyet</Label>
                  <Input id="gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1" onClick={handleBack}>Geri</Button>
                <Button className="flex-1 bg-primary-app hover:bg-primary-app/90" onClick={handleNext}>Devam Et</Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default RegisterPage;