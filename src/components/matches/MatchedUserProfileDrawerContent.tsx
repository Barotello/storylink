import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MatchedUserProfileDrawerContent = () => {
  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden text-zinc-900 dark:text-zinc-50">
      {/* 1. Profil Fotoğraf Galerisi */}
      <div className="relative w-full h-[60vh] sm:h-[70vh]">
        <img className="absolute inset-0 w-full h-full object-cover" data-alt="A smiling woman with brown hair looking over her shoulder." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhchh8XKOBvLVWxmzCW5c_y0PfQeBS5WhgmYXE2vIuSnymS9N37M2ix1ei8H6spNwqq9wwLdDhof1HuO76ux5rqGvbd2F139s05f6g3KyR99BBoO12993l96oA7K0Icl6aVmNtZW-9yLoe1NuA3WZFlAymBE8Gmv08Slf3l4BEH_MogeeLaLUAfv5lmVzsDrojkpbM9Hvc7usFsAdMeHLHYCH04NATdEKHb92eJ8LQiYes3_ZO60ltQzSgruj6e4WREdIYT363do"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
        <div className="absolute top-4 right-4 z-10">
          <Button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
            <span className="material-symbols-outlined icon-outline">more_horiz</span>
          </Button>
        </div>
        {/* Geri düğmesi çekmece tarafından sağlanacağı için kaldırıldı */}
      </div>
      <div className="p-5 -mt-20 relative z-10 space-y-6">
        {/* 2. Temel Bilgiler Kartı */}
        <div className="bg-surface-light dark:bg-surface-dark backdrop-blur-xl p-5 rounded-lg border border-white/10 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-white tracking-tight text-3xl font-bold leading-tight">Jessica, 29</h1>
              <p className="text-zinc-300 text-base font-normal leading-normal pt-1">İstanbul, Türkiye • UI/UX Tasarımcısı</p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="material-symbols-outlined text-green-400 text-sm">circle</span>
              <span className="text-zinc-200 text-sm">Online</span>
            </div>
          </div>
        </div>
        {/* 3. Hakkında Bölümü */}
        <div className="space-y-2">
          <h3 className="text-zinc-200 text-lg font-bold leading-tight tracking-[-0.015em] px-1">Hakkında</h3>
          <p className="text-zinc-300 text-base font-normal leading-relaxed px-1">
            Sinema büyüsüne ve kitapların derinliğine inanan biriyim. İyi bir kahve eşliğinde saatlerce film eleştirisi yapabilir veya favori yazarlarım hakkında konuşabilirim. Birlikte keşfedecek yeni dünyalar arıyorum.
          </p>
        </div>
        {/* 4. Film Galerisi */}
        <div className="space-y-4">
          <h3 className="text-zinc-200 text-lg font-bold leading-tight tracking-[-0.015em]">Favori Filmleri</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5" style={{ scrollbarWidth: "none", MsOverflowStyle: "none" }}>
            {/* Ortak Zevk Vurgusu Örneği */}
            <div className="flex-shrink-0 w-32 relative">
              <div className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-profile-accent-red flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">favorite</span>
              </div>
              <img className="w-full h-48 object-cover rounded-lg shadow-lg border-2 border-profile-accent-red" data-alt="Inception movie poster." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1OuVe8kY9wT9BcjZr2bh076RoPSHWbigtM9zlPwjNrz2lyjXSZVMzTKBfT5iEaewh0ZL0Tf4_bcCOYObRIFsfpLbyi4E9hqAj35eRDuRFbxwOwPA_nrJbhfhbCLv4lHNmojUc6Hj4qA5CGHRlmD-42rlFvxXOqkJODYZOV6znPylclf11iQoxql4XN6E7l-Vm4H25wtb0vq_GC2Q2LQUrmo4fuEr9hbjamax_D-u1_Cf9dfAIhu0kfW96T2ndxFgRJKfcXf337fE"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Inception</p>
            </div>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="The Lord of the Rings: The Fellowship of the Ring movie poster." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHIfrjhZ8biw16Yqd87sAtHkeyGZXRZGOTm2ouoTeiN7LcX-0Y6AUYP69WPr7cYOR0eg-W_b3ZnJ_lF2gvEobAfEN10gt_vCHpxBf9T_OMKyT8zzd4mG5oVUqKBY4IRsxtkTOdkQ8-irI-FJukLSh9Lwb0IM26Eq3g5Qb10yr0irTJabI-n0kT_Eo0Yc7V3t_b-VMKn45Y0kUCUN4bp5UeOnLuhRjOMzD-BRCpXws19s85LKnbUnB0d8QTU2u8SwMYF1Uh3p5H9ic"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Yüzüklerin Efendisi</p>
            </div>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="The Dark Knight movie poster." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKnSh8WeDT_M47G-246Dz21x1yp5qOBtu4HpD3b_hvXp96hZpfT60f_9VW7dY6dufCUApruO13A_f_NQTfDA1ld1MxPJ_MDpIggTl8XPpdo-fw55KQnuqTpiNmX6_NC134VUFdDhP41UculM1F3ZielwwacYp7XQb953GEf7eamkq5nZxhYP4xDjRrb70wFfl9NFpItXcU93slm2moqRtqC2przFym0"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">The Dark Knight</p>
            </div>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="Parasite movie poster." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvARva86Sx2Fl3cYo-gkekqmD7L5Jiztk947fsbgRp9AWmHcFa9TDbHAJhpoexJrlbP1R93lnaOnELaRgvqQstEnfkcswlXJ17O8aT9fzMuJyrlaKcLM1CKwx-7_cYnf_JaL0gZGYx9aucdJaRRe-lnqJDW5C2BuD1-esacjsv12rsUPdRMuXLNTloI_kQBzCYzeCqK7LLo9yIQEzpHMzZsM64ftHpRhg7hF2BrdnFPAra-8dr0UcL-K40aWIObfFF2KyUMnVn4do"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Parasite</p>
            </div>
          </div>
        </div>
        {/* 5. Kitap Galerisi */}
        <div className="space-y-4">
          <h3 className="text-zinc-200 text-lg font-bold leading-tight tracking-[-0.015em]">Favori Kitapları</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5" style={{ scrollbarWidth: "none", MsOverflowStyle: "none" }}>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="The Hunger Games book cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDOWe1S7jSp5LNcL3CDOCkxF2x04UOxh5AMDDPtKYM-acaBuoFCDqjErfT2FqPrnt3zDB_HcF4iM0MQi1udFwEg4xwuyKbu6eSfL23RTVee0J72N2UvBCrr_2ppX089d2piXm6xJWgSKGFfQOSlUxgXKZQjMEAZiZ2klBKC7DQordgunDxGBXBeGwnuc-Vk4bYNHQEaKM_vjC-iwoczbdJ9ozfF1rz5lXavT7fbGv5lGhrnZhuee2v978DCQLqi4tmmsVLZaHxaE"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Açlık Oyunları</p>
            </div>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="1984 book cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSLfM1Jb086kLwiE5xg8Ncjy8BvfoQMc9ojrTycFyutWzSwBp4lB2_3Ayzp7qoE45n8o0P44fMzObg1IjjRSv4jBtfLRK9IGITk_zF8nLiKg2QYnGZognd1wYxLhEx450qBAcyfiJ1zXqr2-EnF_X-ZzRR_TYhCtYWeo-RyYXcD-OqsalGmsPBzRMPVMauhyfYLLc2BMvrPIl7DOkOzapfIKlcisq6LAjy5rQi14e6rqEcvjbn97YBinWWQdX8WA20y_zHxii7BpQ"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">1984</p>
            </div>
            {/* Ortak Zevk Vurgusu Örneği */}
            <div className="flex-shrink-0 w-32 relative">
              <div className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-profile-accent-red flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">favorite</span>
              </div>
              <img className="w-full h-48 object-cover rounded-lg shadow-lg border-2 border-profile-accent-red" data-alt="Dune book cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-LMk73sNZtVJM_1uF28tKJkoV_Ca2-VY3rZm6Tv3IsttG9s0KPl8j73ciy8pmeU_fH5z2Y39ucsWXamztgYZEK68K2FPRlNYhp0935Hj75iY5CvLYrhyKhuc_v_e92zJaiDcdvPIDMLdrJw0KzTI59kRZWLZgWKuAWymCR4IY_TuzO8o0avEZQv3tWPxGfgPhhIBESRPm5F9tanwZDqbeg3Z8LcNCydkgMJt4iMkLz-DC2Lpl-T6y0oNgrhNR1TNc7x_5WfOaAY"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Dune</p>
            </div>
            <div className="flex-shrink-0 w-32">
              <img className="w-full h-48 object-cover rounded-lg shadow-lg" data-alt="The Hitchhiker's Guide to the Galaxy book cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBTkiOwCES-I0h0reW3vv2UiekaCrtn-Am5jCV4BCIv-KqTblUDPMypjPyXNysBRWSBfeqz_sEHl6tByQSQkxzDwrRHd5DRKkD0KPduTgXPkAoqx9CYyeroU6arN9A0XtZ5HJo8th0j2Lzdfe1Jc4GewrIj-4BaM5xiOSakAphCzIkA5ajF8D4p60BSiJ_Yf1DJqGTDpb2vROY-KrlCaS4gdx9l4xT8zQSa2ku0GDsn45RvTC-D5a5UONQg9RFToaRMXpCVup-SzY"/>
              <p className="text-white text-sm font-semibold mt-2 truncate">Otostopçunun Galaksi Rehberi</p>
            </div>
          </div>
        </div>
        {/* 6. Detaylı Bilgiler */}
        <div className="space-y-4">
          <h3 className="text-zinc-200 text-lg font-bold leading-tight tracking-[-0.015em]">Detaylar</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">cake</span>
              <span className="text-zinc-200 text-sm">Terazi</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">school</span>
              <span className="text-zinc-200 text-sm">Lisans</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">music_note</span>
              <span className="text-zinc-200 text-sm">Indie Rock</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">sports_esports</span>
              <span className="text-zinc-200 text-sm">Oyun</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">flight</span>
              <span className="text-zinc-200 text-sm">Seyahat</span>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-300 icon-outline">local_bar</span>
              <span className="text-zinc-200 text-sm">Bazen</span>
            </div>
          </div>
        </div>
      </div>
      {/* 7. Sabit Aksiyon Butonları (Çekmece içinde yapışkan) */}
      <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark p-4 z-20">
        <div className="max-w-md mx-auto flex justify-around items-center gap-4 bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-lg p-3 rounded-full border border-white/10">
          <Button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined text-3xl">close</span>
          </Button>
          <Button className="w-20 h-20 rounded-full bg-profile-accent-red flex items-center justify-center text-white shadow-lg shadow-profile-accent-red/30 transform hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-5xl">favorite</span>
          </Button>
          <Button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined text-3xl">chat_bubble</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchedUserProfileDrawerContent;