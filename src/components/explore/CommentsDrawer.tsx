import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useData } from "@/context/DataContext";

interface CommentsDrawerProps {
    postId: string | null;
    isOpen: boolean;
    onClose: () => void;
}

const CommentsDrawer: React.FC<CommentsDrawerProps> = ({ postId, isOpen, onClose }) => {
    const { posts, users, addComment } = useData();
    const [newComment, setNewComment] = useState("");

    const post = posts.find((p) => p.id === postId);

    if (!post) return null;

    const handleSubmit = () => {
        if (newComment.trim()) {
            addComment(post.id, newComment);
            setNewComment("");
        }
    };

    return (
        <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DrawerContent className="h-[80vh] flex flex-col rounded-t-[10px]">
                <DrawerHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                        <DrawerTitle>Yorumlar ({post.comments.length})</DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <span className="material-symbols-outlined">close</span>
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {post.comments.length === 0 ? (
                        <div className="text-center text-muted-foreground py-10">
                            <p>Henüz yorum yok. İlk yorumu sen yap!</p>
                        </div>
                    ) : (
                        post.comments.map((comment) => {
                            const user = users[comment.userId];
                            return (
                                <div key={comment.id} className="flex gap-3">
                                    <img
                                        src={user?.avatarSrc || "https://via.placeholder.com/40"}
                                        alt={user?.name}
                                        className="w-8 h-8 rounded-full object-cover shrink-0"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-sm">{user?.name}</span>
                                            <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
                                        </div>
                                        <p className="text-sm text-foreground">{comment.content}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="p-4 border-t border-border bg-background">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Yorum yaz..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            className="rounded-full"
                        />
                        <Button onClick={handleSubmit} size="icon" className="rounded-full bg-primary-app shrink-0">
                            <span className="material-symbols-outlined">send</span>
                        </Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default CommentsDrawer;
