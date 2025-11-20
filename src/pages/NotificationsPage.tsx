import React from "react";
import SettingsSubPageAppBar from "@/components/settings/SettingsSubPageAppBar";

const NotificationsPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display text-text-dark">
      <SettingsSubPageAppBar title="Bildirimler" />
      <main className="flex-1 px-4 py-4 text-center pb-24">
        <h1 className="text-2xl font-bold mt-8">Bildirimleriniz</h1>
        <p className="text-subtle-dark mt-2">Burada tüm bildirimlerinizi göreceksiniz.</p>
        {/* Örnek bildirimler eklenebilir */}
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-surface-dark rounded-lg shadow-sm text-left">
            <p className="font-medium">Elif Kaya yeni bir film paylaştı.</p>
            <p className="text-sm text-subtle-dark">2 dakika önce</p>
          </div>
          <div className="p-4 bg-surface-dark rounded-lg shadow-sm text-left">
            <p className="font-medium">Mehmet Yılmaz gönderinizi beğendi.</p>
            <p className="text-sm text-subtle-dark">1 saat önce</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;