import React from "react";

const Index = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="relative flex flex-col h-full grow">
        {/* Header Image with Logo */}
        <div className="absolute top-0 left-0 w-full px-4 pt-6 z-10">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-white text-3xl">movie_filter</span>
            <span className="font-display text-white text-2xl font-bold">CineMatch</span>
          </div>
        </div>
        <div
          className="w-full h-full min-h-[45vh] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(28, 16, 34, 1) 20%, rgba(28, 16, 34, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbeRD5b2MZo90UjfsVSJKVjmRAsm2hyx3xbI7v5xbtpRd6rWvQIdCqY-Cn6z9MPYL5vWZ4hNewpkwIUuOmT_edN-AgkkAhwLRT3lVF1068WbzbPeLW6Aywa1wdwkTbscKznGLP6ukK6VeMMSrPXrBo4SEmrxnKeRHzWSPt-VDDnnwsEL89rW4dOymw5Bc-aMqvIhCngzEZT2DQG40FiB1v3JeM23rMitBdIKle4p5Zxh9OZBzkqsULdO4J9SYVx5x0IyTyI6a3xms")`,
          }}
        ></div>
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center px-4 pt-8 pb-4 text-center bg-background-light dark:bg-background-dark">
          {/* HeadlineText */}
          <h1 className="font-display text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight max-w-md">
            Hikayeni Paylaşacağın Kişiyi Bul.
          </h1>
          {/* BodyText */}
          <p className="font-display text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pt-2 max-w-md">
            Aynı filmleri seven, aynı kitaplarda kaybolan insanlarla tanış.
          </p>
        </div>
        {/* ButtonGroup */}
        <div className="flex justify-center w-full px-4 pt-6 pb-8 bg-background-light dark:bg-background-dark">
          <div className="flex flex-1 gap-4 max-w-[480px] flex-col items-stretch">
            <button className="font-display flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app text-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95">
              <span className="truncate">Yeni Bir Hikayeye Başla</span>
            </button>
            <button className="font-display flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary-app/20 text-primary-app text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95">
              <span className="truncate">Giriş Yap</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;