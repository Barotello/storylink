import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MediaItem } from "@/services/tmdbService";
import { BookItem } from "@/services/booksService";
import { useData } from "@/context/DataContext";
import { toast } from "sonner";

interface MediaDetailDialogProps {
    isOpen: boolean;
    onClose: () => void;
    item: MediaItem | BookItem | null;
    type: "movie" | "tv" | "book";
}

const MediaDetailDialog = ({ isOpen, onClose, item, type }: MediaDetailDialogProps) => {
    const { currentUser, toggleFavorite } = useData();

    if (!item) return null;

    const isFavorite = () => {
        if (type === "movie") {
            return currentUser.favoriteMovies.some((m) => m.id === item.id);
        } else if (type === "tv") {
            return currentUser.favoriteSeries.some((s) => s.id === item.id);
        } else {
            return currentUser.favoriteBooks.some((b) => b.id === item.id);
        }
    };

    const handleToggleFavorite = () => {
        toggleFavorite(item, type);
        const action = isFavorite() ? "çıkarıldı" : "eklendi";
        toast.success(`${item.title} profilinizden ${action}.`);
    };

    const getImage = () => {
        if ('posterPath' in item) return item.posterPath;
        if ('coverPath' in item) return item.coverPath;
        return "https://placehold.co/300x450";
    };

    const getDescription = () => {
        if ('overview' in item) return item.overview;
        if ('description' in item) return item.description;
        return "";
    };

    const getSubTitle = () => {
        if ('releaseDate' in item) return item.releaseDate?.split("-")[0];
        if ('authors' in item) return (item as BookItem).authors?.join(", ");
        return "";
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription>{getSubTitle()}</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col md:flex-row gap-6 py-4">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <img
                            src={getImage() || "https://placehold.co/200x300"}
                            alt={item.title}
                            className="w-[200px] h-[300px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {getDescription() || "Açıklama bulunmuyor."}
                        </p>

                        <div className="pt-4">
                            <Button
                                onClick={handleToggleFavorite}
                                variant={isFavorite() ? "destructive" : "default"}
                                className="w-full md:w-auto"
                            >
                                {isFavorite() ? "Profilimden Çıkar" : "Profilime Ekle"}
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MediaDetailDialog;
