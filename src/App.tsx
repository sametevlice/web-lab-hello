import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <span className="site-title">Abdülsamet Evlice</span>
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
          <div className="about-content">
            <figure>
              <img src="./assets/profil.jpg" alt="Abdülsamet Evlice profil fotoğrafı" />
            </figure>
            <div>
              <p>
                Merhaba! Ben Abdülsamet Evlice. Cloud ve DevOps alanı ile ilgileniyorum. Bu portföy sayfasında projelerimi ve iletişim bilgilerimi paylaşıyorum.
              </p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=E-Ticaret+Sitesi" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Firebase kullanarak geliştirdiğim bir e-ticaret platformu. Ürün listeleme, sepet ve ödeme işlemleri içerir.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Firebase</li>
                <li>CSS Modules</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=Blog+Uygulamasi" alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Blog Uygulaması</h3>
              <p>Node.js ve MongoDB ile geliştirdiğim bir blog uygulaması. Kullanıcılar yazı ekleyebilir, yorum yapabilir ve kategorilere göz atabilir.</p>
              <ul className="skill-tags">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=Portfoy+Sitesi" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Kişisel Portföy Sitesi</h3>
              <p>HTML, CSS ve React kullanarak hazırladığım kişisel portföy sayfası. Projelerim, hakkımda bilgim ve iletişim formunu içerir.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>CSS</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad:</label>
              <input
                type="text"
                id="name"
                name="name"
                minLength={3}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj:</label>
              <textarea
                id="message"
                name="message"
                minLength={10}
                required
              ></textarea>
            </div>
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