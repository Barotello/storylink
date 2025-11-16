import React from "react";
import { Input } from "@/components/ui/input"; // Input bileşenini import et

const ExploreHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between gap-4"> {/* gap-4 eklendi */}
        {/* Sol taraftaki yer tutucu kaldırıldı, arama alanı tam genişlik kaplayacak */}
        <label className="flex flex-col min-w-40 h-12 flex-1"> {/* flex-1 ile tam genişlik */}
          <div className="flex w-full flex-1 items-stretch rounded-full h-full"> {/* rounded-full ile yuvarlatılmış köşeler */}
            <div className="text-nav-dark-text flex border-none bg-chip-dark-bg items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <Input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-white focus:outline-0 focus:ring-0 border-none bg-chip-dark-bg focus:border-none h-full placeholder:text-nav-dark-text px-4 pl-2 text-base font-normal leading-normal"
              placeholder="Filmleri, kitapları, kullanıcıları ara..."
              value=""
              readOnly // Şimdilik sadece görsel, arama fonksiyonu eklenmedi
            />
          </div>
        </label>
        {/* Sağ taraftaki arama ikonu kaldırıldı */}
      </div>
    </div>
  );
};

export default ExploreHeader;