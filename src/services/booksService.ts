const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY || "";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export interface BookItem {
    id: string;
    title: string;
    authors: string[];
    coverPath: string;
    description: string;
    publishedDate: string;
}

const MOCK_BOOKS: BookItem[] = [
    {
        id: "b1",
        title: "Dune",
        authors: ["Frank Herbert"],
        coverPath: "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange.",
        publishedDate: "1965",
    },
    {
        id: "b2",
        title: "1984",
        authors: ["George Orwell"],
        coverPath: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
        publishedDate: "1949",
    },
    {
        id: "b3",
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        coverPath: "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description: "A great modern classic and the prelude to The Lord of the Rings.",
        publishedDate: "1937",
    },
];

export const searchBooks = async (query: string): Promise<BookItem[]> => {
    if (!query) return [];

    if (query.toLowerCase().includes("mock") || !GOOGLE_BOOKS_API_KEY) {
        // For demo purposes, always return mock if key is missing, or filter if query matches
        const mockResults = MOCK_BOOKS.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
        if (mockResults.length > 0) return mockResults;
        // If no mock match, try fetching without key (Google Books allows some unauthenticated usage)
    }

    try {
        const isProduction = import.meta.env.PROD;

        if (isProduction) {
            // Production: Use backend API (secure)
            const response = await fetch(`/api/search-books?q=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Backend API request failed');
            return await response.json();
        } else {
            // Development: Use direct API (faster)
            const url = `${BASE_URL}?q=${encodeURIComponent(query)}&langRestrict=tr${GOOGLE_BOOKS_API_KEY ? `&key=${GOOGLE_BOOKS_API_KEY}` : ""}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!data.items) return [];

            return data.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors || [],
                coverPath: item.volumeInfo.imageLinks?.thumbnail || "",
                description: item.volumeInfo.description || "",
                publishedDate: item.volumeInfo.publishedDate || "",
            }));
        }
    } catch (error) {
        console.error("Error searching books:", error);
        return [];
    }
};
