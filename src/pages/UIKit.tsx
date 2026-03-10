import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Alert } from '../components/Alert';

export const UIKit: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="min-h-screen bg-bg dark:bg-slate-900 text-text dark:text-gray-100 transition-colors duration-300 py-12 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-6 border-b border-border dark:border-slate-700">
                    <div>
                        <h1 className="text-3xl font-bold text-primary dark:text-blue-400">Web Tasarım UI Kit</h1>
                        <p className="text-muted dark:text-gray-400 mt-2">Bileşen (Component) kütüphanesi varyant varyant test sayfası.</p>
                    </div>
                    <div className="flex gap-4 mt-6 sm:mt-0">
                        <a href="/" className="px-4 py-2 bg-surface dark:bg-slate-800 border border-border dark:border-slate-600 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">Portföye Dön</a>
                        <Button variant="secondary" onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
                        </Button>
                    </div>
                </header>

                {/* 1. Buttons */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        Button (Düğme) Varyantları
                    </h2>

                    <div className="bg-surface dark:bg-slate-800 p-8 rounded-xl border border-border dark:border-slate-700 shadow-sm">
                        <h3 className="text-lg mb-4 font-semibold text-muted dark:text-gray-400 border-b border-border dark:border-slate-700 pb-2">Renk Varyantları (Size: md)</h3>
                        <div className="flex flex-wrap gap-4 mb-8 items-center">
                            <Button variant="primary">Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="danger">Danger Button</Button>
                            <Button variant="ghost">Ghost Button</Button>
                        </div>

                        <h3 className="text-lg mb-4 font-semibold text-muted dark:text-gray-400 border-b border-border dark:border-slate-700 pb-2">Boyut Varyantları (Variant: primary)</h3>
                        <div className="flex flex-wrap gap-4 mb-8 items-center">
                            <Button size="sm">Small Size (sm)</Button>
                            <Button size="md">Medium Size (md)</Button>
                            <Button size="lg">Large Size (lg)</Button>
                        </div>

                        <h3 className="text-lg mb-4 font-semibold text-muted dark:text-gray-400 border-b border-border dark:border-slate-700 pb-2">Disabled Durumları</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button variant="primary" disabled>Primary Disabled</Button>
                            <Button variant="danger" disabled>Danger Disabled</Button>
                        </div>
                    </div>
                </section>

                {/* 2. Inputs */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        Input (Girdi) Varyantları
                    </h2>

                    <div className="bg-surface dark:bg-slate-800 p-8 rounded-xl border border-border dark:border-slate-700 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg mb-4 font-semibold text-muted border-b pb-2">Standart & Label</h3>
                                <div className="flex flex-col gap-6">
                                    <Input placeholder="Normal state" />
                                    <Input label="Standart Input" placeholder="Label ile birlikte" />
                                    <Input label="Required Input" placeholder="Zorunlu alan" required />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg mb-4 font-semibold text-muted border-b pb-2">Durumlar (States)</h3>
                                <div className="flex flex-col gap-6">
                                    <Input
                                        label="Help Text (Bilgi)"
                                        placeholder="ornek@mail.com"
                                        helpText="Şifrenizi kimseyle paylaşmayacağız."
                                    />
                                    <Input
                                        label="Error (Hata Durumu)"
                                        placeholder="Yanlış girdi"
                                        error="Bu alan gereklidir ve sadece harf içermelidir."
                                    />
                                    <Input
                                        label="Disabled (Devre Dışı)"
                                        placeholder="Değiştirilemez"
                                        disabled
                                        value="Sadece okunabilir"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Cards */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                        Card (Kart) Varyantları
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg mb-4 font-semibold text-muted">A. Elevated Style (Gölgeli)</h3>
                            <Card
                                cardStyle="elevated"
                                title="Elevated Card Yapısı"
                                imageSrc="https://via.placeholder.com/600x300?text=Card+Resmi"
                                footer={<Button variant="primary" className="w-full">Detayları Gör</Button>}
                            >
                                Bu bir Elevated kart örneğidir. Varsayılan olarak hafif gölgelidir ve üzerine gelince (hover) yukarı doğru kayma efekti ve belirgin bir gölge eklenir. Görsel, başlık, gövde ve footer destekler.
                            </Card>
                        </div>

                        <div>
                            <h3 className="text-lg mb-4 font-semibold text-muted">B. Outlined Style (Çerçeveli & Resimsiz)</h3>
                            <Card
                                cardStyle="outlined"
                                title="Outlined Card Yapısı"
                                footer={
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="sm">İptal</Button>
                                        <Button variant="secondary" size="sm">Kaydet</Button>
                                    </div>
                                }
                            >
                                Bu bir Outlined kart örneğidir. Gölge gövde üzerinde yoktur sadece sağlam bir çerçeve çizgisi çizer (Dark moda tam uyumlu). Resim eklenmediği ve çoklu footer butonları olan varyantı temsil eder.
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 4. Alerts */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="bg-primary/10 text-primary dark:bg-blue-900/40 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                        Alert (Bildirim) Varyantları
                    </h2>

                    <div className="bg-surface dark:bg-slate-800 p-8 rounded-xl border border-border dark:border-slate-700 shadow-sm flex flex-col gap-4">

                        <Alert variant="info" title="1. Info Alert (Bilgilendirme)">
                            Sistem yakında güncellenecektir. Yeni tasarım sistemine (Tailwind v4) geçiş devam ediyor.
                        </Alert>

                        <Alert variant="success" title="2. Success Alert (Başarı) + Dismissible" dismissible>
                            Kullanıcı kaydı başarıyla oluşturuldu! Artık tüm Tailwind bileşenlerini kullanabilirsiniz. (Sağdaki çarpı işareti ile bu kutuyu kapatabilirsiniz.)
                        </Alert>

                        <Alert variant="warning" title="3. Warning Alert (Uyarı)">
                            Profilinizde eksik alanlar var. Lütfen hesap ayarlarından eksik bilgilerinizi doldurun.
                        </Alert>

                        <Alert variant="error" title="4. Error Alert (Hata) + Dismissible" dismissible>
                            Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edip sayfayı yenileyin. (Kapatılabilir)
                        </Alert>

                    </div>
                </section>
            </div>
        </div>
    );
};
