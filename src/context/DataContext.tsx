import React, { createContext, useContext, useState, ReactNode } from "react";
import { MediaItem } from "@/services/tmdbService";
import { BookItem } from "@/services/booksService";

// Types
export interface User {
    id: string;
    name: string;
    handle: string;
    avatarSrc: string;
    favoriteMovies: MediaItem[];
    favoriteSeries: MediaItem[];
    favoriteBooks: BookItem[];
}

export interface Comment {
    id: string;
    userId: string;
    content: string;
    createdAt: string;
}

export interface Post {
    id: string;
    userId: string;
    content: string;
    mediaType?: "film" | "book";
    mediaTitle?: string;
    mediaImageSrc?: string;
    likes: number;
    reposts: number;
    createdAt: string;
    comments: Comment[];
}

interface DataContextType {
    currentUser: User;
    posts: Post[];
    users: Record<string, User>;
    addComment: (postId: string, content: string) => void;
    toggleLike: (postId: string) => void;
    getMatches: () => { user: User; score: number; sharedItems: string[] }[];
    updateUserFavorites: (type: "movie" | "tv" | "book", items: (MediaItem | BookItem)[]) => void;
}

// Mock Data
const MOCK_USERS: Record<string, User> = {
    "current": {
        id: "current",
        name: "Baran",
        handle: "@baran",
        avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOxi_CQu8qdHRc62SS1DZs_4lDZEA3AwgiBhzfNNbB-BICmymjcFM86f8BU03ywrK9ZzWXsODnx0fJMuANYc_HJ7jLX2UoV4DszW8gm9UYsoq60LbKkjHO1epXTFD7ZWVOIb6hRAWczXIfdzDzcjNSHU37y9XPsBojFKfMdqGpk2y2nileJe0",
        favoriteMovies: [],
        favoriteSeries: [],
        favoriteBooks: [],
    },
    "u1": {
        id: "u1",
        name: "Mert Yılmaz",
        handle: "@mertyilmaz",
        avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1v-VkjLsjXU1-5MkGJEZLCIfZQKqUPm4TUOKLJ4TDs8ObBmSVWQiJEeT1tZ-T5trHKvF3IlYXIMBIU7I8FZdC6mkNUvMEsmZol5Q4EtQX3n5DGIczs_3w0tctYdicqgRiUl9qPImMN2UgwtSaJZI6oVIZBE4KhnGl7d5-z766M2OBX4oIQAiepPHGM3MAtCw16hmb92oLQ7SW6rUmWlZjVGMmw5g_BPY8BqCw4jxF4Biw_jm0zhmsajkvt0i7VQweHiSqRYEy2I",
        favoriteMovies: [
            { id: "m1", title: "Inception", posterPath: "", type: "movie", genreIds: [], overview: "", releaseDate: "" }
        ],
        favoriteSeries: [],
        favoriteBooks: [
            { id: "b1", title: "Dune", authors: [], coverPath: "", description: "", publishedDate: "" }
        ],
    },
    "u2": {
        id: "u2",
        name: "Ayşe Kaya",
        handle: "@aysekaya",
        avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGB2oZEPf4p3zu7WpYbCn3dWTC49agopcubP9E3VHzrdHVIpqWMhR45VJOpgVW90-uLwU1I4TV7fRj-44q37dfP1vAf3En1XrRLTqkEI9k4Bp0riDz2UHEKIUoxoscUR4a2PNq6hyPC7lXU9X_0TS0JoUevqNTxXlq4Sn6nxipHZ7uBILzPsAOz7CZLe8ds4gqKS9EhXxmcepArkF35kLk3YNV_qcwemRyOmOQxyGQA3HNfIwcB-gY6zkglB2lC68iVuUOP9XMQ8",
        favoriteMovies: [],
        favoriteSeries: [],
        favoriteBooks: [],
    },
    "u3": {
        id: "u3",
        name: "Emre Tekin",
        handle: "@emretekin",
        avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSfVVOzvBmiJ5IseGK7PZJwncH52ZNwM5DhknI1JcqeH71iNEdtzA-BqVK98lPQNCOfzEzPPSfYVlpD7CzyHWoDdtLCsSM2RLVk74wK-QpA-37U6g-iO3YdeXmGUZ0QV2xArBUhIk8Zk2YW3LCSDZsvWZdOTnuwK-QpA-37U6g-iO3YdeXmGUZ0QV2xArBUhIk8Zk2YW3LCSDZsvWZdOTnuwKrlYaEdyoancsCUvr-luz1rYX1_jMwmbVychHj0ucxSWPToJdNh1p7nj94Ft3wQxDHviY7TGGcY3NGY7v_MMRJPl0ZS9BMuXB2zRvNzSphl1ZIV79387E7zgoFJNMdTzJpy4TqeCFItcUOs9pErLGyye_ptrenv-ZIWkApYA",
        favoriteMovies: [],
        favoriteSeries: [],
        favoriteBooks: [],
    },
};

const MOCK_POSTS: Post[] = [
    {
        id: "p1",
        userId: "u1",
        content: "Az önce Dune: Part Two'yu bitirdim, filmin sonu hakkındaki düşünceleriniz neler?",
        mediaType: "film",
        mediaTitle: "Dune: Part Two",
        mediaImageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-flcZ06vYMzJ9yWygSKsmGRBXWQlmbnkTCo7UKGZfQVTe8hy3QXCtvnk7fX95836UY1h3zVYYr9V12tmSK_V-lvkisu83c3eZH2rUgjLrRZS3Ry6bdET86-3Jq0zTfRVZSP8JTdWw0gMVxvHc7MQW0wsOakUynRlgBbSVvdT8CpicnT1CnPZI_vto7x0jUqC3uMdos4HqEgOOCNvPyI05nbMxD2-r78dkkqSTC61oT_JzDrj3__N7iaXpGLmv9uf2u-ECXFmhM",
        likes: 47,
        reposts: 3,
        createdAt: "2s önce",
        comments: [
            { id: "c1", userId: "u2", content: "Görsellik inanılmazdı!", createdAt: "1s önce" },
            { id: "c2", userId: "u3", content: "Kitaba sadık kalmışlar mı?", createdAt: "30dk önce" }
        ],
    },
    {
        id: "p2",
        userId: "u2",
        content: "\"Yeraltından Notlar\" kitabını okuyan var mı? Baş karakter hakkında konuşmak istiyorum. Gerçekten inanılmaz bir karakter analizi.",
        likes: 89,
        reposts: 11,
        createdAt: "1sa önce",
        comments: [],
    },
    {
        id: "p3",
        userId: "u3",
        content: "Hafta sonu için bilim kurgu film önerisi olan var mı? Blade Runner 2049 tarzı bir şeyler arıyorum.",
        likes: 35,
        reposts: 2,
        createdAt: "5sa önce",
        comments: [],
    },
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
    const [users, setUsers] = useState<Record<string, User>>(MOCK_USERS);

    // In a real app, this would come from auth state
    const currentUser = users["current"];

    const addComment = (postId: string, content: string) => {
        const newComment: Comment = {
            id: Math.random().toString(36).substr(2, 9),
            userId: currentUser.id,
            content,
            createdAt: "Şimdi",
        };

        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, comments: [...post.comments, newComment] }
                    : post
            )
        );
    };

    const toggleLike = (postId: string) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, likes: post.likes + 1 }
                    : post
            )
        );
    };

    const updateUserFavorites = (type: "movie" | "tv" | "book", items: (MediaItem | BookItem)[]) => {
        setUsers(prev => ({
            ...prev,
            "current": {
                ...prev["current"],
                [type === "movie" ? "favoriteMovies" : type === "tv" ? "favoriteSeries" : "favoriteBooks"]: items
            }
        }));
    };

    const getMatches = () => {
        const matches: { user: User; score: number; sharedItems: string[] }[] = [];
        const current = users["current"];

        Object.values(users).forEach(user => {
            if (user.id === current.id) return;

            let score = 0;
            const sharedItems: string[] = [];

            // Check Movies
            current.favoriteMovies.forEach(m1 => {
                if (user.favoriteMovies.some(m2 => m2.title === m1.title)) {
                    score += 10;
                    sharedItems.push(m1.title);
                }
            });

            // Check Series
            current.favoriteSeries.forEach(s1 => {
                if (user.favoriteSeries.some(s2 => s2.title === s1.title)) {
                    score += 10;
                    sharedItems.push(s1.title);
                }
            });

            // Check Books
            current.favoriteBooks.forEach(b1 => {
                if (user.favoriteBooks.some(b2 => b2.title === b1.title)) {
                    score += 10;
                    sharedItems.push(b1.title);
                }
            });

            if (score > 0) {
                matches.push({ user, score, sharedItems });
            }
        });

        return matches.sort((a, b) => b.score - a.score);
    };

    return (
        <DataContext.Provider value={{ currentUser, posts, users, addComment, toggleLike, getMatches, updateUserFavorites }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
