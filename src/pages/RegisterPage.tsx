import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Kadın");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<string[]>(["Yüzüklerin Efendisi", "Dune"]);
  const [showPassword, setShowPassword] = useState(false);

  const genres = [
    { name: "Bilim Kurgu", icon: "science" },
    { name: "Romantik", icon: "favorite" },
    { name: "Polisiye", icon: "local_police" },
    { name: "Fantastik", icon: "neurology" },
    { name: "Komedi", icon: "theater_comedy" },
    { name: "Klasikler", icon: "history_edu" },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleGenreToggle = (genreName: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreName)
        ? prev.filter((name) => name !== genreName)
        : [...prev, genreName]
    );
  };

  const handleAddMedia = () => {
    if (searchQuery.trim() && !selectedMedia.includes(searchQuery.trim())) {
      setSelectedMedia((prev) => [...prev, searchQuery.trim()]);
      setSearchQuery("");
    }
  };

  const handleRemoveMedia = (mediaToRemove: string) => {
    setSelectedMedia((prev) => prev.filter((media) => media !== mediaToRemove));
  };

  const handleSubmit = () => {
    // Handle final submission logic here
    console.log("Form Submitted:", { email, password, name, age, gender, selectedGenres, selectedMedia });
    alert("Kayıt Başarılı!");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="w-full max-w-md space-y-8 py-8">
        {/* Logo and Slogan */}
        <div className="text-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="material-symbols-outlined text-primary-app text-5xl">movie</span>
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-text-light dark:text-text-dark">CineMatch</h1>
          </Link>
          <p className="text-subtle-light dark:text-subtle-dark mt-1">Hikayeni paylaşacak birini bul.</p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full px-2">
          <div className="flex items-center">
            <div className="flex flex-col items-center relative">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 1 ? "bg-primary-app text-white" : "bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark text-subtle-light dark:text-subtle-dark"
                }`}
              >
                1
              </div>
              <p className={`text-xs mt-1 font-semibold ${currentStep >= 1 ? "text-primary-app" : "text-subtle-light dark:text-subtle-dark"}`}>Hesap</p>
            </div>
            <div className="flex-auto border-t-2 border-border-light dark:border-border-dark mx-2"></div>
            <div className="flex flex-col items-center relative">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 2 ? "bg-primary-app text-white" : "bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark text-subtle-light dark:text-subtle-dark"
                }`}
              >
                2
              </div>
              <p className={`text-xs mt-1 font-semibold ${currentStep >= 2 ? "text-primary-app" : "text-subtle-light dark:text-subtle-dark"}`}>Zevkler</p>
            </div>
            <div className="flex-auto border-t-2 border-border-light dark:border-border-dark mx-2"></div>
            <div className="flex flex-col items-center relative">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 3 ? "bg-primary-app text-white" : "bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark text-subtle-light dark:text-subtle-dark"
                }`}
              >
                3
              </div>
              <p className={`text-xs mt-1 font-semibold ${currentStep >= 3 ? "text-primary-app" : "text-subtle-light dark:text-subtle-dark"}`}>Profil</p>
            </div>
          </div>
        </div>

        {/* Step 1: Account Creation */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-text-light dark:text-text-dark tracking-light text-[28px] font-bold leading-tight text-center">Hesap Oluştur</h2>
            <div className="flex flex-col items-stretch gap-3">
              <Button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-12 px-5 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] w-full border border-border-light dark:border-border-dark shadow-sm hover:bg-surface-light/90 dark:hover:bg-surface-dark/90">
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                  <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                  <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                  <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.41,44,30.668,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                </svg>
                <span className="truncate">Google ile Kaydol</span>
              </Button>
              <Button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-12 px-5 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] w-full border border-border-light dark:border-border-dark shadow-sm hover:bg-surface-light/90 dark:hover:bg-surface-dark/90">
                <svg className="w-5 h-5 text-text-light dark:text-text-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.222,12.02c0.05-0.71,0.28-2.5-1.9-2.5c-1.78,0-2.88,1.07-3.64,1.07c-0.78,0-1.57-1.05-3.12-1.05c-2.14,0-3.64,2.02-3.64,4.72c0,3.42,2.5,7.72,4.92,7.72c0.71,0,1.21-0.36,2.21-0.36c1.02,0,1.41,0.36,2.23,0.36c2.45,0,4.7-4.25,4.7-7.96Zm-5.832,7.06c-0.02,0-0.03,0-0.05,0c-0.91,0.02-1.9-0.62-2.21-1.74c-0.69-2.5,0.91-4.27,2.14-4.27c0.16,0,0.3,0.02,0.43,0.04c-0.14,1.04,0.39,2.83,0.73,3.71c-0.45,0.88-1.02,2.24-1.04,2.26Zm4.43-5.26c-0.52-0.04-1.55-0.18-2.3-1.09c0.71-0.81,1.71-1.21,2.41-1.21c0.11,0,0.21,0,0.3,0.02c-0.14,0.73-0.23,1.52-0.41,2.28Z"></path>
                </svg>
                <span className="truncate">Apple ile Kaydol</span>
              </Button>
            </div>
            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal text-center">Veya e-posta ile devam et</p>
            <div className="space-y-4">
              <Label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">E-posta</p>
                <Input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal"
                  placeholder="E-posta adresinizi girin"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
              <Label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Şifre</p>
                <div className="flex w-full flex-1 items-stretch rounded-xl">
                  <Input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                    placeholder="Şifrenizi oluşturun"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="text-subtle-light dark:text-subtle-dark flex border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark items-center justify-center pr-[15px] rounded-r-xl border-l-0 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">{showPassword ? "visibility" : "visibility_off"}</span>
                  </div>
                </div>
              </Label>
            </div>
            <Button onClick={nextStep} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
              <span className="truncate">Devam Et</span>
            </Button>
          </div>
        )}

        {/* Step 2: Preferences */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-text-light dark:text-text-dark tracking-light text-[28px] font-bold leading-tight">Zevklerini Belirle</h2>
              <p className="text-subtle-light dark:text-subtle-dark mt-1">Sana en uygun kişiyi bulmamıza yardım et.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Favori Türlerin Hangileri?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {genres.map((genre) => (
                  <Button
                    key={genre.name}
                    onClick={() => handleGenreToggle(genre.name)}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border bg-surface-light dark:bg-surface-dark transition-all h-auto ${
                      selectedGenres.includes(genre.name)
                        ? "border-primary-app bg-primary-app/10 text-primary-app"
                        : "border-border-light dark:border-border-dark hover:border-primary-app dark:hover:border-primary-app focus:border-primary-app focus:ring-2 focus:ring-primary-app/50 text-text-light dark:text-text-dark"
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary-app">{genre.icon}</span>
                    <span className="text-sm font-medium">{genre.name}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">En Sevdiğin 3 Film ve 3 Kitabı Ekle</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">search</span>
                <Input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark pl-12 pr-4 py-2 text-base font-normal"
                  placeholder="Film veya kitap ara..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddMedia()}
                />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedMedia.map((media) => (
                  <span key={media} className="flex items-center gap-2 bg-primary-app/20 text-primary-app text-sm font-medium px-3 py-1.5 rounded-full">
                    {media}
                    <span className="material-symbols-outlined text-base cursor-pointer" onClick={() => handleRemoveMedia(media)}>close</span>
                  </span>
                ))}
                {selectedMedia.length < 6 && searchQuery.trim() && (
                    <Button variant="ghost" onClick={handleAddMedia} className="text-primary-app text-sm font-medium px-3 py-1.5 rounded-full border border-primary-app/50">
                        Ekle: {searchQuery}
                    </Button>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <Button variant="link" onClick={nextStep} className="text-sm font-semibold text-subtle-light dark:text-subtle-dark hover:text-primary-app">Daha Sonra Ekle</Button>
              <Button onClick={nextStep} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
                <span className="truncate">Devam Et</span>
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Profile Info */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-text-light dark:text-text-dark tracking-light text-[28px] font-bold leading-tight">Biraz da Senden Bahsedelim</h2>
              <p className="text-subtle-light dark:text-subtle-dark mt-1">Profilini tamamla ve eşleşmeye başla.</p>
            </div>
            <div className="space-y-4">
              <Label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Adın</p>
                <Input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal"
                  placeholder="Adını gir"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Label>
              <Label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Yaşın</p>
                <Input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark p-[15px] text-base font-normal leading-normal"
                  placeholder="Yaşını gir"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Label>
              <div>
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Cinsiyetin</p>
                <RadioGroup defaultValue={gender} onValueChange={setGender} className="grid grid-cols-2 gap-3">
                  <Label className="flex items-center p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark has-[:checked]:border-primary-app has-[:checked]:bg-primary-app/10 cursor-pointer">
                    <RadioGroupItem value="Kadın" id="gender-female" className="text-primary-app focus:ring-primary-app/50" />
                    <span className="ml-3 font-medium text-text-light dark:text-text-dark">Kadın</span>
                  </Label>
                  <Label className="flex items-center p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark has-[:checked]:border-primary-app has-[:checked]:bg-primary-app/10 cursor-pointer">
                    <RadioGroupItem value="Erkek" id="gender-male" className="text-primary-app focus:ring-primary-app/50" />
                    <span className="ml-3 font-medium text-text-light dark:text-text-dark">Erkek</span>
                  </Label>
                </RadioGroup>
              </div>
            </div>
            <Button onClick={handleSubmit} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] w-full mt-6 shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
              <span className="truncate">Profili Oluştur ve Bitir</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;