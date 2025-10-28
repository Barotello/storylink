import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MatchesPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark p-4">
      <h1 className="text-3xl font-bold mb-4">Eşleşmeler Sayfası</h1>
      <p className="text-lg text-subtle-light dark:text-subtle-dark mb-8 text-center">
        Burada eşleşmelerinizi göreceksiniz. Yakında daha fazla özellik eklenecek!
      </p>
      <Link to="/explore">
        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-app/30 hover:bg-primary-app/90">
          <span className="truncate">Keşfet'e Geri Dön</span>
        </Button>
      </Link>
    </div>
  );
};

export default MatchesPage;