# Yeryüzü Doktorları × COP31 — Tanıtım Sitesi

COP31 Antalya 2026 Yeşil Bölge katılımı için 4 sayfalık, bağımlılıksız statik site.

## Çalıştırma
```bash
cd site
python3 -m http.server 8000 --bind 0.0.0.0
# tarayıcıda: http://localhost:8000
```

## Dosyalar
- `index.html` — Ana sayfa
- `program.html` — Programımız (stand, panel, atölye, gönüllülük + tematik günler)
- `katilim.html` — Katılım rehberi (ücretsiz kayıt, gönüllülük, kurum başvuruları, SSS)
- `iletisim.html` — İletişim kartları + form
- `style.css` — Ortak stiller
- `img/` — QR kodlar (cop31.tr, cop31volunteers.com, yyd.org.tr)
- `sitemap.md` — Site yapısı ve güncelleme noktaları

## Notlar
- Dış kaynak (CDN/font/görsel) kullanılmıyor; çevrimdışı da çalışır.
- İletişim formu `mailto:` ile çalışır; kalıcı çözüm için basit bir backend
  (örn. Formspree veya kendi API'niz) bağlayabilirsiniz.
- E-posta (cop31@yyd.org.tr) ve stand bilgileri yer tutucudur — kesinleşince
  `sitemap.md` → "Güncelleme noktaları" listesi üzerinden değiştirin.

## Kaynaklar
- cop31.tr (resmî site, Green Zone, kayıt)
- cop31volunteers.com (Green Talent gönüllülük programı)
- unfccc.int/cop31 (UNFCCC akreditasyon)
- Türkiye KSD / İSO (tematik günler takvimi)
