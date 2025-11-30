import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "@/context/DataContext";
import { useNavigate } from "react-router-dom";

interface ProfileHeaderProps {
    user: User;
    postCount: number;
}

const ProfileHeader = ({ user, postCount }: ProfileHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full">
            {/* Banner */}
            <div className="h-32 sm:h-48 bg-gradient-to-r from-primary-app/20 to-purple-500/20 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Profile Info */}
            <div className="px-4 pb-4">
                <div className="relative flex justify-between items-end -mt-12 mb-4">
                    <img
                        src={user.avatarSrc}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-background object-cover shadow-lg"
                    />
                    <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => navigate("/settings")}
                    >
                        Profili Düzenle
                    </Button>
                </div>

                <div className="space-y-1">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">{user.handle}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mt-4 text-sm">
                    <div className="flex gap-1">
                        <span className="font-bold text-foreground">{postCount}</span>
                        <span className="text-muted-foreground">Gönderi</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-bold text-foreground">142</span>
                        <span className="text-muted-foreground">Takipçi</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-bold text-foreground">89</span>
                        <span className="text-muted-foreground">Takip Edilen</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
