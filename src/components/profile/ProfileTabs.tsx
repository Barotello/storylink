import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Post } from "@/context/DataContext";
import PostCard from "@/components/explore/PostCard";
import { MediaItem } from "@/services/tmdbService";
import { BookItem } from "@/services/booksService";

interface ProfileTabsProps {
    user: User;
    posts: Post[];
    onMediaClick: (item: MediaItem | BookItem, type: "movie" | "tv" | "book") => void;
}

const ProfileTabs = ({ user, posts, onMediaClick }: ProfileTabsProps) => {
    return (
        <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-auto">
                <TabsTrigger
                    value="posts"
                    className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-primary-app data-[state=active]:text-foreground"
                >
                    Gönderiler
                </TabsTrigger>
                <TabsTrigger
                    value="movies"
                    className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-primary-app data-[state=active]:text-foreground"
                >
                    Filmler
                </TabsTrigger>
                <TabsTrigger
                    value="series"
                    className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-primary-app data-[state=active]:text-foreground"
                >
                    Diziler
                </TabsTrigger>
                <TabsTrigger
                    value="books"
                    className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-primary-app data-[state=active]:text-foreground"
                >
                    Kitaplar
                </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
                {posts.length > 0 ? (
                    posts.map((post) => (
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
                            onCommentClick={() => { }}
                            onLikeClick={() => { }}
                        />
                    ))
                ) : (
                    <div className="p-8 text-center text-muted-foreground">
                        Henüz gönderi yok.
                    </div>
                )}
            </TabsContent>

            <TabsContent value="movies" className="mt-0 p-4">
                <div className="grid grid-cols-3 gap-4">
                    {user.favoriteMovies.map((movie) => (
                        <div
                            key={movie.id}
                            className="cursor-pointer group"
                            onClick={() => onMediaClick(movie, "movie")}
                        >
                            <div className="aspect-[2/3] overflow-hidden rounded-lg bg-muted">
                                <img
                                    src={movie.posterPath || "https://placehold.co/200x300"}
                                    alt={movie.title}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-2 text-xs font-medium truncate">{movie.title}</p>
                        </div>
                    ))}
                    {user.favoriteMovies.length === 0 && (
                        <div className="col-span-3 text-center py-8 text-muted-foreground">
                            Henüz favori film eklenmemiş.
                        </div>
                    )}
                </div>
            </TabsContent>

            <TabsContent value="series" className="mt-0 p-4">
                <div className="grid grid-cols-3 gap-4">
                    {user.favoriteSeries.map((series) => (
                        <div
                            key={series.id}
                            className="cursor-pointer group"
                            onClick={() => onMediaClick(series, "tv")}
                        >
                            <div className="aspect-[2/3] overflow-hidden rounded-lg bg-muted">
                                <img
                                    src={series.posterPath || "https://placehold.co/200x300"}
                                    alt={series.title}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-2 text-xs font-medium truncate">{series.title}</p>
                        </div>
                    ))}
                    {user.favoriteSeries.length === 0 && (
                        <div className="col-span-3 text-center py-8 text-muted-foreground">
                            Henüz favori dizi eklenmemiş.
                        </div>
                    )}
                </div>
            </TabsContent>

            <TabsContent value="books" className="mt-0 p-4">
                <div className="grid grid-cols-3 gap-4">
                    {user.favoriteBooks.map((book) => (
                        <div
                            key={book.id}
                            className="cursor-pointer group"
                            onClick={() => onMediaClick(book, "book")}
                        >
                            <div className="aspect-[2/3] overflow-hidden rounded-lg bg-muted">
                                <img
                                    src={book.coverPath || "https://placehold.co/200x300"}
                                    alt={book.title}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-2 text-xs font-medium truncate">{book.title}</p>
                        </div>
                    ))}
                    {user.favoriteBooks.length === 0 && (
                        <div className="col-span-3 text-center py-8 text-muted-foreground">
                            Henüz favori kitap eklenmemiş.
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default ProfileTabs;
