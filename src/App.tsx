import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Abdülsamet Evlice - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
       <section id="hakkimda">
       <h2>Hakkımda</h2>
       <figure>
       <img src="./assets/profil.jpg" alt="Abdülsamet Evlice profil fotoğrafı" />
       <figcaption>Abdülsamet Evlice</figcaption>
     </figure>
     <p>
        Merhaba! Ben Abdülsamet Evlice. Cloud ve DevOps alanı ile ilgileniyorum. Bu portföy sayfasında projelerimi ve iletişim bilgilerimi paylaşıyorum.
      </p>
      </section>

        <section id="projeler">
  <h2>Projelerim</h2>

  <article>
    <h3>E-Ticaret Sitesi</h3>
    <p>React ve Firebase kullanarak geliştirdiğim bir e-ticaret platformu. Ürün listeleme, sepet ve ödeme işlemleri içerir.</p>
  </article>

  <article>
    <h3>Blog Uygulaması</h3>
    <p>Node.js ve MongoDB ile geliştirdiğim bir blog uygulaması. Kullanıcılar yazı ekleyebilir, yorum yapabilir ve kategorilere göz atabilir.</p>
  </article>

  <article>
    <h3>Kişisel Portföy Sitesi</h3>
    <p>HTML, CSS ve React kullanarak hazırladığım kişisel portföy sayfası. Projelerim, hakkımda bilgim ve iletişim formunu içerir.</p>
  </article>

</section>

       <section id="iletisim">
  <h2>İletişim</h2>

  <form>

    <label htmlFor="name">Ad Soyad:</label>
    <input
      type="text"
      id="name"
      name="name"
      minLength={3}
      required
    />

    <label htmlFor="email">E-posta:</label>
    <input
      type="email"
      id="email"
      name="email"
      required
    />

    <label htmlFor="message">Mesaj:</label>
    <textarea
      id="message"
      name="message"
      minLength={10}
      required
    ></textarea>

    <button type="submit">Gönder</button>

  </form>
</section>
      </main>

      <footer>
        <p>© 2025 Abdülsamet Evlice</p>
      </footer>
    </>
  )
}

export default App