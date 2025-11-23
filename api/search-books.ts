import type { VercelRequest, VercelResponse } from '@vercel/node';

const GOOGLE_BOOKS_API_KEY = process.env.VITE_GOOGLE_BOOKS_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { q: query } = req.query;

    if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(query)}&langRestrict=tr${GOOGLE_BOOKS_API_KEY ? `&key=${GOOGLE_BOOKS_API_KEY}` : ""}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Google Books API request failed');
        }

        const data = await response.json();

        if (!data.items) {
            return res.status(200).json([]);
        }

        const results = data.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || [],
            coverPath: item.volumeInfo.imageLinks?.thumbnail || "",
            description: item.volumeInfo.description || "",
            publishedDate: item.volumeInfo.publishedDate || "",
        }));

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error searching books:', error);
        return res.status(500).json({ error: 'Failed to search books' });
    }
}
