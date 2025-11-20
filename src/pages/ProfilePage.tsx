import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Button bileşenini import et

const ProfilePage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      {/* Profil Sayfası için Özel Başlık Çubuğu */}
      <header className="sticky top-0 z-10 flex items-center bg-background-dark/80 p-4 pb-2 backdrop-blur-sm justify-between">
        <div className="size-10 shrink-0"></div> {/* Sol yer tutucu */}
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Profilim</h1>
        <Link to="/settings" className="flex size-10 shrink-0 items-center justify-center p-0">
          <Button variant="ghost" className="text-white p-0">
            <span className="material-symbols-outlined">settings</span>
          </Button>
        </Link>
      </header>
      <main className="flex-1 px-4 py-4 text-center pb-24"> {/* Alt navigasyon çubuğu için yeterli boşluk bırak */}
        <h1 className="text-2xl font-bold text-text-dark mt-8">Kendi Profil Sayfanız</h1>
        <p className="text-subtle-dark mt-2">Burada kendi profil bilgilerinizi ve tercihlerinizi göreceksiniz.</p>
        <div className="mt-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOxi_CQu8qdHRc62SS1DZs_4lDZEA3AwgiBhzfNNbB-BICmymjcFM86f8BU03ywrE0DFw-J9dYJ8jD84i4bu9BE-bITUCiu_wbrXKZ9ZzWXsODnx0fJMuANYaHJ7jLX2UoV4DszW8gm9UYsoq60LbXKJcjHO1epXTFD7ZWVOIb6hRAWczXIfdzDzcjNSHU37y9XPsBojFKfMdqGpk2y2nileJe0"
            alt="User profile picture"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h2 className="text-xl font-semibold text-text-dark mt-4">Elif Yılmaz</h2>
          <p className="text-subtle-dark">elif.yilmaz@eposta.com</p>
        </div>
        {/* "Profili Düzenle" bağlantısı kaldırıldı */}
      </main>
    </div>
  );
};

export default ProfilePage;