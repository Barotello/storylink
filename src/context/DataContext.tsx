import React, { createContext, useContext, useState, ReactNode } from "react";
import { MediaItem } from "@/services/tmdbService";
import { BookItem } from "@/services/booksService";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

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
    addPost: (content: string) => void;
    addComment: (postId: string, content: string) => void;
    toggleLike: (postId: string) => void;
    getMatches: () => { user: User; score: number; sharedItems: string[] }[];
    updateUserFavorites: (type: "movie" | "tv" | "book", items: (MediaItem | BookItem)[]) => void;
    toggleFavorite: (item: MediaItem | BookItem, type: "movie" | "tv" | "book") => void;
    refreshUser: () => Promise<void>;
}

// Mock Data Removed
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<Record<string, User>>({});
    const [currentUser, setCurrentUser] = useState<User>({
        id: "guest",
        name: "Misafir",
        handle: "@misafir",
        avatarSrc: "https://placehold.co/150",
        favoriteMovies: [],
        favoriteSeries: [],
        favoriteBooks: [],
    });

    // Fetch initial data
    const fetchData = async () => {
        console.log("DataContext: fetchData called");
        // 1. Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
            console.error("DataContext: Session error", sessionError);
        }

        console.log("DataContext: Session", session);

        if (session?.user) {
            console.log("DataContext: User found, fetching profile for", session.user.id);
            // Fetch profile
            let { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .maybeSingle();

            if (profileError) {
                console.error("DataContext: Profile fetch error", profileError);
            } else if (!profile) {
                console.log("DataContext: Profile not found, creating new profile...");
                // Auto-create profile if missing
                const newProfile = {
                    id: session.user.id,
                    name: session.user.email?.split('@')[0] || "Kullanıcı",
                    handle: `@${session.user.email?.split('@')[0] || "user"}`,
                    avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.email}`,
                };

                const { data: createdProfile, error: createError } = await supabase
                    .from('profiles')
                    .insert([newProfile])
                    .select()
                    .single();

                if (createError) {
                    console.error("DataContext: Failed to create profile", createError);
                } else {
                    console.log("DataContext: Profile created", createdProfile);
                    profile = createdProfile;
                }
            } else {
                console.log("DataContext: Profile fetched", profile);
            }

            // Fetch favorites
            const { data: favorites, error: favError } = await supabase
                .from('favorites')
                .select('*')
                .eq('user_id', session.user.id);

            if (favError) console.error("DataContext: Favorites fetch error", favError);

            if (profile) {
                console.log("DataContext: Raw favorites fetched:", favorites);
                const movies = favorites?.filter(f => f.item_type === 'movie').map(f => ({ id: f.item_id, title: f.title, posterPath: f.poster_path, type: 'movie', overview: f.overview, releaseDate: f.release_date } as MediaItem)) || [];
                const series = favorites?.filter(f => f.item_type === 'tv').map(f => ({ id: f.item_id, title: f.title, posterPath: f.poster_path, type: 'tv', overview: f.overview, releaseDate: f.release_date } as MediaItem)) || [];
                const books = favorites?.filter(f => f.item_type === 'book').map(f => ({ id: f.item_id, title: f.title, coverPath: f.poster_path, description: f.overview, publishedDate: f.release_date } as BookItem)) || [];

                console.log("DataContext: Mapped favorites:", { movies, series, books });

                setCurrentUser({
                    id: profile.id,
                    name: profile.name,
                    handle: profile.handle,
                    avatarSrc: profile.avatar_url || "https://placehold.co/150",
                    favoriteMovies: movies,
                    favoriteSeries: series,
                    favoriteBooks: books,
                });
            }
        } else {
            console.log("DataContext: No session user");
        }

        // 2. Fetch Posts (with profiles)
        const { data: postsData, error } = await supabase
            .from('posts')
            .select(`
                    *,
                    profiles (name, handle, avatar_url)
                `)
            .order('created_at', { ascending: false });

        if (error) {
            console.error("DataContext: Error fetching posts", error);
        }

        if (postsData) {
            const formattedPosts: Post[] = postsData.map(p => ({
                id: p.id,
                userId: p.user_id,
                content: p.content,
                mediaType: p.media_type,
                mediaTitle: p.media_title,
                mediaImageSrc: p.media_image_src,
                likes: p.likes,
                reposts: p.reposts,
                createdAt: new Date(p.created_at).toLocaleDateString(), // Simple formatting
                comments: [], // TODO: Fetch comments
            }));
            setPosts(formattedPosts);

            // Update users map for avatar display in posts
            const newUsers: Record<string, User> = {};
            postsData.forEach(p => {
                if (p.profiles) {
                    newUsers[p.user_id] = {
                        id: p.user_id,
                        name: p.profiles.name,
                        handle: p.profiles.handle,
                        avatarSrc: p.profiles.avatar_url,
                        favoriteMovies: [],
                        favoriteSeries: [],
                        favoriteBooks: []
                    };
                }
            });
            setUsers(prev => ({ ...prev, ...newUsers }));
        }
    };

    React.useEffect(() => {
        fetchData();

        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange(() => {
            fetchData();
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);


    const addPost = async (content: string) => {
        if (currentUser.id === "guest") {
            toast.error("Paylaşım yapmak için giriş yapmalısınız.");
            return;
        }

        const { data, error } = await supabase
            .from('posts')
            .insert([
                { user_id: currentUser.id, content }
            ])
            .select()
            .single();

        if (error) {
            toast.error("Gönderi paylaşılamadı.");
            console.error(error);
            return;
        }

        if (data) {
            const newPost: Post = {
                id: data.id,
                userId: currentUser.id,
                content: data.content,
                likes: 0,
                reposts: 0,
                createdAt: "Şimdi",
                comments: [],
            };
            setPosts((prev) => [newPost, ...prev]);
        }
    };

    const addComment = (postId: string, content: string) => {
        // Placeholder for comment implementation
        console.log("Add comment", postId, content);
    };

    const toggleLike = (postId: string) => {
        // Placeholder for like implementation
        console.log("Like", postId);
    };

    const updateUserFavorites = (type: "movie" | "tv" | "book", items: (MediaItem | BookItem)[]) => {
        // Deprecated in favor of direct DB manipulation via toggleFavorite, keeping for compatibility if needed
        console.log("updateUserFavorites deprecated");
    };

    const toggleFavorite = async (item: MediaItem | BookItem, type: "movie" | "tv" | "book") => {
        if (currentUser.id === "guest") {
            toast.error("Favorilere eklemek için giriş yapmalısınız.");
            return;
        }

        const listKey = type === "movie" ? "favoriteMovies" : type === "tv" ? "favoriteSeries" : "favoriteBooks";
        const list = currentUser[listKey] as (MediaItem | BookItem)[];
        const exists = list.some((i) => i.id === item.id);

        if (exists) {
            // Remove
            const { error } = await supabase
                .from('favorites')
                .delete()
                .eq('user_id', currentUser.id)
                .eq('item_id', item.id);

            if (!error) {
                setCurrentUser(prev => ({
                    ...prev,
                    [listKey]: (prev[listKey] as any[]).filter(i => i.id !== item.id)
                }));
            }
        } else {
            // Add
            const payload = {
                user_id: currentUser.id,
                item_id: item.id,
                item_type: type,
                title: item.title,
                poster_path: 'posterPath' in item ? item.posterPath : (item as BookItem).coverPath,
                overview: 'overview' in item ? item.overview : (item as BookItem).description,
                release_date: 'releaseDate' in item ? item.releaseDate : (item as BookItem).publishedDate,
            };

            const { error } = await supabase
                .from('favorites')
                .insert([payload]);

            if (!error) {
                setCurrentUser(prev => ({
                    ...prev,
                    [listKey]: [...(prev[listKey] as any[]), item]
                }));
            }
        }
    };

    const getMatches = () => {
        return []; // TODO: Implement matching logic with backend
    };

    return (
        <DataContext.Provider value={{ currentUser, posts, users, addPost, addComment, toggleLike, getMatches, updateUserFavorites, toggleFavorite, refreshUser: fetchData }}>
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
