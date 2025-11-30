import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import MediaDetailDialog from "@/components/search/MediaDetailDialog";
import { MediaItem } from "@/services/tmdbService";
import { BookItem } from "@/services/booksService";

interface ProfilePageProps {
  isDrawer?: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ isDrawer = false }) => {
  const navigate = useNavigate();
  const { currentUser, posts } = useData();

  const [selectedItem, setSelectedItem] = useState<MediaItem | BookItem | null>(null);
  const [selectedType, setSelectedType] = useState<"movie" | "tv" | "book">("movie");
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const userPosts = posts.filter(p => p.userId === currentUser.id);

  const handleMediaClick = (item: MediaItem | BookItem, type: "movie" | "tv" | "book") => {
    setSelectedItem(item);
    setSelectedType(type);
    setIsDetailOpen(true);
  };

  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden font-display text-foreground bg-background min-h-screen">
      {!isDrawer && (
        <header className="sticky top-0 z-10 flex items-center bg-background/80 p-4 pb-2 backdrop-blur-sm justify-between border-b">
          <Button
            variant="ghost"
            className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-accent/10 p-0"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-foreground">arrow_back</span>
          </Button>
          <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-foreground">Profil</h1>
          <Button variant="ghost" className="size-10 p-0 opacity-0 pointer-events-none">
            <span className="material-symbols-outlined">settings</span>
          </Button>
        </header>
      )}

      <ProfileHeader user={currentUser} postCount={userPosts.length} />

      <ProfileTabs
        user={currentUser}
        posts={userPosts}
        onMediaClick={handleMediaClick}
      />

      <MediaDetailDialog
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        item={selectedItem}
        type={selectedType}
      />
    </div>
  );
};

export default ProfilePage;