import React from "react";
import { Button } from "@/components/ui/button";

interface FloatingActionButtonProps {
  isVisible: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ isVisible }) => {
  return (
    <Button className={`fixed bottom-6 right-6 flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-primary-app text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-primary-app/90 hover:shadow-xl z-30 ${
      isVisible ? "translate-y-0" : "translate-y-full"
    }`}>
      <span className="material-symbols-outlined text-4xl">add</span>
    </Button>
  );
};

export default FloatingActionButton;