import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
  const [showBottomNav, setShowBottomNav] = useState(true);
  const scrollHideThreshold = 100;
  const scrollShowThreshold = 50;
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollHideThreshold) {
        setShowBottomNav(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= scrollShowThreshold) {
        setShowBottomNav(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 flex gap-2 border-t border-border bg-background px-4 pb-3 pt-2 transition-transform duration-300 ease-in-out ${
        showBottomNav ? "translate-y-0" : "translate-y-full"
      } z-50`}
    >
      {/* Keşfet */}
      <Link className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive("/explore") ? "text-primary-app" : "text-muted-foreground"}`} to="/explore">
        <div className="flex h-8 items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive("/explore") ? "'FILL' 1" : "'FILL' 0" }}>travel_explore</span>
        </div>
        <p className="text-xs font-medium leading-normal tracking-[0.015em]">Keşfet</p>
      </Link>

      {/* Eşleş */}
      <Link className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive("/matches") ? "text-primary-app" : "text-muted-foreground"}`} to="/matches">
        <div className="flex h-8 items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive("/matches") ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
        </div>
        <p className="text-xs font-medium leading-normal tracking-[0.015em]">Eşleş</p>
      </Link>

      {/* Bildirimler */}
      <Link className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive("/notifications") ? "text-primary-app" : "text-muted-foreground"}`} to="/notifications">
        <div className="flex h-8 items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive("/notifications") ? "'FILL' 1" : "'FILL' 0" }}>notifications</span>
        </div>
        <p className="text-xs font-medium leading-normal tracking-[0.015em]">Bildirimler</p>
      </Link>

      {/* Sohbetler */}
      <Link className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive("/chats") ? "text-primary-app" : "text-muted-foreground"}`} to="/chats">
        <div className="flex h-8 items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive("/chats") ? "'FILL' 1" : "'FILL' 0" }}>chat_bubble</span>
        </div>
        <p className="text-xs font-medium leading-normal tracking-[0.015em]">Sohbetler</p>
      </Link>

      {/* Profil */}
      <Link className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive("/profile") ? "text-primary-app" : "text-muted-foreground"}`} to="/profile">
        <div className="flex h-8 items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive("/profile") ? "'FILL' 1" : "'FILL' 0" }}>person</span>
        </div>
        <p className="text-xs font-medium leading-normal tracking-[0.015em]">Profil</p>
      </Link>
    </nav>
  );
};

export default BottomNavBar;