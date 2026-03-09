# CSS Kararlari

## 1. Breakpoint Secimi
- Mobil odaklı tasarım (mobile-first) ile ilerlediğim için, varsayılan akışı 0 - 639px ekran aralığında tanımladım.
- İlk kırılımı 640px'den başlatarak tablet görünümüne geçiş sağladım: header elemanlarını yatay düzenle listeledim ve form alanlarındaki "gönder" butonunu tam genişlikten çıkartıp optimize ettim.
- Desktop görünümü için 1024px üzerinde bir breakpoint ekledim: projedeki kart yapılarını (Grid) üç eşit sütuna böldüm ve kapsayıcı genişliğini (main) ortalayarak 1200px'de sınırlandırdım.

## 2. Layout Tercihleri
- Sayfanın iskelet yapısını kontrol etmek, aynı satırda çoklu hizalama işlemlerini sağlamak için esnek flex-box mantığı kullandım (örneğin header: auto flex-direction).
- Proje kartlarının dikey ve yatay koordinatlarda boşluk hesaplamasını (gap) ve otomatik sığmasını kontrol etmek amacıyla iki boyutlu Grid metodu kullandım (`auto-fit`, `minmax(280px, 1fr)`). Media query sayısını sıfırlayıp akıcı grid düzeni sağladım.

## 3. Design Tokens
- Renk paleti için gözü yormayacak ama okunaklılığı yüksek, yaygın kullanılan (TailwindCSS tabanlı) `primary/secondary/accent` mantığını `/src/styles/tokens.css` içerisinde CSS Variables ile (design tokens) yönettim.
- Spacing (boşluk) ve Border-radius ölçü aralıkları da tutarlılık oluşturacak şekilde (`-sm`, `-md`, `-xl`) belirli rem metriklerine ve grid hesaplarına bağlandı.
- Responsive typography uyumu için `clamp()` fonksiyonunu dahil ettim (örneğin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);`); böylece cihaz veya ebat ayırt etmeksizin orantısal okunabilirlik elde ettim.

## 4. Responsive Stratejiler
- Her aşamada mobil tasarımdan desktop'a doğru (`min-width`) media queries genişletme kuralını benimsedim.
- Navigasyon listesi mobil tarafta (`flex-direction: column`) dikeyde hizalanıyorken, tablet tarafında yataya döküldü. Card grid auto-fit metoduyla kendi kendine responsive kaldı.
- Resim öğelerini, kabına uyacak şekilde `max-width: 100%; height: auto; object-fit: cover` standartları ile boyutlandırdım.
