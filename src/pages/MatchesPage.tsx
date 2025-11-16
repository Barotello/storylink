import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import MatchedUserProfileDrawerContent from "@/components/matches/MatchedUserProfileDrawerContent";

const MatchesPage = () => {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      {/* Üst Bilgi Çubuğu (TopAppBar) */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="text-primary-app flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-4xl">movie_filter</span>
        </div>
        <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] flex-1">Encore</h1>
        <div className="flex w-12 items-center justify-end">
          <Button variant="ghost" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-slate-600 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">tune</span>
          </Button>
        </div>
      </header>

      {/* Filtre ve Beğeni Sayacı (Chips) */}
      <div className="flex gap-3 px-4 pb-4 overflow-x-auto">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-chip-dark-bg pl-2 pr-4 opacity-60 cursor-not-allowed">
          <span className="material-symbols-outlined text-slate-700 dark:text-white" style={{ fontSize: "20px" }}>lock</span>
          <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Konum</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-chip-dark-bg pl-2 pr-4">
          <span className="material-symbols-outlined text-accent-app" style={{ fontSize: "20px" }}>favorite</span>
          <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Beğeni Kaldı: 10</p>
        </div>
      </div>

      {/* Ana İçerik Alanı */}
      <main className="flex-grow flex flex-col p-4 pt-0">
        {/* Profil Kartı (Card) - DrawerTrigger olarak güncellendi */}
        <Drawer open={isProfileDrawerOpen} onOpenChange={setIsProfileDrawerOpen}>
          <DrawerTrigger asChild>
            <div className="flex-grow bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl cursor-pointer" data-alt="Kitaplık önünde gülümseyen genç bir kadının portresi" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsLCCx3O4jtAR9sTdeMBuCSUDyE6UQo-iwUPC4ECQf1ElR_zEp-wOdQ2mLWeYa5OT7UjiImwNllXz02qwHs-rvueotfUio49NpzvYpgI5itY8QSg-Bv-nFhS4seqRJROGV085QOLuACb8me9iUiQnYTy3LU-Pgji0jLauS4JzBKin8Zy1w6NnLr11zcvBn8d_CWiujeZsXndm5ppK_35d0KJMEyeThhgh02E54YrjEmOL_JLzFnnX7INR-9UdUcWsAum18qTWEYrM")` }}>
              <div className="flex w-full items-end justify-between gap-4 p-4">
                <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                  <p className="text-white text-base font-normal leading-normal">Klasik sinema ve çağdaş kurguya olan sevgim hakkında kısa, esprili bir biyografi.</p>
                  <p className="text-white tracking-light text-3xl font-bold leading-tight max-w-[440px]">Jessica, 28</p>
                  <p className="text-white text-lg font-medium leading-normal">5 ortak film, 3 ortak kitap</p>
                </div>
                <div className="flex-shrink-0">
                  <Button className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">info</span>
                  </Button>
                </div>
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-[90%] mt-24 rounded-t-[10px] flex flex-col">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="flex-1 overflow-y-auto">
              <MatchedUserProfileDrawerContent />
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                <span className="material-symbols-outlined icon-outline">arrow_back</span>
              </Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </main>

      {/* Eylem Butonları (ActionsBar) */}
      <div className="py-4">
        <div className="@container">
          <div className="gap-4 px-4 grid-cols-[repeat(auto-fit,minmax(80px,_1fr))] grid">
            <div className="flex flex-col items-center gap-2 py-2.5 text-center">
              <Button className="rounded-full bg-slate-200 dark:bg-chip-dark-bg p-4 flex items-center justify-center w-16 h-16">
                <span className="material-symbols-outlined text-slate-800 dark:text-white text-3xl">close</span>
              </Button>
              <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">Geç</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2.5 text-center">
              <Button className="rounded-full bg-primary-app/20 dark:bg-primary-app/30 p-3 flex items-center justify-center w-14 h-14">
                <span className="material-symbols-outlined text-primary-app text-2xl">star</span>
              </Button>
              <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">Süper Beğeni</p>
            </div>
            <div className="flex flex-col items-center gap-2 py-2.5 text-center">
              <Button className="rounded-full bg-accent-app/20 dark:bg-accent-app/30 p-4 flex items-center justify-center w-16 h-16">
                <span className="material-symbols-outlined text-accent-app text-3xl">favorite</span>
              </Button>
              <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">Beğen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Navigasyon Çubuğu (BottomNavBar) */}
      <nav className="flex gap-2 border-t border-slate-200 dark:border-chip-dark-bg bg-background-light dark:bg-surface-dark px-4 pb-3 pt-2">
        {/* Keşfet (Sol) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/explore">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">travel_explore</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Keşfet</p>
        </Link>

        {/* Eşleş (Kalp ikonu - Orta) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary-app" to="/matches">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <p className="text-primary-app text-xs font-medium leading-normal tracking-[0.015em]">Eşleş</p>
        </Link>

        {/* Profil (Sadece ikon) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/profile">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
          {/* Profil yazısı kaldırıldı */}
        </Link>

        {/* Sohbetler */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="#">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Sohbetler</p>
        </Link>

        {/* Ayarlar */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/settings">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Ayarlar</p>
        </Link>
      </nav>
    </div>
  );
};

export default MatchesPage;