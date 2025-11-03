import React from "react";
import { Button } from "@/components/ui/button";

interface FloatingActionButtonProps {
  isVisible: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ isVisible }) => {
  return (
    <Button className={`fixed bottom-12 right-6 flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-app text-white shadow-lg transition-transform duration-300 ease-in-out ${
      isVisible ? "translate-y-0" : "translate-y-full"
    }`}>
      <span className="material-symbols-outlined text-4xl">edit</span>
    </Button>
  );
};

export default FloatingActionButton;