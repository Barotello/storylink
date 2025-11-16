import React from "react";

interface ChatListItemProps {
  avatarSrc: string;
  userName: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount?: number;
  isOnline?: boolean;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatarSrc,
  userName,
  lastMessage,
  timeAgo,
  unreadCount,
  isOnline,
}) => {
  return (
    <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14"
            data-alt={`Profile picture of ${userName}`}
            style={{ backgroundImage: `url("${avatarSrc}")` }}
          ></div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 size-4 rounded-full bg-green-500 border-2 border-background-dark"></div>
          )}
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <p className="text-slate-900 dark:text-white text-base font-bold leading-normal truncate">{userName}</p>
          <p className="text-slate-500 dark:text-[#b792c9] text-sm font-medium leading-normal truncate">{lastMessage}</p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end gap-1.5">
        <p className="text-slate-400 dark:text-[#b792c9] text-xs font-normal leading-normal">{timeAgo}</p>
        {unreadCount && unreadCount > 0 && (
          <div className="flex size-6 items-center justify-center rounded-full bg-primary-app text-white text-xs font-bold">{unreadCount}</div>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;