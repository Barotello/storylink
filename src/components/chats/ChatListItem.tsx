import React from "react";
import { Link } from "react-router-dom";

interface ChatListItemProps {
  avatarSrc: string;
  userName: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount?: number;
  isOnline?: boolean;
  chatId: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatarSrc,
  userName,
  lastMessage,
  timeAgo,
  unreadCount,
  isOnline,
  chatId,
}) => {
  return (
    <Link to={`/chats/${chatId}`} className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-accent/10">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14"
            data-alt={`Profile picture of ${userName}`}
            style={{ backgroundImage: `url("${avatarSrc}")` }}
          ></div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 size-4 rounded-full bg-green-500 border-2 border-background"></div>
          )}
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <p className="text-foreground text-base font-bold leading-normal truncate">{userName}</p>
          <p className="text-muted-foreground text-sm font-medium leading-normal truncate">{lastMessage}</p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end gap-1.5">
        <p className="text-muted-foreground text-xs font-normal leading-normal">{timeAgo}</p>
        {unreadCount && unreadCount > 0 && (
          <div className="flex size-6 items-center justify-center rounded-full bg-primary-app text-white text-xs font-bold">{unreadCount}</div>
        )}
      </div>
    </Link>
  );
};

export default ChatListItem;