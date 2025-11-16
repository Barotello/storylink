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
              data-alt="User profile picture"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOxi_CQu8qdHRc62SS1DZs_4lDZEA3AwgiBhzfNNbB-BICmymjcFM86f8BU03ywrE0DFw-J9dYJ8jD84i4bu9BE-bITUCiu_wbrXKZ9ZzWXsODnx0fJMuANYaHJ7jLX2UoV4DszW8gm896DWEnenIO5eUk8IZHa6w4tn3CppiIAo2grgIyL3cr_eIMUgm9UYsoq60LbXKJcjHO1epXTFD7ZWVOIb6hRAWczXIfdzDzcjNSHU37y9XPsBojFKfMdqGpk2y2nileJe0")`,
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">Elif Yılmaz</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">elif.yilmaz@eposta.com</p>
            </div>
          </div>
          <Button variant="ghost" className="shrink-0 p-0 h-auto w-auto">
            <div className="text-slate-600 dark:text-white flex size-7 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Button>
        </Link>
        <div className="h-6"></div>
        
        {/* Destek Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70 px-4 pb-2 pt-4">Destek</h2>
          <div className="bg-slate-200/50 dark:bg-white/5 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-slate-800 dark:text-white flex items-center justify-center rounded-lg bg-slate-300/50 dark:bg-white/10 shrink-0 size-10">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <p className="text-slate-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">Yardım ve Destek</p>
              </div>
              <div className="shrink-0">
                <div className="text-slate-600 dark:text-white/70 flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
            <hr className="border-slate-300/50 dark:border-white/10 ml-[4.5rem]" />
            <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-slate-800 dark:text-white flex items-center justify-center rounded-lg bg-slate-300/50 dark:bg-white/10 shrink-0 size-10">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <p className="text-slate-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">Hakkında</p>
              </div>
              <div className="shrink-0">
                <div className="text-slate-600 dark:text-white/70 flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-10"></div>
        {/* Logout Button */}
        <section className="flex flex-col items-center gap-4">
          <Button className="flex w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-primary/20 px-6 py-3 text-center text-base font-bold text-primary transition-colors hover:bg-primary/30">
            <span>Çıkış Yap</span>
          </Button>
          <Button variant="link" className="text-center text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-0 h-auto">
            Hesabı Sil
          </Button>
        </section>
        <div className="h-10"></div>
      </main>
    </div>
  );
};

export default SettingsPage;