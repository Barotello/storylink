import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatListItem from "@/components/chats/ChatListItem";

const ChatsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Örnek sohbet verileri
  const chatData = [
    {
      id: "1",
      avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv4A3ESpSvDvLHMVGE2w4Wi8bTC_K1hm0Lw2c93VlwG2RLas4KZkkFeZItDlnXcfc41eTcFdt4WNiSIz-yLj5Mash8dWkbW7QDlghWSgnGq3z_gayZmzmm8dQpRqgWmZxKT3nknUJWuSMh0G_OyHy4tOnwHh-H20nVGVeIT2UHpdg5Tf0AMvMoaRcLQ-uyF44GC93dfn8fFMis5xsxd0HNTwokiLe4P8UZG3BndoUN4F626r7cWv8Yx1CVQn_cwup2Ns6R4157Eio",
      userName: "Elif Kaya",
      lastMessage: "Harika fikir! Yarın buluşalım.",
      timeAgo: "5 dk önce",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2rTVZXZobu5chgbvCcwT4vJAoOFgJKLZ9zy955xKBqvdRHDiC90wHaXom-MzOFe8Y_ozoT0fT75s6vRFt3VtbDrDxCRVyeZgPZ3h7PQWupDMNHopKyAC93Ln9xkdx13lxXSkMr1RLnElHRwkpVjQ9b-4s42OP_4QlBtVb6ivxQlwRpqF8_FkjkeH581XlChFxu0WE70gVnNDJuTx6K_Lalhz17D2p97v_TL2M6UqeCcMgaWIupDISzk5ymcYuGwhbPRmLDNUCvhE",
      userName: "Mehmet Yılmaz",
      lastMessage: "En sevdiğin yönetmen kim?",
      timeAgo: "1 saat önce",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMjX94WCsy0Q1N-a_GzEGJkUhrgGHpTok6i_2juCE95bNBt_R6GeEtfdmBEf6a93aLzEN7oDNso41eLsAKG3z3sPkMHYEtHwm3XBxuvN14fJl2Lb2hTKo6m4Zk98HRJMZNJnm-Rfp5Hz9nhR6gX-vBy1x5hm-5PVRiGB0gUT9DmkTAzPCoQGtJXBER0PmnMnWCoO7NnZTNWXMxaHpgLzzRegOCLADi_YL81LPDl_3DLJjTclekrSHHAumrqSa9_D5l2uthE4GH72I",
      userName: "Zeynep Aydın",
      lastMessage: "O kitabı ben de çok sevmiştim.",
      timeAgo: "Dün",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "4",
      avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYwWLmIfPmPaALLSnORAXjZ3Va5M8xYETtbPN90RpH5ph9NrSryn-HHw_iU58VuKU4v1N1aXUqbezHhLVEdHoPXZAnm7Jj0ru91S6iWVUrZ6xpbPkABY6Pqt_87zzLidvF8DB-ThDHkuv7i3zCy_zoF23Q-bLDIptCHt-ACAvHSgYD3iY2SvJi3zcRgP2Pc2SKBi32S5qE3ok0h64wLjm0rZX7qro3QvkoaZ3U7JsXmuIurSupFw6ZqWV68VlBO2OkqW_zN7nWwE",
      userName: "Can Demir",
      lastMessage: "Dune serisini okudun mu?",
      timeAgo: "2 gün önce",
      unreadCount: 0,
      isOnline: false,
    },
  ];

  const filteredChats = chatData.filter(
    (chat) =>
      chat.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
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
            <div className="text-slate-400 dark:text-[#b792c9] flex border-none bg-slate-200 dark:bg-[#3c2348] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <Input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-200 dark:bg-[#3c2348] focus:border-none h-full placeholder:text-slate-400 dark:placeholder:text-[#b792c9] px-4 pl-2 text-base font-normal leading-normal"
              placeholder="Sohbetlerde ara"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </label>
      </div>
      {/* Chat List */}
      <div className="flex flex-col flex-1 pb-24"> {/* Alt navigasyon çubuğu için yeterli boşluk bırak */}
        {filteredChats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chatId={chat.id}
            avatarSrc={chat.avatarSrc}
            userName={chat.userName}
            lastMessage={chat.lastMessage}
            timeAgo={chat.timeAgo}
            unreadCount={chat.unreadCount}
            isOnline={chat.isOnline}
          />
        ))}
        {filteredChats.length === 0 && (
          <p className="text-center text-subtle-light dark:text-subtle-dark mt-8">Eşleşen sohbet bulunamadı.</p>
        )}
      </div>
      {/* Floating Action Button for New Chat */}
      <Button className="fixed bottom-20 right-6 flex items-center justify-center w-14 h-14 bg-primary-app text-white rounded-full shadow-lg z-40"> {/* FAB'ı BottomNavBar'ın üzerine taşıdık */}
        <span className="material-symbols-outlined text-3xl">add</span>
      </Button>
    </div>
  );
};

export default ChatsPage;