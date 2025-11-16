import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExploreHeader from "@/components/explore/ExploreHeader";
import StoryCarousel from "@/components/explore/StoryCarousel";
import PostCard from "@/components/explore/PostCard";
// import FloatingActionButton from "@/components/explore/FloatingActionButton"; // Kaldırıldı

const ExplorePage = () => {
  // showBottomNav state'i ve useEffect'i BottomNavBar bileşenine taşındığı için burada artık gerekli değil.
  // Ancak, eğer bu sayfaya özel bir scroll davranışı istenirse burada tutulabilir.
  // Şu an için global BottomNavBar'ın scroll davranışını kullanacağız.

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-dark font-display text-text-light dark:text-text-dark">
      <ExploreHeader />
      <StoryCarousel />

      {/* Tabs */}
      <div className="pb-3 sticky top-[72px] z-10 bg-background-dark"> {/* TopAppBar'dan arama çubuğu kalktığı için top değeri güncellendi */}
        <div className="flex border-b border-border-dark px-4 justify-between">
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-primary-app text-white pb-[13px] pt-4 flex-1" to="#">
            <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Sana Özel</p>
          </Link>
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-nav-dark-text pb-[13px] pt-4 flex-1" to="#">
            <p className="text-nav-dark-text text-sm font-bold leading-normal tracking-[0.015em]">Trendler</p>
          </Link>
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-nav-dark-text pb-[13px] pt-4 flex-1" to="#">
            <p className="text-nav-dark-text text-sm font-bold leading-normal tracking-[0.015em]">Filmler</p>
          </Link>
          <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-nav-dark-text pb-[13px] pt-4 flex-1" to="#">
            <p className="text-nav-dark-text text-sm font-bold leading-normal tracking-[0.015em]">Kitaplar</p>
          </Link>
        </div>
      </div>

      {/* Main Content Feed */}
      <main className="flex-1 pb-24"> {/* Alt navigasyon çubuğu için yeterli boşluk bırak */}
        {/* Post Card 1 */}
        <PostCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1v-VkjLsjXU1-5MkGJEZLCIfZQKqUPm4TUOKLJ4TDs8ObBmSVWQiJEeT1tZ-T5trHKvF3IlYXIMBIU7I8FZdC6mkNUvMEsmZol5Q4EtQX3n5DGIczs_3w0tctYdicqgRiUl9qPImMN2UgwtSaJZI6oVIZBE4KhnGl7d5-z766M2OBX4oIQAiepPHGM3MAtCw16hmb92oLQ7SW6rUmWlZjVGMmw5g_BPY8BqCw4jxF4Biw_jm0zhmsajkvt0i7VQweHiSqRYEy2I"
          userName="Mert Yılmaz"
          userHandle="@mertyilmaz"
          timeAgo="2s önce"
          content="Az önce Dune: Part Two'yu bitirdim, filmin sonu hakkındaki düşünceleriniz neler?"
          mediaType="film"
          mediaTitle="Dune: Part Two"
          mediaImageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAa-flcZ06vYMzJ9yWygSKsmGRBXWQlmbnkTCo7UKGZfQVTe8hy3QXCtvnk7fX95836UY1h3zVYYr9V12tmSK_V-lvkisu83c3eZH2rUgjLrRZS3Ry6bdET86-3Jq0zTfRVZSP8JTdWw0gMVxvHc7MQW0wsOakUynRlgBbSVvdT8CpicnT1CnPZI_vto7x0jUqC3uMdos4HqEgOOCNvPyI05nbMxD2-r78dkkqSTC61oT_JzDrj3__N7iaXpGLmv9uf2u-ECXFmhM"
          comments="12"
          reposts="3"
          likes="47"
        />
        {/* Post Card 2 */}
        <PostCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGB2oZEPf4p3zu7WpYbCn3dWTC49agopcubP9E3VHzrdHVIpqWMhR45VJOpgVW90-uLwU1I4TV7fRj-44q37dfP1vAf3En1XrRLTqkEI9k4Bp0riDz2UHEKIUoxoscUR4a2PNq6hyPC7lXU9X_0TS0JoUevqNTxXlq4Sn6nxipHZ7uBILzPsAOz7CZLe8ds4gqKS9EhXxmcepArkF35kLk3YNV_qcwemRyOmOQxyGQA3HNfIwcB-gY6zkglB2lC68iVuUOP9XMQ8"
          userName="Ayşe Kaya"
          userHandle="@aysekaya"
          timeAgo="1sa önce"
          content="&quot;Yeraltından Notlar&quot; kitabını okuyan var mı? Baş karakter hakkında konuşmak istiyorum. Gerçekten inanılmaz bir karakter analizi."
          comments="28"
          reposts="11"
          likes="89"
        />
        {/* Post Card 3 */}
        <PostCard
          avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBSfVVOzvBmiJ5IseGK7PZJwncH52ZNwM5DhknI1JcqeH71iNEdtzA-BqVK98lPQNCOfzEzPPSfYVlpD7CzyHWoDdtLCsSM2RLVk74wK-QpA-37U6g-iO3YdeXmGUZ0QV2xArBUhIk8Zk2YW3LCSDZsvWZdOTnuwJGa-mrfyvpRSV-h0z3s6NlSxnKLLCylTJCED7KdVRrmbnfsDW86uhOzz648rrA-q4fxyTtDv3hd7F8WjrRjpPjSMFWmpR3TuTSsv6XgGk-4ifo"
          userName="Emre Tekin"
          userHandle="@emretekin"
          timeAgo="5sa önce"
          content="Hafta sonu için bilim kurgu film önerisi olan var mı? Blade Runner 2049 tarzı bir şeyler arıyorum."
          comments="41"
          reposts="2"
          likes="35"
        />
      </main>
    </div>
  );
};

export default ExplorePage;