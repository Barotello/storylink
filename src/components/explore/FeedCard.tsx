import React from "react";
import { Button } from "@/components/ui/button";

interface FeedCardProps {
  avatarSrc: string;
  userName: string;
  userHandle: string;
  timeAgo: string;
  content: string;
  hashtags: string;
  imageSrc?: string;
  likes: string;
  comments: string;
  shares: string;
}

const FeedCard: React.FC<FeedCardProps> = ({
  avatarSrc,
  userName,
  userHandle,
  timeAgo,
  content,
  hashtags,
  imageSrc,
  likes,
  comments,
  shares,
}) => {
  return (
    <div className="border-b border-border">
      <div className="p-4 @container">
        <div className="flex items-start justify-start gap-4">
          <img className="h-12 w-12 rounded-full object-cover" data-alt="User avatar" src={avatarSrc} />
          <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-foreground text-base font-bold leading-tight tracking-[-0.015em] truncate">{userName}</p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">{userHandle} • {timeAgo}</p>
            </div>
            <p className="text-foreground text-base font-normal leading-normal">
              {content}
            </p>
            <p className="text-primary/80 text-sm font-normal leading-normal">{hashtags}</p>
            {imageSrc && (
              <div className="mt-2 w-full bg-center bg-no-repeat aspect-[2/1] bg-cover rounded-lg" style={{ backgroundImage: `url("${imageSrc}")` }}></div>
            )}
            <div className="flex items-center justify-between -ml-3 mt-1">
              <div className="flex flex-wrap gap-1">
                <Button variant="ghost" className="flex items-center justify-center gap-2 px-3 py-2 text-muted-foreground hover:text-primary rounded-full transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">{likes}</p>
                </Button>
                <Button variant="ghost" className="flex items-center justify-center gap-2 px-3 py-2 text-muted-foreground hover:text-primary rounded-full transition-colors">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">{comments}</p>
                </Button>
                <Button variant="ghost" className="flex items-center justify-center gap-2 px-3 py-2 text-muted-foreground hover:text-primary rounded-full transition-colors">
                  <span className="material-symbols-outlined">share</span>
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">{shares}</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;