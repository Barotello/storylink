const TMDB_API_KEY = "YOUR_TMDB_API_KEY"; // Replace with actual key or use env var
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export interface MediaItem {
    id: string;
    title: string;
    posterPath: string;
    type: "movie" | "tv";
    genreIds: number[];
    overview: string;
    releaseDate: string;
}

// Mock data for development
const MOCK_MOVIES: MediaItem[] = [
    {
        id: "m1",
        title: "Inception",
        posterPath: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        type: "movie",
        genreIds: [28, 878, 12],
        overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        releaseDate: "2010-07-15",
    },
    {
        id: "m2",
        title: "The Dark Knight",
        posterPath: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        type: "movie",
        genreIds: [18, 28, 80, 53],
        overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        releaseDate: "2008-07-14",
    },
    {
        id: "m3",
        title: "Interstellar",
        posterPath: "https://image.tmdb.org/t/p/w500/gEU2QniL6E8AHtMY4kOD08WDT2q.jpg",
        type: "movie",
        genreIds: [12, 18, 878],
        overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        releaseDate: "2014-11-05",
    },
    {
        id: "m4",
        title: "Dune: Part Two",
        posterPath: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2GB9JvfB7.jpg",
        type: "movie",
        genreIds: [878, 12],
        overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
        releaseDate: "2024-02-27",
    },
];

const MOCK_TV: MediaItem[] = [
    {
        id: "t1",
        title: "Breaking Bad",
        posterPath: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        type: "tv",
        genreIds: [18, 80],
        overview: "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        releaseDate: "2008-01-20",
    },
    {
        id: "t2",
        title: "Stranger Things",
        posterPath: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        type: "tv",
        genreIds: [18, 10765, 9648],
        overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        releaseDate: "2016-07-15",
    },
];

export const searchMovies = async (query: string): Promise<MediaItem[]> => {
    if (!query) return [];

    // Return mock data if no API key or for testing specific terms
    if (query.toLowerCase().includes("mock") || !TMDB_API_KEY || TMDB_API_KEY === "YOUR_TMDB_API_KEY") {
        return MOCK_MOVIES.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
    }

    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=tr-TR`);
        const data = await response.json();
        return data.results.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            posterPath: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : "",
            type: "movie",
            genreIds: item.genre_ids,
            overview: item.overview,
            releaseDate: item.release_date,
        }));
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};

export const searchTVSeries = async (query: string): Promise<MediaItem[]> => {
    if (!query) return [];

    if (query.toLowerCase().includes("mock") || !TMDB_API_KEY || TMDB_API_KEY === "YOUR_TMDB_API_KEY") {
        return MOCK_TV.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
    }

    try {
        const response = await fetch(`${BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=tr-TR`);
        const data = await response.json();
        return data.results.map((item: any) => ({
            id: item.id.toString(),
            title: item.name,
            posterPath: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : "",
            type: "tv",
            genreIds: item.genre_ids,
            overview: item.overview,
            releaseDate: item.first_air_date,
        }));
    } catch (error) {
        console.error("Error searching TV series:", error);
        return [];
    }
};
