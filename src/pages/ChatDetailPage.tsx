import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  sender: "me" | "other";
  text: string;
  time: string;
}

const ChatDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // URL'den sohbet ID'sini al
  const navigate = useNavigate();
  const [messageInput, setMessageInput] = useState("");

  // Sohbet ID'sine göre örnek sohbet partneri adı
  const chatPartnerName = id === "1" ? "Elif Kaya" : id === "2" ? "Mehmet Yılmaz" : id === "3" ? "Zeynep Aydın" : id === "4" ? "Can Demir" : "Sohbet Partneri";
  
  // Örnek mesaj verileri
  const messages: Message[] = [
    { id: "1", sender: "other", text: "Merhaba! Nasılsın?", time: "10:00" },
    { id: "2", sender: "me", text: "İyiyim, teşekkürler! Sen nasılsın?", time: "10:01" },
    { id: "3", sender: "other", text: "Ben de iyiyim. Yeni bir film izledin mi?", time: "10:05" },
    { id: "4", sender: "me", text: "Evet, dün 'Dune: Part Two'yu izledim. Harikaydı!", time: "10:06" },
    { id: "5", sender: "other", text: "Vay canına! Ben de izlemek istiyorum. Sonu hakkında ne düşünüyorsun?", time: "10:07" },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Gerçek bir uygulamada bu, mesajı bir backend'e gönderir
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <Button
          variant="ghost"
          className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 p-0"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
        </Button>
        <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">{chatPartnerName}</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 p-0">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">videocam</span>
          </Button>
          <Button variant="ghost" className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 p-0">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">call</span>
          </Button>
        </div>
      </header>

      {/* Message Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === "me"
                  ? "bg-primary-app text-white rounded-br-none"
                  : "bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className={`text-xs mt-1 block ${message.sender === "me" ? "text-white/70" : "text-subtle-light dark:text-subtle-dark"} text-right`}>
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* Message Input */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 p-0">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">add_circle</span>
          </Button>
          <Input
            className="flex-1 resize-none overflow-hidden rounded-full text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary-app/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark px-4 text-base font-normal"
            placeholder="Mesaj yaz..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-app text-white transition-colors hover:bg-primary-app/90 p-0"
            onClick={handleSendMessage}
          >
            <span className="material-symbols-outlined">send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetailPage;