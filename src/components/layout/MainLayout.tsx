import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

const MainLayout = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex-1">
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default MainLayout;