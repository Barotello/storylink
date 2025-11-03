import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SettingsSubPageAppBarProps {
  title: string;
}

const SettingsSubPageAppBar: React.FC<SettingsSubPageAppBarProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center p-4 sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <Button
        variant="ghost"
        className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 p-0"
        onClick={() => navigate(-1)}
      >
        <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
      </Button>
      <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">{title}</h1>
      <div className="size-10 shrink-0"></div>
    </header>
  );
};

export default SettingsSubPageAppBar;