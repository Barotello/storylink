import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExplorePage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark p-4">
      <h1 className="text-3xl font-bold mb-4">Keşfet Sayfası</h1>
      <p className="text-lg text-subtle-light dark:text-subtle-dark mb-8 text-center">
        Burada yeni keşfetme içeriği yer alacak.
      </p>
      <Link to="/matches">
        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
          <span className="truncate">Eşleşmeler'e Git</span>
        </Button>
      </Link>

      {/* Alt Navigasyon Çubuğu (BottomNavBar) */}
      <nav className="fixed bottom-0 left-0 right-0 flex gap-2 border-t border-slate-200 dark:border-chip-dark-bg bg-background-light dark:bg-surface-dark px-4 pb-3 pt-2">
        {/* Keşfet (Sol) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary-app" to="/explore">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
          </div>
          <p className="text-primary-app text-xs font-medium leading-normal tracking-[0.015em]">Keşfet</p>
        </Link>

        {/* Sohbetler */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="#">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Sohbetler</p>
        </Link>

        {/* Eşleş (Kalp ikonu - Orta) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/matches">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Eşleş</p>
        </Link>

        {/* Profil */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/profile">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Profil</p>
        </Link>

        {/* Ayarlar */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="#">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Ayarlar</p>
        </Link>
      </nav>
    </div>
  );
};

export default ExplorePage;