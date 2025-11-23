# Backend API Kullanımı

Bu proje, API key'leri güvenli tutmak için Vercel Serverless Functions kullanır.

## API Endpoints

### Film Arama
```
GET /api/search-movies?q=inception
```

### Dizi Arama
```
GET /api/search-tv?q=breaking+bad
```

### Kitap Arama
```
GET /api/search-books?q=harry+potter
```

## Local Development

Local'de test etmek için Vercel CLI kullanın:

```bash
npm install -g vercel
vercel dev
```

Bu komut local'de serverless function'ları çalıştırır.

## Deployment

Vercel'e deploy etmek için:

```bash
vercel
```

veya GitHub'a push ettiğinizde otomatik deploy olur.

## Environment Variables

Vercel dashboard'da şu environment variable'ları ekleyin:

- `VITE_TMDB_API_KEY`
- `VITE_GOOGLE_BOOKS_API_KEY`

## Güvenlik

✅ API key'ler backend'de saklanır
✅ Frontend'den erişilemez
✅ CORS koruması var
✅ Rate limiting Vercel tarafından sağlanır
