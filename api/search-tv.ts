import type { VercelRequest, VercelResponse } from '@vercel/node';

const TMDB_API_KEY = process.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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

    if (!TMDB_API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=tr-TR`
        );

        if (!response.ok) {
            throw new Error('TMDB API request failed');
        }

        const data = await response.json();

        const results = data.results.map((item: any) => ({
            id: item.id.toString(),
            title: item.name,
            posterPath: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : "",
            type: "tv",
            genreIds: item.genre_ids,
            overview: item.overview,
            releaseDate: item.first_air_date,
        }));

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error searching TV series:', error);
        return res.status(500).json({ error: 'Failed to search TV series' });
    }
}
