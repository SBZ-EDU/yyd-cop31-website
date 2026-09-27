# YYD × COP31 Sitesi — Yapı (Sitemap)

```
site/
├── index.html        Ana Sayfa
├── program.html      Programımız
├── katilim.html      Katılım Rehberi
├── iletisim.html     İletişim
├── style.css         Ortak stiller (renk paleti, bileşenler, responsive)
├── img/              Görseller (QR kodlar)
│   ├── qr-cop31.png          → https://cop31.tr/tr
│   ├── qr-volunteers.png     → https://www.cop31volunteers.com/
│   └── qr-yyd.png            → https://yyd.org.tr
├── sitemap.md        Bu dosya — site yapısı
└── README.md         Çalıştırma ve içerik notları
```

## Sayfa yapıları

### 1. index.html — Ana Sayfa
| Bölüm | İçerik |
|---|---|
| Header (sticky) | Marka (YYD + COP31 rozeti) · menü: Ana Sayfa / Programımız / Katılım / İletişim |
| Hero | Başlık: "İklim krizi bir sağlık krizidir." · lead metin · CTA: Yeşil Bölge kaydı (cop31.tr) + Gönüllü ol (cop31volunteers.com) · bilgi kartı (tarih, yer, program) |
| İstatistik şeridi | 90+ ülke · 3M+ muayene · 48.000+ ameliyat · 45.000+ gönüllü |
| Neden COP31'deyiz? | 3 kart: İklim–Sağlık Bağı / Sahanın Sesi / Ortaklık ve Eylem |
| Program tanıtımı | 4 kart (stand, panel, atölye, gönüllülük) → program.html bağlantıları |
| Öne çıkan tarihler | Dikey zaman çizelgesi; YYD etkinlikleri kırmızı rozetli |
| CTA bandı | "Yeşil Bölge'ye giriş ücretsiz!" → katilim.html |
| Footer | Marka + slogan · site menüsü · 3 QR (cop31.tr / cop31volunteers.com / yyd.org.tr) |

### 2. program.html — Programımız
| Bölüm | İçerik |
|---|---|
| Sayfa hero | Başlık + açıklama |
| 4 program bloğu | `#stand` YYD Standı (9–20 Kasım) · `#panel` Yan Etkinlik Paneli (18 Kasım) · `#atolye` Gençlik Atölyesi (14 Kasım) · `#gonullu` Sağlık Köşesi & Gönüllülük |
| Tematik günler tablosu | 12 günlük program; 14 ve 18 Kasım YYD etkinlik günü olarak vurgulu, 15 Kasım kapalı günü |
| CTA bandı | Kayıt ol (cop31.tr) |

### 3. katilim.html — Katılım Rehberi
| Bölüm | İçerik |
|---|---|
| Sayfa hero | Giriş ücretsiz, ön akreditasyon gerekmez |
| Kim nasıl katılır? | 3 kart: Ziyaretçi (ücretsiz kayıt) · Gönüllü (Green Talent) · Kurum/STK (sergi + yan etkinlik + UNFCCC gözlemci akreditasyonu) |
| Üç adımda kayıt | Kayıt → kart ve plan → buluşalım |
| SSS (6 soru) | Ücret / Mavi Bölge erişimi / kurum standı / 15 Kasım / stand yeri / gönüllü koşulları |
| CTA bandı | İletişime geç |

### 4. iletisim.html — İletişim
| Bölüm | İçerik |
|---|---|
| Sayfa hero | Başlık |
| İletişim kartları | Telefon +90 212 586 12 12 · WhatsApp +90 549 384 62 49 · e-posta cop31@yyd.org.tr (yer tutucu) · web |
| Form | Ad, e-posta, konu, mesaj → mailto ile e-posta istemcisine yönlendirir (demo; gerçek gönderim için backend gerekir) |

## Tasarım dili
- Palet: COP31 yeşili (#14532d / #166534 / #16A34A, açık ton #f4faf6) + YYD marka kırmızısı (#C8102E) vurgu
- Dış bağımlılık yok: sistem yazı tipleri, inline SVG ikonlar, CSS gradyanlar, yerel QR görselleri
- Responsive: 960px ve 620px kırılım noktaları
- Erişilebilirlik: anlamlı başlık hiyerarşisi, odak halkaları, `lang="tr"`

## Güncelleme noktaları (tarihler kesinleşince)
1. Stand numarası → program.html `#stand` + katilim.html SSS
2. Panel/atölye saatleri → program.html tarih satırları
3. Kayıt formu açılınca → hero CTA linkleri
4. cop31@yyd.org.tr → resmî e-posta adresiyle değiştirin
