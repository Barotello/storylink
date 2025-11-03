import React from "react";
import { Link } from "react-router-dom";
import SettingsSubPageAppBar from "@/components/settings/SettingsSubPageAppBar";
import { Switch } from "@/components/ui/switch";

const AccountSettingsPage = () => {
  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <SettingsSubPageAppBar title="Ayarlar" />
      <main className="flex-1 px-4 py-2">
        {/* Hesap Yönetimi Bölümü */}
        <section className="mb-6">
          <h2 className="px-4 pb-2 text-sm font-bold uppercase tracking-wider text-subtle-light dark:text-subtle-dark">Hesap</h2>
          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm">
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">person</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Hesap Bilgileri</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
            <hr className="border-border-light dark:border-border-dark ml-14"/>
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">edit</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Profilimi Düzenle</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
          </div>
        </section>
        {/* Tercihler ve Ayarlar Bölümü */}
        <section className="mb-6">
          <h2 className="px-4 pb-2 text-sm font-bold uppercase tracking-wider text-subtle-light dark:text-subtle-dark">Tercihler ve Ayarlar</h2>
          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm">
            <div className="flex items-center gap-4 p-4 min-h-14">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Bildirimler</p>
              <div className="shrink-0">
                <Switch defaultChecked={true} />
              </div>
            </div>
            <hr className="border-border-light dark:border-border-dark ml-14"/>
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Gizlilik ve Güvenlik</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
            <hr className="border-border-light dark:border-border-dark ml-14"/>
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Film ve Kitap Listem</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
          </div>
        </section>
        {/* Uygulama Bilgileri ve Destek Bölümü */}
        <section class="mb-6">
          <h2 className="px-4 pb-2 text-sm font-bold uppercase tracking-wider text-subtle-light dark:text-subtle-dark">Destek</h2>
          <div className="flex flex-col overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm">
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">help</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Yardım ve Destek</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
            <hr className="border-border-light dark:border-border-dark ml-14"/>
            <Link className="flex items-center gap-4 p-4 min-h-14 transition-colors hover:bg-black/5 dark:hover:bg-white/5" to="#">
              <div className="flex items-center justify-center rounded-full bg-primary-app/10 text-primary-app shrink-0 size-10">
                <span className="material-symbols-outlined">info</span>
              </div>
              <p className="flex-1 truncate text-base font-medium text-text-light dark:text-text-dark">Hakkında</p>
              <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark shrink-0">chevron_right</span>
            </Link>
          </div>
        </section>
        {/* Oturum Yönetimi */}
        <section className="mt-8 mb-4 space-y-4">
          <button className="w-full rounded-lg bg-primary-app/20 px-6 py-3 text-base font-bold text-primary-app transition-colors hover:bg-primary-app/30">
            Çıkış Yap
          </button>
          <button className="w-full rounded-lg px-6 py-3 text-base font-medium text-destructive transition-colors hover:bg-destructive/10">
            Hesabı Sil
          </button>
        </section>
      </main>
    </div>
  );
};

export default AccountSettingsPage;