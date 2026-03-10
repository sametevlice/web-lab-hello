import { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Card } from './components/Card'
import { Alert } from './components/Alert'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Toggle dark class on html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
  }

  return (
    <div className="min-h-screen bg-bg dark:bg-slate-900 text-text dark:text-gray-100 transition-colors duration-300">
      <a href="#main-content" className="absolute -left-[9999px] focus:left-3 focus:top-3 focus:bg-yellow-400 focus:text-black focus:p-2 focus:z-50 focus:rounded-md">
        Ana içeriğe atla
      </a>

      {showAlert && (
        <div className="fixed top-4 right-4 z-50 w-full max-w-md animate-in slide-in-from-top-2">
          <Alert variant="success" dismissible onDismiss={() => setShowAlert(false)} title="Mesajınız Alındı">
            İletişim formunuz başarıyla gönderildi. Size en kısa sürede dönüş yapacağım.
          </Alert>
        </div>
      )}

      <header className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-surface dark:bg-slate-800 border-b border-border dark:border-slate-700 sticky top-0 z-10 transition-colors duration-300 w-full">
        <span className="text-xl font-bold text-primary dark:text-blue-400">Abdülsamet Evlice</span>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <nav aria-label="Ana navigasyon" className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center w-full md:w-auto list-none gap-2 m-0 p-0 text-center">
              <li><a href="#hakkimda" className="block md:inline-block w-full md:w-auto px-4 py-2 text-text dark:text-gray-200 hover:bg-primary dark:hover:bg-blue-600 hover:text-bg focus:bg-primary dark:focus:bg-blue-600 focus:text-bg rounded-md transition-colors duration-200">Hakkımda</a></li>
              <li><a href="#projeler" className="block md:inline-block w-full md:w-auto px-4 py-2 text-text dark:text-gray-200 hover:bg-primary dark:hover:bg-blue-600 hover:text-bg focus:bg-primary dark:focus:bg-blue-600 focus:text-bg rounded-md transition-colors duration-200">Projeler</a></li>
              <li><a href="#iletisim" className="block md:inline-block w-full md:w-auto px-4 py-2 text-text dark:text-gray-200 hover:bg-primary dark:hover:bg-blue-600 hover:text-bg focus:bg-primary dark:focus:bg-blue-600 focus:text-bg rounded-md transition-colors duration-200">İletişim</a></li>
            </ul>
          </nav>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Karanlık Temayı Değiştir"
          >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto w-full">
        <section id="hakkimda" className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl text-primary dark:text-blue-400 mb-8 text-center font-bold">Hakkımda</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 text-center md:text-left">
            <figure className="w-40 h-40 md:w-48 md:h-48 shrink-0">
              <img src="./assets/profil.jpg" alt="Abdülsamet Evlice profil fotoğrafı" className="w-full h-full rounded-full object-cover shadow-md dark:shadow-slate-800" />
            </figure>
            <div className="max-w-2xl">
              <p className="mb-6 text-base md:text-lg text-text dark:text-gray-300">
                Merhaba! Ben Abdülsamet Evlice. Cloud ve DevOps alanı ile ilgileniyorum. Bu portföy sayfasında projelerimi ve iletişim bilgilerimi paylaşıyorum.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2 list-none p-0" role="list" aria-label="Beceri etiketleri">
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">HTML5</li>
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">CSS3</li>
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">JavaScript</li>
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">React</li>
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">TypeScript</li>
                <li className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-surface dark:bg-slate-800/50 rounded-xl mx-4 lg:mx-0 my-8">
          <h2 className="text-2xl md:text-3xl text-primary dark:text-blue-400 mb-8 text-center font-bold">Projelerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              imageSrc="https://via.placeholder.com/400x200?text=E-Ticaret+Sitesi"
              imageAlt="E-Ticaret sitesi anasayfa ekran goruntusu"
              title="E-Ticaret Sitesi"
              cardStyle="elevated"
              footer={
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">React</span>
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">Firebase</span>
                </div>
              }
            >
              React ve Firebase kullanarak geliştirdiğim bir e-ticaret platformu. Ürün listeleme, sepet ve ödeme işlemleri içerir.
            </Card>

            <Card
              imageSrc="https://via.placeholder.com/400x200?text=Blog+Uygulamasi"
              imageAlt="Blog uygulamasi yazi listesi gorunumu"
              title="Blog Uygulaması"
              cardStyle="elevated"
              footer={
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">Node.js</span>
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">MongoDB</span>
                </div>
              }
            >
              Node.js ve MongoDB ile geliştirdiğim bir blog uygulaması. Kullanıcılar yazı ekleyebilir, yorum yapabilir ve kategorilere göz atabilir.
            </Card>

            <Card
              imageSrc="https://via.placeholder.com/400x200?text=Portfoy+Sitesi"
              imageAlt="Hava durumu uygulamasi arayuzu"
              title="Kişisel Portföy Sitesi"
              cardStyle="elevated"
              footer={
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">React</span>
                  <span className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-semibold">Tailwind</span>
                </div>
              }
            >
              Tailwind CSS, React ve Typescript kullanarak hazırladığım kişisel portföy sayfası. Modüler component yapısı ve Dark mode desteği sunar.
            </Card>
          </div>
        </section>

        <section id="iletisim" className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl text-primary dark:text-blue-400 mb-8 text-center font-bold">İletişim</h2>
          <Card cardStyle="outlined" className="max-w-xl mx-auto shadow-sm dark:shadow-none p-2 border-border dark:border-slate-700 bg-surface dark:bg-slate-800">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-5">
                <Input
                  label="Ad Soyad"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="İsminizi girin"
                  required
                />
              </div>
              <div className="mb-5">
                <Input
                  label="E-posta"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ornek@email.com"
                  helpText="E-posta adresinizi asla 3. şahıslarla paylaşmayacağız."
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-1 w-full">
                <label htmlFor="message" className="text-sm font-semibold text-text dark:text-gray-300">
                  Mesaj <span className="text-error ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  minLength={10}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-bg dark:bg-slate-900 border border-border dark:border-slate-600 rounded-md font-sans text-base text-text dark:text-white transition-colors duration-200 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/30 dark:focus:ring-blue-400/30 focus:outline-none resize-y"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                Mesajı Gönder
              </Button>
            </form>
          </Card>
        </section>
      </main>

      <footer className="w-full py-8 px-4 bg-surface dark:bg-slate-950 border-t border-border dark:border-slate-800 text-center text-muted dark:text-gray-500 text-sm transition-colors duration-300">
        <p>© 2025 Abdülsamet Evlice. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
