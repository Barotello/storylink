# 🚀 StoryLink Deployment Rehberi

## Vercel'e Deploy Etme

### 1. GitHub Repository Oluştur

```bash
git add .
git commit -m "Add backend API and deployment config"
git push origin main
```

### 2. Vercel'e Bağlan

1. [Vercel](https://vercel.com) hesabı oluşturun
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin (`Barotello/storylink`)
4. "Import" butonuna tıklayın

### 3. Environment Variables Ekle

Vercel dashboard'da **Settings → Environment Variables** bölümüne gidin ve şunları ekleyin:

```
VITE_TMDB_API_KEY=f3168e9261a5358aa5c369ab3ba6e98a
VITE_GOOGLE_BOOKS_API_KEY=AIzaSyBPVd0G0E6X2Xkx9FKRjVfqlhummP6YWvg
```

**Önemli:** Bu değerleri **Production**, **Preview** ve **Development** için de ekleyin.

### 4. Deploy Et

"Deploy" butonuna tıklayın. Vercel otomatik olarak:
- ✅ Frontend'i build edecek
- ✅ Backend API'leri deploy edecek
- ✅ HTTPS sertifikası ekleyecek
- ✅ CDN üzerinden sunacak

### 5. Otomatik Deployment

Artık `main` branch'ine her push yaptığınızda otomatik deploy olacak! 🎉

## 🔒 Güvenlik

### Production'da:
- ✅ API key'ler backend'de saklanır
- ✅ Frontend'den erişilemez
- ✅ CORS koruması aktif
- ✅ HTTPS zorunlu

### Development'ta:
- 🔧 Direkt API kullanımı (hızlı geliştirme)
- 🔧 `.env` dosyası local'de kalır

## 📱 Test Etme

Deploy edildikten sonra:

1. Vercel size bir URL verecek (örn: `storylink.vercel.app`)
2. Bu URL'i tarayıcıda açın
3. Arama özelliğini test edin
4. Kayıt ekranını test edin

## 🐛 Sorun Giderme

### API çalışmıyor?
1. Vercel dashboard → Settings → Environment Variables
2. API key'lerin doğru girildiğinden emin olun
3. Redeploy edin

### Build hatası?
1. Vercel dashboard → Deployments → Son deployment
2. Build logs'u kontrol edin
3. Hata mesajını okuyun

## 🔄 Güncelleme

Kod değişikliği yaptığınızda:

```bash
git add .
git commit -m "Update message"
git push origin main
```

Vercel otomatik olarak yeni versiyonu deploy edecek!

## 📊 Analytics

Vercel dashboard'da:
- 📈 Ziyaretçi sayısı
- ⚡ Performans metrikleri
- 🌍 Coğrafi dağılım
- 🔥 Popüler sayfalar

görebilirsiniz.

## 💡 İpuçları

1. **Custom Domain:** Vercel'de kendi domain'inizi bağlayabilirsiniz
2. **Preview Deployments:** Her PR için otomatik preview URL
3. **Rollback:** Eski versiyona geri dönebilirsiniz
4. **Edge Functions:** API'ler dünya çapında edge'de çalışır (hızlı!)

## 🎯 Sonraki Adımlar

- [ ] Custom domain ekle
- [ ] Analytics'i incele
- [ ] Performance optimize et
- [ ] SEO iyileştirmeleri yap
- [ ] Social media preview ekle
