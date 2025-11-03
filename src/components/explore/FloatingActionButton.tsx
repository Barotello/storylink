import React from "react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  return (
    <Button className="fixed bottom-6 right-6 flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-app text-white shadow-lg transition hover:bg-primary-app/90">
      <span className="material-symbols-outlined text-4xl">edit</span>
    </Button>
  );
};

export default FloatingActionButton;