import React from "react";
import { Link } from "react-router-dom";
import SettingsTopAppBar from "@/components/settings/SettingsTopAppBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // shadcn/ui Switch bileşenini import et

const SettingsPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <SettingsTopAppBar />
      <main className="flex-1 px-4 py-4">
        {/* Profile Section - Links to AccountSettingsPage */}
        <Link to="/settings/account" className="flex items-center gap-4 bg-background-light dark:bg-background-dark min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16"
              data-alt="User profile picture, a person smiling."
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOxi_CQu8qdHRc62SS1DZs_4lDZEA3AwgiBhzfNNbB-BICmymjcFM86f8BU03ywrE0DFw-J9dYJ8jD84i4bu9BE-bITUCiu_wbrXKZ9ZzWXsODnx0fJMuANYaHJ7jLX2UoV4DszW8gm9UYsoq60LbXKJcjHO1epXTFD7ZWVOIb6hRAWczXIfdzDzcjNSHU37y9XPsBojFKfMdqGpk2y2nileJe0")`,
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-text-light dark:text-white text-base font-medium leading-normal line-clamp-1">Elif Yılmaz</p>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal line-clamp-2">elif.yilmaz@eposta.com</p>
            </div>
          </div>
          <Button variant="ghost" className="shrink-0 p-0 h-auto w-auto">
            <div className="text-subtle-light dark:text-white flex size-7 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Button>
        </Link>
        <div className="h-6"></div>
        
        {/* Destek Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-subtle-light dark:text-subtle-dark px-4 pb-2 pt-4">Destek</h2>
          <div className="bg-surface-light/50 dark:bg-surface-dark/50 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-text-light dark:text-white flex items-center justify-center rounded-lg bg-border-light/50 dark:bg-border-dark/50 shrink-0 size-10">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <p className="text-text-light dark:text-white text-base font-normal leading-normal flex-1 truncate">Yardım ve Destek</p>
              </div>
              <div className="shrink-0">
                <div className="text-subtle-light dark:text-white/70 flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
            <hr className="border-border-light/50 dark:border-border-dark/50 ml-[4.5rem]" />
            <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-text-light dark:text-white flex items-center justify-center rounded-lg bg-border-light/50 dark:bg-border-dark/50 shrink-0 size-10">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <p className="text-text-light dark:text-white text-base font-normal leading-normal flex-1 truncate">Hakkında</p>
              </div>
              <div className="shrink-0">
                <div className="text-subtle-light dark:text-white/70 flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-10"></div>
        {/* Logout Button */}
        <section className="flex flex-col items-center gap-4">
          <button className="flex w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-primary-app/20 px-6 py-3 text-center text-base font-bold text-primary-app transition-colors hover:bg-primary-app/30">
            <span>Çıkış Yap</span>
          </button>
          <button className="text-center text-sm font-medium text-subtle-light hover:text-text-light dark:text-subtle-dark dark:hover:text-text-dark p-0 h-auto">
            Hesabı Sil
          </button>
        </section>
        <div className="h-10"></div>
      </main>
    </div>
  );
};

export default SettingsPage;