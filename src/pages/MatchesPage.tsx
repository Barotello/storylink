import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import ProfilePage from "@/pages/ProfilePage";

const MatchesPage = () => {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background font-display text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-4 z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-app text-3xl">movie_filter</span>
          <span className="font-bold text-xl tracking-tight">StoryLink</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="material-symbols-outlined">tune</span>
        </Button>
      </header>

      {/* Main Content - Card Stack */}
      <main className="flex-1 relative px-4 pb-24 flex flex-col">
        {/* Filter Chips */}
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
            <span className="material-symbols-outlined text-muted-foreground text-sm">location_on</span>
            <span className="text-xs font-medium">İstanbul</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-app/10 border border-primary-app/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary-app text-sm">favorite</span>
            <span className="text-xs font-medium text-primary-app">10 Beğeni Kaldı</span>
          </div>
        </div>

        {/* Profile Card */}
        <Drawer open={isProfileDrawerOpen} onOpenChange={setIsProfileDrawerOpen}>
          <DrawerTrigger asChild>
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group transition-transform active:scale-[0.98]">
              {/* Background Image */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsLCCx3O4jtAR9sTdeMBuCSUDyE6UQo-iwUPC4ECQf1ElR_zEp-wOdQ2mLWeYa5OT7UjiImwNllXz02qwHs-rvueotfUio49NpzvYpgI5itY8QSg-Bv-nFhS4seqRJROGV085OQLuACb8me9iUiQnYTy3LU-Pgji0jLauS4JzBKin8Zy1w6NnLr11zcvBn8d_CWiujeZsXndm5ppK_35d0KJMEyeThhgh02E54YrjEmOL_JLzFnnX7INR-9UdUcWsAum18yTWEYrM"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-3">
                {/* Match Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-app/90 backdrop-blur-md shadow-lg mb-2">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span className="text-xs font-bold">%95 Eşleşme</span>
                </div>

                <div>
                  <h2 className="text-3xl font-bold flex items-end gap-2">
                    Jessica <span className="text-xl font-medium opacity-90">28</span>
                  </h2>
                  <p className="text-white/90 text-sm line-clamp-2 mt-1 font-medium leading-relaxed">
                    Klasik sinema ve çağdaş kurguya olan sevgim hakkında kısa, esprili bir biyografi. 🎬📚
                  </p>
                </div>

                {/* Shared Interests */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/10">
                    <span className="material-symbols-outlined text-[18px]">movie</span>
                    <span className="text-xs font-semibold">5 Ortak Film</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/10">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                    <span className="text-xs font-semibold">3 Ortak Kitap</span>
                  </div>
                </div>
              </div>
            </div>
          </DrawerTrigger>

          <DrawerContent className="h-[92%] mt-24 rounded-t-[20px]">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted/50 my-4" />
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <ProfilePage isDrawer={true} />
            </div>
          </DrawerContent>
        </Drawer>
      </main>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6 z-20 pointer-events-none">
        {/* Pass Button */}
        <Button
          variant="outline"
          className="w-16 h-16 rounded-full border-2 border-red-500 bg-background/80 backdrop-blur-md text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-lg pointer-events-auto"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </Button>

        {/* Super Like Button */}
        <Button
          variant="outline"
          className="w-12 h-12 rounded-full border-2 border-blue-500 bg-background/80 backdrop-blur-md text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg pointer-events-auto mb-4"
        >
          <span className="material-symbols-outlined text-2xl">star</span>
        </Button>

        {/* Like Button */}
        <Button
          variant="outline"
          className="w-16 h-16 rounded-full border-2 border-green-500 bg-background/80 backdrop-blur-md text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 shadow-lg pointer-events-auto"
        >
          <span className="material-symbols-outlined text-3xl">favorite</span>
        </Button>
      </div>
    </div>
  );
};

export default MatchesPage;