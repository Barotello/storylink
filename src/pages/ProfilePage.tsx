import React from "react";
import { Link } from "react-router-dom";
import SettingsTopAppBar from "@/components/settings/SettingsTopAppBar"; // Genel üst çubuğu kullanabiliriz

const ProfilePage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <SettingsTopAppBar /> {/* Kendi profil sayfanız için de genel bir üst çubuk kullanabiliriz */}
      <main className="flex-1 px-4 py-4 text-center">
        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark mt-8">Kendi Profil Sayfanız</h1>
        <p className="text-subtle-light dark:text-subtle-dark mt-2">Burada kendi profil bilgilerinizi ve tercihlerinizi göreceksiniz.</p>
        <div className="mt-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOxi_CQu8qdHRc62SS1DZs_4lDZEA3AwgiBhzfNNbB-BICmymjcFM86f8BU03ywrE0DFw-J9dYJ8jD84i4bu9BE-bITUCiu_wbrXKZ9ZzWXsODnx0fJMuANYaHJ7jLX2UoV4DszW8gm9UYsoq60LbXKJcjHO1epXTFD7ZWVOIb6hRAWczXIfdzDzcjNSHU37y9XPsBojFKfMdqGpk2y2nileJe0"
            alt="User profile picture"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mt-4">Elif Yılmaz</h2>
          <p className="text-subtle-light dark:text-subtle-dark">elif.yilmaz@eposta.com</p>
        </div>
        <Link to="/settings/account" className="mt-6 inline-block text-primary-app hover:underline">
          Profilimi Düzenle
        </Link>
      </main>
    </div>
  );
};

export default ProfilePage;