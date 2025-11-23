import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, searchTVSeries, MediaItem } from "@/services/tmdbService";
import { searchBooks, BookItem } from "@/services/booksService";
import { useData } from "@/context/DataContext";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

const SearchPage = () => {
  const navigate = useNavigate();
  const { users } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms debounce
  const [activeTab, setActiveTab] = useState<"all" | "movies" | "books" | "users">("all");

  // React Query for movies - automatic caching & deduplication
  const { data: movies = [], isLoading: isLoadingMovies } = useQuery({
    queryKey: ['search-movies', debouncedSearchQuery],
    queryFn: async () => {
      if (!debouncedSearchQuery.trim()) return [];
      const [movieResults, tvResults] = await Promise.all([
        searchMovies(debouncedSearchQuery),
        searchTVSeries(debouncedSearchQuery),
      ]);
      return [...movieResults, ...tvResults];
    },
    enabled: debouncedSearchQuery.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // React Query for books
  const { data: books = [], isLoading: isLoadingBooks } = useQuery({
    queryKey: ['search-books', debouncedSearchQuery],
    queryFn: () => searchBooks(debouncedSearchQuery),
    enabled: debouncedSearchQuery.trim().length > 0,
    staleTime: 5 * 60 * 1000,
  });

  // Local user search (instant, no API)
  const filteredUsers = React.useMemo(() => {
    if (!debouncedSearchQuery.trim()) return [];
    const userList = Object.values(users);
    return userList.filter(
      (user: any) =>
        user.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        user.handle.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [debouncedSearchQuery, users]);

  const isLoading = isLoadingMovies || isLoadingBooks;

  const renderResults = () => {
    if (!searchQuery.trim()) {
      return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <span className="material-symbols-outlined text-6xl text-muted-foreground mb-4">search</span>
          <h3 className="text-xl font-semibold mb-2">Arama Yap</h3>
          <p className="text-muted-foreground">Filmleri, kitapları ve kullanıcıları ara</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-app"></div>
        </div>
      );
    }

    const hasResults = movies.length > 0 || books.length > 0 || filteredUsers.length > 0;

    if (!hasResults) {
      return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <span className="material-symbols-outlined text-6xl text-muted-foreground mb-4">search_off</span>
          <h3 className="text-xl font-semibold mb-2">Sonuç Bulunamadı</h3>
          <p className="text-muted-foreground">"{searchQuery}" için sonuç bulunamadı</p>
        </div>
      );
    }

    return (
      <div className="space-y-6 pb-24">
        {(activeTab === "all" || activeTab === "movies") && movies.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-bold px-4">Filmler & Diziler</h2>
            <div className="space-y-2">
              {movies.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors cursor-pointer mx-2 rounded-lg"
                >
                  <img
                    src={item.posterPath || "https://via.placeholder.com/60x90"}
                    alt={item.title}
                    className="w-12 h-18 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.type === "movie" ? "Film" : "Dizi"} • {item.releaseDate?.split("-")[0]}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{item.overview}</p>
                  </div>
                  <span className="material-symbols-outlined text-muted-foreground">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "all" || activeTab === "books") && books.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-bold px-4">Kitaplar</h2>
            <div className="space-y-2">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors cursor-pointer mx-2 rounded-lg"
                >
                  <img
                    src={book.coverPath || "https://via.placeholder.com/60x90"}
                    alt={book.title}
                    className="w-12 h-18 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">{book.authors?.join(", ")}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{book.description}</p>
                  </div>
                  <span className="material-symbols-outlined text-muted-foreground">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "all" || activeTab === "users") && filteredUsers.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-bold px-4">Kullanıcılar</h2>
            <div className="space-y-2">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors cursor-pointer mx-2 rounded-lg"
                >
                  <img
                    src={user.avatarSrc}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">@{user.handle}</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Takip Et
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background font-display text-foreground">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center p-4 gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Button>
          <div className="flex-1 flex items-center gap-2 bg-muted rounded-full px-4 h-11">
            <span className="material-symbols-outlined text-muted-foreground">search</span>
            <Input
              className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
              placeholder="Ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setSearchQuery("")}
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </Button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveTab("all")}
            >
              Tümü
            </Button>
            <Button
              variant={activeTab === "movies" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveTab("movies")}
            >
              Filmler & Diziler
            </Button>
            <Button
              variant={activeTab === "books" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveTab("books")}
            >
              Kitaplar
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveTab("users")}
            >
              Kullanıcılar
            </Button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {renderResults()}
      </div>
    </div>
  );
};

export default SearchPage;