import React, { useState } from "react";
import ExploreHeader from "@/components/explore/ExploreHeader";
import StoryCarousel from "@/components/explore/StoryCarousel";
import PostCard from "@/components/explore/PostCard";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import CommentsDrawer from "@/components/explore/CommentsDrawer";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("Sana Özel");
  const { posts, users, toggleLike } = useData();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleCommentClick = (postId: string) => {
    setSelectedPostId(postId);
    setIsCommentsOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Sana Özel":
        return (
          <>
            {posts.map((post) => {
              const user = users[post.userId];
              return (
                <PostCard
                  key={post.id}
                  avatarSrc={user.avatarSrc}
                  userName={user.name}
                  userHandle={user.handle}
                  timeAgo={post.createdAt}
                  content={post.content}
                  mediaType={post.mediaType}
                  mediaTitle={post.mediaTitle}
                  mediaImageSrc={post.mediaImageSrc}
                  comments={post.comments.length}
                  reposts={post.reposts}
                  likes={post.likes}
                  onCommentClick={() => handleCommentClick(post.id)}
                  onLikeClick={() => toggleLike(post.id)}
                />
              );
            })}
          </>
        );
      case "Filmler":
        return (
          <div className="p-4 text-center text-foreground">
            <h2 className="text-xl font-bold">Filmler Sekmesi</h2>
            <p className="mt-2">Burada film gönderileri listelenecek.</p>
          </div>
        );
      case "Kitaplar":
        return (
          <div className="p-4 text-center text-foreground">
            <h2 className="text-xl font-bold">Kitaplar Sekmesi</h2>
            <p className="mt-2">Burada kitap gönderileri listelenecek.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background font-display text-foreground">
      <ExploreHeader />
      <StoryCarousel />

      {/* Tabs */}
      <div className="pb-3 sticky top-[72px] z-10 bg-background">
        <div className="flex border-b border-border px-4 justify-between">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 h-auto rounded-none ${activeTab === "Sana Özel"
                ? "border-b-primary-app text-foreground"
                : "border-b-transparent text-muted-foreground"
              }`}
            onClick={() => setActiveTab("Sana Özel")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Sana Özel</p>
          </Button>
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 h-auto rounded-none ${activeTab === "Filmler"
                ? "border-b-primary-app text-foreground"
                : "border-b-transparent text-muted-foreground"
              }`}
            onClick={() => setActiveTab("Filmler")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Filmler</p>
          </Button>
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 h-auto rounded-none ${activeTab === "Kitaplar"
                ? "border-b-primary-app text-foreground"
                : "border-b-transparent text-muted-foreground"
              }`}
            onClick={() => setActiveTab("Kitaplar")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Kitaplar</p>
          </Button>
        </div>
      </div>

      {/* Main Content Feed */}
      <main className="flex-1 pb-24">
        {renderTabContent()}
      </main>

      <CommentsDrawer
        postId={selectedPostId}
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
      />
    </div>
  );
};

export default ExplorePage;