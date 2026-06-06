/* ============================================================
   STİL AKADEMİSİ – Scripts
   ============================================================ */

/* ── Language System ── */
const translations = {
  tr: {
    // Nav
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.courses': 'Kurslar',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    'nav.cta': 'İletişime Geçin',
    // Hero
    'hero.badge': 'Üsküdar / İstanbul',
    'hero.h1a': 'Dikiş',
    'hero.h1b': 'Dikmeyi',
    'hero.h1c': 'Sevdiren Atölye',
    'hero.sub': '73.000\'den fazla takipçi ve yüzlerce mutlu öğrenciyle İstanbul\'un en sevilen dikiş ve tasarım atölyesindeyiz. Sıfırdan ileriye, her seviyeye kurs.',
    'hero.btn1': 'Kurslara Bak',
    'hero.btn2': 'Bize Ulaşın',
    'hero.scroll': 'Keşfet',
    // Stats
    'stat.followers': 'Instagram Takipçi',
    'stat.rating': 'Google Puanı',
    'stat.reviews': 'Yorumlar',
    'stat.posts': 'İçerik',
    // About
    'about.tag': 'Hakkımızda',
    'about.h2a': '"Dikiş dikmeyi',
    'about.h2b': 'sevdiren ve öğreten atölye"',
    'about.desc1': 'Stil Akademisi olarak, dikiş öğrenmenin zor ve sıkıcı olmak zorunda olmadığına inanıyoruz. Kurucu @tubagun liderliğinde, her seviyeden öğrencimize samimi, eğlenceli ve uygulamalı bir öğrenme deneyimi sunuyoruz.',
    'about.desc2': 'Üsküdar/Koşuyolu\'ndaki atölyemizde BERNINA ve bernette yetkili satış bayisi olarak en kaliteli dikiş makinelerini de bünyemizde bulunduruyoruz.',
    'about.fact1': 'BERNINA & bernette Yetkili Satış Bayisi',
    'about.fact2': 'Haftanın 7 günü 09:00 – 18:30 arası açık',
    'about.fact3': 'Ücretsiz Wi-Fi & konforlu atölye ortamı',
    'about.fact4': 'Tüm seviyelere ve yaş gruplarına kurs',
    'about.btn': 'Daha Fazla Bilgi',
    // Courses
    'courses.tag': 'Kurslarımız',
    'courses.h2a': 'Her Seviye İçin',
    'courses.h2b': 'Özel Program',
    'courses.desc': 'Hiç dikiş bilmeyenden ileri seviye tasarımcıya kadar her bireye uygun kurs programlarımızla size en uygun yolu sunuyoruz.',
    'course1.title': 'Yetişkin Dikiş Kursu',
    'course1.desc': 'Hiç dikiş dikmediniz mi? Sorun değil. Başlangıçtan ileri seviyeye kadar adım adım öğreniyorsunuz.',
    'course1.tag': 'Başlangıç & İleri',
    'course2.title': 'Çocuk Atölyesi',
    'course2.desc': '7–12 yaş arası çocuklara yönelik eğlenceli dikiş dersleri. Offline aktivite, yaratıcılık ve motor beceri geliştirme.',
    'course2.tag': '7–12 Yaş',
    'course3.title': 'Dikiş Makinesi Satışı',
    'course3.desc': 'BERNINA ve bernette yetkili satış bayisi olarak en iyi dikiş makinelerini uygun fiyatlarla sunuyoruz.',
    'course3.tag': 'BERNINA & bernette',
    'course4.title': 'Özel Atölye',
    'course4.desc': 'Bireysel veya küçük grup atölyelerimizle kendi hızınızda ilerleyin. Birebir eğitim imkânı.',
    'course4.tag': 'Kişiye Özel',
    'course5.title': 'Tasarım Kursu',
    'course5.desc': 'Kendi kıyafetinizi tasarlayıp dikmek mi istiyorsunuz? Tasarım derslerimizle hayal ettiğinizi gerçeğe dönüştürün.',
    'course5.tag': 'Moda & Tasarım',
    'course6.title': 'Vayabo Etkinlikleri',
    'course6.desc': 'Periyodik düzenlenen özel etkinlikler ve workshop\'larımıza katılın, yeni insanlarla tanışın.',
    'course6.tag': 'Etkinlik',
    // Gallery
    'gallery.tag': 'Galeri',
    'gallery.h2a': 'Atölyemizden',
    'gallery.h2b': 'Kareler',
    'gallery.desc': 'Instagram hesabımızdan seçilmiş en güzel anlar.',
    'gallery.btn': 'Tüm Galeriyi Gör',
    // Why
    'why.tag': 'Neden Biz?',
    'why.h2a': 'Stil Akademisi\'ni',
    'why.h2b': 'Seçin',
    'why1.title': 'Eğlenceli Öğrenme',
    'why1.desc': 'Sıkıcı teoriler değil, uygulamalı ve eğlenceli dersler. Hiç zorlanmadan, hevesiniz kalkmadan öğrenin.',
    'why2.title': 'Uzman Eğitmen',
    'why2.desc': 'Alanında uzman ve sevgi dolu eğitmenimizle her derste kendinizi geliştirir hissedersiniz.',
    'why3.title': 'Kaliteli Ekipman',
    'why3.desc': 'Atölyemizde sektörün en iyi markası BERNINA makineleriyle çalışıyorsunuz.',
    'why4.title': 'Her Seviyeye Uygun',
    'why4.desc': 'İlk kez dikiş dikecekseniz de, deneyimliyseniz de size uygun program var.',
    'why5.title': 'Esnek Saatler',
    'why5.desc': 'Haftanın 7 günü 09:00–18:30 arası açığız. Size uygun vakti seçin.',
    'why6.title': '73K+ Topluluk',
    'why6.desc': 'Instagram\'da 73.000\'den fazla takipçiyle büyüyen canlı bir topluluğun parçası olun.',
    // CTA
    'cta.h2': 'Dikiş Maceranıza Bugün Başlayın',
    'cta.p': 'Hiç dikiş bilmemeniz gerekmez. İlk adımı atmak yeterli — gerisini biz hallederiz.',
    'cta.btn1': 'WhatsApp\'tan Yazın',
    'cta.btn2': 'Kurslara Göz At',
    // Footer
    'footer.desc': 'İstanbul Üsküdar\'da dikiş dikmeyi sevdiren ve öğreten atölye. BERNINA & bernette yetkili satış bayisi.',
    'footer.pages': 'Sayfalar',
    'footer.courses': 'Kurslar',
    'footer.contact': 'İletişim',
    'footer.address': 'Barbaros Mah., Veysipaşa Sok., Yüce Kent Sitesi No: 3A/B, Üsküdar/İstanbul',
    'footer.phone': '+90 506 039 95 20',
    'footer.hours': 'Hft. 7 gün: 09:00 – 18:30',
    'footer.rights': '© 2026 Stil Akademisi. Tüm hakları saklıdır.',
    'footer.built': 'Web tasarım',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Us',
    'hero.badge': 'Üsküdar / Istanbul',
    'hero.h1a': 'The Sewing',
    'hero.h1b': 'Workshop You',
    'hero.h1c': 'Will Love',
    'hero.sub': 'With over 73,000 followers and hundreds of happy students, we are Istanbul\'s most beloved sewing and design studio. Courses for every level, from zero to advanced.',
    'hero.btn1': 'View Courses',
    'hero.btn2': 'Contact Us',
    'hero.scroll': 'Explore',
    'stat.followers': 'Instagram Followers',
    'stat.rating': 'Google Rating',
    'stat.reviews': 'Reviews',
    'stat.posts': 'Posts',
    'about.tag': 'About Us',
    'about.h2a': '"The studio that makes you',
    'about.h2b': 'fall in love with sewing"',
    'about.desc1': 'At Stil Akademisi, we believe learning to sew doesn\'t have to be difficult or boring. Led by founder @tubagun, we offer students of all levels a warm, fun, and hands-on learning experience.',
    'about.desc2': 'At our Üsküdar/Koşuyolu studio, we are also an authorized BERNINA and bernette dealer, offering the finest sewing machines.',
    'about.fact1': 'BERNINA & bernette Authorized Dealer',
    'about.fact2': 'Open 7 days a week, 09:00 – 18:30',
    'about.fact3': 'Free Wi-Fi & comfortable studio environment',
    'about.fact4': 'Courses for all levels and age groups',
    'about.btn': 'Learn More',
    'courses.tag': 'Our Courses',
    'courses.h2a': 'Tailored Programs',
    'courses.h2b': 'For Every Level',
    'courses.desc': 'Whether you\'ve never held a needle or you\'re an experienced designer, we have the right program for you.',
    'course1.title': 'Adult Sewing Course',
    'course1.desc': 'Never sewn before? No problem. Learn step by step from beginner to advanced.',
    'course1.tag': 'Beginner & Advanced',
    'course2.title': 'Children\'s Workshop',
    'course2.desc': 'Fun sewing lessons for children aged 7–12. Offline activity, creativity and fine motor skill development.',
    'course2.tag': 'Ages 7–12',
    'course3.title': 'Sewing Machine Sales',
    'course3.desc': 'As an authorized BERNINA and bernette dealer, we offer the best sewing machines at competitive prices.',
    'course3.tag': 'BERNINA & bernette',
    'course4.title': 'Private Workshop',
    'course4.desc': 'Progress at your own pace with our individual or small group workshops. One-on-one instruction available.',
    'course4.tag': 'Personalized',
    'course5.title': 'Design Course',
    'course5.desc': 'Want to design and sew your own clothing? Turn your ideas into reality with our design classes.',
    'course5.tag': 'Fashion & Design',
    'course6.title': 'Vayabo Events',
    'course6.desc': 'Join our periodic special events and workshops, meet new people and expand your skills.',
    'course6.tag': 'Event',
    'gallery.tag': 'Gallery',
    'gallery.h2a': 'Moments from',
    'gallery.h2b': 'Our Studio',
    'gallery.desc': 'Selected highlights from our Instagram.',
    'gallery.btn': 'View Full Gallery',
    'why.tag': 'Why Us?',
    'why.h2a': 'Choose',
    'why.h2b': 'Stil Akademisi',
    'why1.title': 'Fun Learning',
    'why1.desc': 'No boring theory — just hands-on, enjoyable lessons. Learn without stress, keep your enthusiasm.',
    'why2.title': 'Expert Instructor',
    'why2.desc': 'With our expert and passionate instructor, you\'ll feel yourself improving with every lesson.',
    'why3.title': 'Quality Equipment',
    'why3.desc': 'Work with BERNINA machines — the best brand in the industry — right in our studio.',
    'why4.title': 'All Levels Welcome',
    'why4.desc': 'Whether you\'re a complete beginner or experienced, there\'s a program tailored for you.',
    'why5.title': 'Flexible Hours',
    'why5.desc': 'Open 7 days a week, 09:00–18:30. Choose the time that works best for you.',
    'why6.title': '73K+ Community',
    'why6.desc': 'Join a thriving community of over 73,000 followers on Instagram and beyond.',
    'cta.h2': 'Start Your Sewing Journey Today',
    'cta.p': 'No experience needed. Just take the first step — we\'ll handle the rest.',
    'cta.btn1': 'Message on WhatsApp',
    'cta.btn2': 'Browse Courses',
    'footer.desc': 'Istanbul\'s favorite sewing and design studio. BERNINA & bernette authorized dealer.',
    'footer.pages': 'Pages',
    'footer.courses': 'Courses',
    'footer.contact': 'Contact',
    'footer.address': 'Barbaros Mah., Veysipaşa Sok., Yüce Kent Sitesi No: 3A/B, Üsküdar/Istanbul',
    'footer.phone': '+90 506 039 95 20',
    'footer.hours': '7 days/week: 09:00 – 18:30',
    'footer.rights': '© 2026 Stil Akademisi. All rights reserved.',
    'footer.built': 'Web design',
  }
};

let currentLang = localStorage.getItem('lang') || 'tr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val = translations[lang][key];
    if (!val) return;
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = translations[lang][key];
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  /* ── Language buttons ── */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
  applyLang(currentLang);

  /* ── Navbar scroll ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('navHamburger');
  const navMobile = document.getElementById('navMobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      navMobile.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (navMobile.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    document.querySelectorAll('.nav-mobile a').forEach(a => {
      a.addEventListener('click', () => {
        navMobile.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  /* ── Scroll animations ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in, .slide-left, .slide-right, .slide-up').forEach(el => observer.observe(el));

  /* ── Counters ── */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        obs.unobserve(el);
        let start = 0;
        const duration = 1800;
        const step = timestamp => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(ease * target).toLocaleString('tr-TR') + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
});
