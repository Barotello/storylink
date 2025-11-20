import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display text-text-dark">
      <header className="sticky top-0 z-10 flex items-center bg-background-dark/80 p-4 pb-2 backdrop-blur-sm justify-between">
        <Button
          variant="ghost"
          className="text-white flex size-10 shrink-0 items-center justify-center p-0"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Button>
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Arama</h1>
        <div className="size-10 shrink-0"></div>
      </header>
      <main className="flex-1 px-4 py-4 pb-24"> {/* Alt navigasyon çubuğu için yeterli boşluk bırak */}
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-nav-dark-text flex border-none bg-chip-dark-bg items-center justify-center pl-4 rounded-l-xl border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <Input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-0 border-none bg-chip-dark-bg focus:border-none h-full placeholder:text-nav-dark-text px-4 pl-2 text-base font-normal leading-normal"
              placeholder="Filmleri, kitapları, kullanıcıları ara..."
              value=""
            />
          </div>
        </label>
        <div className="mt-8 text-center text-subtle-dark">
          <p>Aramaya başlamak için yukarıdaki kutuyu kullanın.</p>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;