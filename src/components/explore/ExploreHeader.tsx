import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExploreHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between">
        {/* Sol taraftaki profil bağlantısı kaldırıldı */}
        <div className="flex size-12 shrink-0 items-center"></div> {/* Yer tutucu */}
        <div className="flex w-12 items-center justify-end">
          <Button variant="ghost" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-subtle-dark">notifications</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;