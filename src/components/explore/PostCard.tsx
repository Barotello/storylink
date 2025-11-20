import React from "react";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  avatarSrc: string;
  userName: string;
  userHandle: string;
  timeAgo: string;
  content: string;
  mediaType?: "film" | "book";
  mediaTitle?: string;
  mediaImageSrc?: string;
  comments: string;
  reposts: string;
  likes: string;
}

const PostCard: React.FC<PostCardProps> = ({
  avatarSrc,
  userName,
  userHandle,
  timeAgo,
  content,
  mediaType,
  mediaTitle,
  mediaImageSrc,
  comments,
  reposts,
  likes,
}) => {
  return (
    <div className="p-4 @container border-b border-border">
      <div className="flex gap-4">
        <img className="w-12 h-12 rounded-full object-cover" data-alt={`Profile picture of ${userName}`} src={avatarSrc} />
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <p className="text-foreground text-base font-bold leading-normal">{userName}</p>
            <p className="text-muted-foreground text-sm font-normal leading-normal">{userHandle} · {timeAgo}</p>
          </div>
          <p className="text-foreground text-base font-normal leading-relaxed">{content}</p>
          {mediaImageSrc && mediaTitle && (
            <div className="flex flex-col items-stretch justify-start rounded-xl mt-2 border border-border">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
                data-alt={`${mediaTitle} ${mediaType} poster`}
                style={{ backgroundImage: `url("${mediaImageSrc}")` }}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-4">
                <p className="text-muted-foreground text-sm font-normal leading-normal">{mediaType === "film" ? "Film" : "Kitap"}</p>
                <p className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">{mediaTitle}</p>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between text-muted-foreground mt-3">
            <Button variant="ghost" className="flex items-center gap-2 group p-0 h-auto hover:bg-transparent">
              <span className="material-symbols-outlined !text-xl group-hover:text-sky-500">chat_bubble_outline</span>
              <span className="text-sm group-hover:text-sky-500">{comments}</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 group p-0 h-auto hover:bg-transparent">
              <span className="material-symbols-outlined !text-xl group-hover:text-emerald-500">repeat</span>
              <span className="text-sm group-hover:text-emerald-500">{reposts}</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 group p-0 h-auto hover:bg-transparent">
              <span className="material-symbols-outlined !text-xl group-hover:text-red-500">favorite_border</span>
              <span className="text-sm group-hover:text-red-500">{likes}</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 group p-0 h-auto hover:bg-transparent">
              <span className="material-symbols-outlined !text-xl group-hover:text-primary-app">bookmark_border</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;