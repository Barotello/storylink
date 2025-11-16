import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex flex-col bg-background-light dark:bg-background-dark pt-4">
        <div className="flex items-center px-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center justify-start">
            {/* Placeholder for potential back button or menu */}
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Sohbetler</h2>
          <div className="flex w-12 items-center justify-end">
            <Button variant="ghost" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-slate-500 dark:text-white/80 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <span className="material-symbols-outlined text-2xl">more_vert</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-slate-400 dark:text-nav-dark-text flex border-none bg-slate-200 dark:bg-chip-dark-bg items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <Input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-200 dark:bg-chip-dark-bg focus:border-none h-full placeholder:text-slate-400 dark:placeholder:text-nav-dark-text px-4 pl-2 text-base font-normal leading-normal" placeholder="Sohbetlerde ara" />
          </div>
        </label>
      </div>
      {/* Chat List */}
      <div className="flex flex-col flex-1 pb-24">
        {/* List Item 1 - Unread Message */}
        <Link to="/chat" className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" data-alt="Profile picture of Elif Kaya" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv4A3ESpSvDvLHMVGE2w4Wi8bTC_K1hm0Lw2c93VlwG2RLas4KZkkFeZItDlnXcfc41eTcFdt4WNiSIz-yLj5Mash8dWkbW7QDlghWSgnGq3z_gayZmzmm8dQpRqgWmZxKT3nknUJWuSMh0G_OyHy4tOnwHh-H20nVGVeIT2UHpdg5Tf0AMvMoaRcLQ-uyF44GC93dfn8fFMis5xsxd0HNTwokiLe4P8UZG3BndoUN4F626r7cWv8Yx1CVQn_cwup2Ns6R4157Eio")` }}></div>
              <div className="absolute bottom-0 right-0 size-4 rounded-full bg-green-500 border-2 border-background-dark"></div>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-normal truncate">Elif Kaya</p>
              <p className="text-slate-500 dark:text-nav-dark-text text-sm font-medium leading-normal truncate">Harika fikir! Yarın buluşalım.</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1.5">
            <p className="text-slate-400 dark:text-nav-dark-text text-xs font-normal leading-normal">5 dk önce</p>
            <div className="flex size-6 items-center justify-center rounded-full bg-primary-app text-white text-xs font-bold">2</div>
          </div>
        </Link>
        {/* List Item 2 - Online, No Unread */}
        <Link to="/chat" className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" data-alt="Profile picture of Mehmet Yılmaz" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2rTVZXZobu5chgbvCcT4vJAoOFgJKLZ9zy955xKBqvdRHDiC90wHaXom-MzOFe8Y_ozoT0fT75s6vRFt3VtbDrDxCRVyeZgPZ3h7PQWupDMNHopKyAC93Ln9xkdx13lxXSkMr1RLnElHRwkpVjQ9b-4s42OP_4QlBtVb6ivxQlwRpqF8_FkjkeH581XlChFxu0WE70gVnNDJuTx6K_Lalhz17D2p97v_TL2M6UqeCcMgaWIupDISzk5ymcYuGwhbPRmLDNUCvhE")` }}></div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-slate-900 dark:text-white text-base font-medium leading-normal truncate">Mehmet Yılmaz</p>
              <p className="text-slate-400 dark:text-nav-dark-text text-sm font-normal leading-normal truncate">En sevdiğin yönetmen kim?</p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-slate-400 dark:text-nav-dark-text text-xs font-normal leading-normal">1 saat önce</p>
          </div>
        </Link>
        {/* List Item 3 - Read, Older */}
        <Link to="/chat" className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" data-alt="Profile picture of Zeynep Aydın" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMjX94WCsy0Q1N-a_GzEGJkUhrgGHpTok6i_2juCE95bNBt_R6GeEtfdmBEf6a93aLzEN7oDNso41eLsAKG3z3sPkMHYEtHwm3XBxuvN14fJl2Lb2hTKo6m4Zk98HRJMZNJnm-Rfp5Hz9nhR6gX-vBy1x5hm-5PVRiGB0gUT9DmkTAzPCoQGtJXBER0PmnMnWCoO7NnZTNWXMxaHpgLzzRegOCLADi_YL81LPDl_3DLJjTclekrSHHAumrqSa9_D5l2uthE4GH72I")` }}></div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-slate-900 dark:text-white text-base font-medium leading-normal truncate">Zeynep Aydın</p>
              <p className="text-slate-400 dark:text-nav-dark-text text-sm font-normal leading-normal truncate">O kitabı ben de çok sevmiştim.</p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-slate-400 dark:text-nav-dark-text text-xs font-normal leading-normal">Dün</p>
          </div>
        </Link>
        {/* List Item 4 - Read, Older */}
        <Link to="/chat" className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" data-alt="Profile picture of Can Demir" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYwWLmIfPmPaALLSnORAXjZ3Va5M8xYETtbPN90RpH5ph9NrSryn-HHw_iU58VuKU4v1N1aXUqbezHhLVEdHoPXZAnm7Jj0ru91S6iWVUrZ6xpbPkABY6Pqt_87zzLidvF8DB-ThDHkuv7i3zCy_zoF23Q-bLDIptCHt-ACAvHSgYD3iY2SvJi32S5qE3ok0h64wLjm0rZX7qro3QvkoaZ3U7JsXmuIurSupFw6ZqWV68VlBO2OkqW_zN7nWwE")` }}></div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-slate-900 dark:text-white text-base font-medium leading-normal truncate">Can Demir</p>
              <p className="text-slate-400 dark:text-nav-dark-text text-sm font-normal leading-normal truncate">Dune serisini okudun mu?</p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-slate-400 dark:text-nav-dark-text text-xs font-normal leading-normal">2 gün önce</p>
          </div>
        </Link>
      </div>
      {/* Floating Action Button for New Chat */}
      <Button className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-primary-app text-white rounded-full shadow-lg">
        <span className="material-symbols-outlined text-3xl">add</span>
      </Button>
    </div>
  );
};

export default ChatListPage;