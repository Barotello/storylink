import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/context/DataContext";
import { toast } from "sonner";

interface CreatePostDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreatePostDialog = ({ isOpen, onClose }: CreatePostDialogProps) => {
    const [content, setContent] = useState("");
    const { addPost } = useData();

    const handleSubmit = () => {
        if (!content.trim()) return;

        addPost(content);
        toast.success("Gönderi paylaşıldı!");
        setContent("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Yeni Gönderi Oluştur</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea
                        placeholder="Neler düşünüyorsun?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[100px]"
                    />
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        İptal
                    </Button>
                    <Button onClick={handleSubmit} disabled={!content.trim()}>
                        Paylaş
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePostDialog;
