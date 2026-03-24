import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check saved preference or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  return (
    <>
      <header className="header container">
        <div className="header-content">
          <div className="logo">Abdülsamet Evlice</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
              <li>
                <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                  {isDarkMode ? '⛅' : '🌙'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="hakkimda" className="section">
          <h2 className="section-title">Hakkımda</h2>
          <div className="about-content">
            <div className="profile-image">
              <img src="/missing-profile.jpg" alt="Abdülsamet Evlice profil fotoğrafı" />
            </div>
            <div className="about-text">
              <p>Merhaba! Ben Abdülsamet Evlice. Cloud ve DevOps alanı ile ilgileniyorum. Bu portföy sayfasında projelerimi ve iletişim bilgilerimi paylaşıyorum.</p>
              <div className="badges">
                <span className="badge">HTML5</span>
                <span className="badge">CSS3</span>
                <span className="badge">JavaScript</span>
                <span className="badge">React</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Git</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projeler" className="section">
          <h2 className="section-title">Projelerim</h2>
          <div className="projects-grid">
            <div className="card">
              <div className="card-img">
                <img src="/missing-project1.jpg" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              </div>
              <div className="card-body">
                <h3>E-Ticaret Sitesi</h3>
                <p>React ve Firebase kullanarak geliştirdiğim bir e-ticaret platformu. Ürün listeleme, sepet ve ödeme işlemleri içerir.</p>
                <div className="badges">
                  <span className="badge">React</span>
                  <span className="badge">Firebase</span>
                  <span className="badge">CSS Modules</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img src="/missing-project2.jpg" alt="Blog uygulamasi yazi listesi gorunumu" />
              </div>
              <div className="card-body">
                <h3>Blog Uygulaması</h3>
                <p>Node.js ve MongoDB ile geliştirdiğim bir blog uygulaması. Kullanıcılar yazı ekleyebilir, yorum yapabilir ve kategorilere göz atabilir.</p>
                <div className="badges">
                  <span className="badge">Node.js</span>
                  <span className="badge">Express</span>
                  <span className="badge">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img src="/missing-project3.jpg" alt="Hava durumu uygulamasi arayuzu" />
              </div>
              <div className="card-body">
                <h3>Kişisel Portföy Sitesi</h3>
                <p>HTML, CSS ve React kullanarak hazırladığım kişisel portföy sayfası. Projelerim, hakkımda bilgim ve iletişim formunu içerir.</p>
                <div className="badges">
                  <span className="badge">React</span>
                  <span className="badge">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section">
          <h2 className="section-title">İletişim</h2>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj:</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn-submit">Gönder</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Abdülsamet Evlice</p>
        </div>
      </footer>
    </>
  );
}

export default App;
