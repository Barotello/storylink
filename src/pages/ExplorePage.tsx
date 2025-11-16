import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopAppBar from "@/components/explore/TopAppBar";
import FeedCard from "@/components/explore/FeedCard";
import FloatingActionButton from "@/components/explore/FloatingActionButton";

const ExplorePage = () => {
  const [showBottomNav, setShowBottomNav] = useState(true);
  const scrollHideThreshold = 100; // Aşağı kaydırıldığında menüyü gizlemek için eşik
  const scrollShowThreshold = 50; // Yukarı kaydırıldığında menüyü göstermek için eşik

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollHideThreshold) {
        // Aşağı kaydırılıyor ve gizleme eşiğini geçti
        setShowBottomNav(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= scrollShowThreshold) {
        // Yukarı kaydırılıyor veya sayfanın başına yakın
        setShowBottomNav(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark font-display text-text-light dark:text-text-dark">
      <TopAppBar />

      {/* Main Content Feed */}
      <main className="flex-1 pb-24"> {/* Alt navigasyon çubuğu için yeterli boşluk bırak */}
        {/* Card 1 */}
        <FeedCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDFxm-zLiQ27VEEr0FsHV0qjpNKRrvWKw7pps-ZSBICXRnAmobSVX9n7r3enaN8n1C-nV04ZQNERl8SF-vSQB3WswP6S2KtsM1EwnjbIc0yMp0Pdpfeon8b4oOVz85Iv6s-QBTwoyuH1ex3tcGXlwYoV6hK8LGz4zP5a8bTYfs8EI4G8V9QbQFv5bgP7uLPKInxBC-6abPUCxrEkEI4F4Jgzii3p_wThjJ0AiegACY98pFy7LJAYAL2Qxi_40nuWMEY4vwCiCcaWPw"
          userName="Can Y."
          userHandle="@cany"
          timeAgo="1 saat önce"
          content="Haruki Murakami'nin en iyi kitabı sizce hangisi? Benim favorim '1Q84', ama 'Sahilde Kafka'nın da yeri ayrı. Sizin düşüncelerinizi merak ediyorum."
          hashtags="#Murakami #KitapÖnerisi"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCoL9nQnNADN42ZgLp6yAkr4aWh9rz4c4A7NJOWJv5RYDRDt6ArEJVMpsHkx3K04haPeD8cqkrlr9l9elu1tgBilCKIq4oqUZYUmKnkXxti8uhURg9zz18y-X6aykEMybtzqFPlYpvdBQB5PJxphHJrTIMkrid6SC9MrtQONufbXysHVhS_lqJzd7o_iBChYrtBbfdOsURg9zz18y-X6aykEMybtzqFPlYpvdBQB5PJxphHJrTIMkrid6SC9MrtQONufbXysHVhS_lqJzd7o_iBChYrtBbfdOsURlP2q9eXL7OAII6YnlyTJ3i0jq8Vo_b7QnljJXB_98GWrRXfKlmLP3gZQ4BMNoIdAeZqY"
          likes="1.2k"
          comments="251"
          shares="89"
        />
        {/* Card 2 */}
        <FeedCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuComhxf3HOIfenjKAMlHypvc8eMRrMCRzDVrObFlVsfE0AeR-JzukjTK8_Oaf8avdwCTgrHJn1CDob1BaGpMGTnzuZwat6CCJroSiojxs1PeqIcegVxm0aid_n2kDw4Y0uRv5vIZJw4zjYRn2aTRCXUPXg9QEpZrVOJDu546ElbtReGsuEFFKNlGlpEQqCxHqtGyMRTG37FDuFLmXRXqF1WwPs8gslSokwzqe7fcYPf9NKVkFevEth44OA2BER01vhE5rqld2eVCnc"
          userName="Anna S."
          userHandle="@annas"
          timeAgo="5 dakika önce"
          content="Dune'u az önce bitirdim, görsel bir şölen! Paul Atreides'in yolculuğu ve Arrakis'in çöl manzaraları inanılmazdı. Özellikle görsel efektler ve müzikler beni büyüledi. Serinin ikinci filmini sabırsızlıkla bekliyorum."
          hashtags="#Dune #BilimKurgu"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA3eS8abB3x1D7zonEgEC9exQN_oFKSzBm4v4rwlIQFL2shVJGopo4qLSD0JsLTw3rcHWqLhO7GBcplh2I12FQvukpiOp9-SMncZ0EUcxCJrHbY_UuRh7-v_O1j-5EBzY_fYaKgWs-AIhPau50xyJBLi99jYnflOF5P3m-Ff0Tpzxw0_ChsVay3L-RX7y0kBaucSTm1foL07j8hqO9JPuzRTNQST53EM7rnEwhBxIHrys0_86ZZOeKsFn7ViUIVxMqodeMQB4NnTyQ"
          likes="3.7k"
          comments="582"
          shares="412"
        />
        {/* Card 3 */}
        <FeedCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCGoYTkKBtiV5kYAOWyfVsyxKXDsya5IiGvvyMupxTzZexoyFMKXpfA0-kyXagSEI38bt3lGMVeo1x5pvYwfSpVxFSlwLjzyKrWjYUOvlKqQ452r66z05jkRTBSWlGFQt-Acw8H0MVxXA4QyWKaTTqTiNPXAyxxKDIR76dGFWGlcUecoezjXBHmLfQB9mToQg97k0sAlW4NXxBJVVK2e2IZ31rDBhqJxhekovmNQP_HCfOJQ2JAEhXR1hFyjouEfn47KNh81uxbzZM"
          userName="Emir T."
          userHandle="@emirt"
          timeAgo="3 gün önce"
          content="Bu hafta sonu izlenecek film önerisi olan var mı? Şöyle sürükleyici bir gerilim arıyorum."
          hashtags="#FilmÖnerisi #Gerilim"
          likes="98"
          comments="45"
          shares="12"
        />
      </main>

      <FloatingActionButton isVisible={showBottomNav} />

      {/* Alt Navigasyon Çubuğu (BottomNavBar) */}
      <nav
        className={`fixed bottom-0 left-0 right-0 flex gap-2 border-t border-slate-200 dark:border-chip-dark-bg bg-background-light dark:bg-surface-dark px-4 pb-3 pt-2 transition-transform duration-300 ease-in-out ${
          showBottomNav ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Keşfet (Sol) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary-app" to="/explore">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
          </div>
          <p className="text-primary-app text-xs font-medium leading-normal tracking-[0.015em]">Keşfet</p>
        </Link>

        {/* Eşleş (Kalp ikonu - Orta) */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/matches">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Eşleş</p>
        </Link>

        {/* Sohbetler */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="#">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Sohbetler</p>
        </Link>

        {/* Ayarlar */}
        <Link className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-nav-dark-text" to="/settings">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </div>
          <p className="text-slate-500 dark:text-nav-dark-text text-xs font-medium leading-normal tracking-[0.015em]">Ayarlar</p>
        </Link>
      </nav>
    </div>
  );
};

export default ExplorePage;