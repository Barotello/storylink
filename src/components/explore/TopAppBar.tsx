import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TopAppBar = () => {
  return (
    <header className="sticky top-0 z-10 bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start text-white">
          <span className="material-symbols-outlined text-3xl">local_activity</span>
        </div>
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Keşfet</h1>
        <div className="flex w-12 items-center justify-end">
          <Button variant="ghost" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">search</span>
          </Button>
        </div>
      </div>
      {/* Tabs */}
      <div className="pb-0">
        <div className="flex border-b border-white/10 px-4 justify-between">
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4 flex-1" to="#">
            <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Filmler</p>
          </Link>
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/60 pb-[13px] pt-4 flex-1" to="#">
            <p className="text-white/60 text-sm font-bold leading-normal tracking-[0.015em]">Kitaplar</p>
          </Link>
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/60 pb-[13px] pt-4 flex-1" to="#">
            <p className="text-white/60 text-sm font-bold leading-normal tracking-[0.015em]">Popüler</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;