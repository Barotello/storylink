import React from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const ExploreHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 bg-background">
      <div className="flex items-center p-4 pb-2 justify-between gap-4">
        <label
          className="flex flex-col min-w-40 h-12 flex-1 cursor-pointer"
          onClick={() => navigate("/search")}
        >
          <div className="flex w-full flex-1 items-stretch rounded-full h-full">
            <div className="text-muted-foreground flex border-none bg-card items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <Input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-foreground focus:outline-0 focus:ring-0 border-none bg-card focus:border-none h-full placeholder:text-muted-foreground px-4 pl-2 text-base font-normal leading-normal cursor-pointer"
              placeholder="Filmleri, kitapları, kullanıcıları ara..."
              value=""
              readOnly
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ExploreHeader;