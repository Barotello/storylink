import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ProfilePage from "@/pages/ProfilePage";

const MatchesPage = () => {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardInteraction = (action: 'like' | 'pass' | 'superlike') => {
    console.log(`Action: ${action}`);
    // Here you would implement the actual swipe animation and card removal
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background font-display text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-4 z-10 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-app text-3xl">movie_filter</span>
          <span className="font-bold text-xl tracking-tight">StoryLink</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <span className="material-symbols-outlined">tune</span>
          </Button>
        </div>
      </header>

      {/* Main Content - Card Stack */}
      <main className="flex-1 relative px-4 pb-32 flex flex-col">
        {/* Info Bar */}
        <div className="flex gap-2 mb-4 mt-2 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
            <span className="material-symbols-outlined text-muted-foreground text-sm">location_on</span>
            <span className="text-xs font-medium">İstanbul</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-app/10 border border-primary-app/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary-app text-sm">favorite</span>
            <span className="text-xs font-medium text-primary-app">10 Beğeni Kaldı</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-app/10 border border-accent-app/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-accent-app text-sm">people</span>
            <span className="text-xs font-medium text-accent-app">5 Yeni Eşleşme</span>
          </div>
        </div>

        {/* Swipe Hint - Shows on first load */}
        {showHint && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-pulse">
            <div className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl">
              <p className="text-sm font-medium text-center">👆 Karta tıkla veya kaydır</p>
            </div>
          </div>
        )}

        {/* Profile Card Stack */}
        <div className="flex-1 relative">
          {/* Background Card (next profile preview) */}
          <div className="absolute inset-0 rounded-3xl bg-muted/30 scale-95 opacity-50" />

          {/* Main Profile Card */}
          <Drawer open={isProfileDrawerOpen} onOpenChange={setIsProfileDrawerOpen}>
            <DrawerTrigger asChild>
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transition-all duration-300 hover:shadow-primary-app/20"
                style={{
                  transform: `translate(${cardPosition.x}px, ${cardPosition.y}px) rotate(${cardPosition.x * 0.05}deg)`,
                }}
              >
                {/* Background Image */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsLCCx3O4jtAR9sTdeMBuCSUDyE6UQo-iwUPC4ECQf1ElR_zEp-wOdQ2mLWeYa5OT7UjiImwNllXz02qwHs-rvueotfUio49NpzvYpgI5itY8QSg-Bv-nFhS4seqRJROGV085OQLuACb8me9iUiQnYTy3LU-Pgji0jLauS4JzBKin8Zy1w6NnLr11zcvBn8d_CWiujeZsXndm5ppK_35d0KJMEyeThhgh02E54YrjEmOL_JLzFnnX7INR-9UdUcWsAum18yTWEYrM"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />

                {/* Top Info - Tap to view profile hint */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                    <span className="material-symbols-outlined text-primary-app text-sm">info</span>
                    <span className="text-xs font-semibold text-foreground">Detaylar için tıkla</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-4">
                  {/* Match Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-app to-primary-app backdrop-blur-md shadow-xl">
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    <span className="text-sm font-bold">%95 Uyumluluk</span>
                  </div>

                  {/* Name and Age */}
                  <div>
                    <h2 className="text-4xl font-bold flex items-end gap-3 mb-2">
                      Jessica
                      <span className="text-2xl font-medium opacity-90">28</span>
                      <span className="material-symbols-outlined text-green-400 text-2xl mb-1">verified</span>
                    </h2>
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <span className="material-symbols-outlined text-base">work</span>
                      <span>Grafik Tasarımcı</span>
                    </div>
                    <p className="text-white/90 text-sm line-clamp-2 font-medium leading-relaxed">
                      Klasik sinema ve çağdaş kurguya olan sevgim hakkında kısa, esprili bir biyografi. 🎬📚
                    </p>
                  </div>

                  {/* Shared Interests - More prominent */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">Ortak İlgi Alanları</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/25 backdrop-blur-md border border-white/20 shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">movie</span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold">5 Ortak Film</span>
                          <span className="text-[10px] opacity-75">Inception, Interstellar...</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/25 backdrop-blur-md border border-white/20 shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">menu_book</span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold">3 Ortak Kitap</span>
                          <span className="text-[10px] opacity-75">1984, Dune...</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/25 backdrop-blur-md border border-white/20 shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">tv</span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold">2 Ortak Dizi</span>
                          <span className="text-[10px] opacity-75">Breaking Bad...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerTrigger>

            <DrawerContent className="h-[92%] mt-24 rounded-t-[20px]">
              <VisuallyHidden>
                <DrawerTitle>Profil Detayları</DrawerTitle>
              </VisuallyHidden>
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted/50 my-4" />
              <div className="flex-1 overflow-y-auto px-4 pb-8">
                <ProfilePage isDrawer={true} />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>

      {/* Action Buttons with Labels */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-transparent pt-8 pb-6 z-20">
        <div className="flex justify-center items-end gap-4 px-4">
          {/* Pass Button */}
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() => handleCardInteraction('pass')}
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-red-500 bg-background hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-500/50 hover:scale-110"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </Button>
            <span className="text-xs font-medium text-muted-foreground">Geç</span>
          </div>

          {/* Super Like Button */}
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() => handleCardInteraction('superlike')}
              variant="outline"
              className="w-14 h-14 rounded-full border-2 border-blue-500 bg-background hover:bg-blue-500 text-blue-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-blue-500/50 hover:scale-110 mb-2"
            >
              <span className="material-symbols-outlined text-2xl">star</span>
            </Button>
            <span className="text-xs font-medium text-muted-foreground">Süper</span>
          </div>

          {/* Like Button */}
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() => handleCardInteraction('like')}
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-green-500 bg-background hover:bg-green-500 text-green-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-green-500/50 hover:scale-110"
            >
              <span className="material-symbols-outlined text-3xl">favorite</span>
            </Button>
            <span className="text-xs font-medium text-muted-foreground">Beğen</span>
          </div>

          {/* Rewind Button (Bonus) */}
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-amber-500 bg-background hover:bg-amber-500 text-amber-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-amber-500/50 hover:scale-110"
            >
              <span className="material-symbols-outlined text-xl">replay</span>
            </Button>
            <span className="text-xs font-medium text-muted-foreground">Geri Al</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesPage;