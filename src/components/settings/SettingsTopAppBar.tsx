import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SettingsTopAppBar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-sm justify-between">
      <Button
        variant="ghost"
        className="text-slate-800 dark:text-white flex size-10 shrink-0 items-center justify-center p-0"
        onClick={() => navigate(-1)}
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </Button>
      <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Ayarlar</h1>
      <div className="size-10 shrink-0"></div>
    </header>
  );
};

export default SettingsTopAppBar;