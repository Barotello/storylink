import React, { useState } from "react";
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
      avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2rTVZXZobu5chgbvCcwT4vJAoOFgJKLZ9zy955xKBqvdRHDiC90wHaXom-MzOFe8Y_ozoT0fT75s6vRFt3VtbDrDxCRVyeZgPZ3h7PQWupDMNHopKyAC93Ln9xkdx13lxXSkMr1RLnElHRwkpVjQ9b-4s42OP_4QlBtVb6ivxQlwRpqgWmZxKT3nknUJWuSMh0G_OyHy4tOnwHh-H20nVGVeIT2UHpdg5Tf0AMvMoaRcLQ-uyF44GC93dfn8fFMis5xsxd0HNTwokiLe4P8UZG3BndoUN4F626r7cWv8Yx1CVQn_cwup2Ns6R4157Eio",
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

  const newMatches = [
    { id: "nm1", name: "Selin", img: "https://i.pravatar.cc/150?u=selin" },
    { id: "nm2", name: "Burak", img: "https://i.pravatar.cc/150?u=burak" },
    { id: "nm3", name: "Ayşe", img: "https://i.pravatar.cc/150?u=ayse" },
  ];

  const filteredChats = chatData.filter(
    (chat) =>
      chat.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex h-screen w-full flex-col bg-background font-display overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pb-2 z-10 bg-background/80 backdrop-blur-md sticky top-0">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Sohbetler</h1>
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
          <span className="material-symbols-outlined">edit_square</span>
        </Button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground material-symbols-outlined text-[20px]">
            search
          </span>
          <Input
            className="pl-10 h-11 bg-muted/50 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary-app/50 transition-all"
            placeholder="Sohbetlerde ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* New Matches Section */}
        <div className="px-4 py-4 space-y-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Yeni Eşleşmeler</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {newMatches.map((match) => (
              <div key={match.id} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-primary-app to-accent-app">
                    <img
                      src={match.img}
                      alt={match.name}
                      className="w-full h-full rounded-full object-cover border-2 border-background"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-foreground/90 group-hover:text-primary-app transition-colors">{match.name}</span>
              </div>
            ))}
            {/* Likes You Placeholder */}
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 border-2 border-dashed border-muted-foreground/30">
                <span className="material-symbols-outlined text-muted-foreground">favorite</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Beğeniler</span>
            </div>
          </div>
        </div>

        {/* Messages Section */}
        <div className="px-4 pt-2 space-y-1">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Mesajlar</h3>
          <div className="flex flex-col gap-1">
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
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-muted-foreground">chat_bubble_outline</span>
                </div>
                <p className="text-muted-foreground font-medium">Henüz bir mesaj yok.</p>
                <p className="text-xs text-muted-foreground/60 max-w-[200px]">Eşleşmelerinle sohbet etmeye başlamak için birine merhaba de!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;