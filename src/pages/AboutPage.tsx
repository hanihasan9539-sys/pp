import {
  Users,
  Award,
  Globe,
  Heart,
  Sparkles,
  Target,
  Leaf,
  DollarSign,
  LucideIcon,
  ChevronRight,
  Star,
  MapPin,
} from 'lucide-react'

import about1 from '@/assets/about1.jpeg'
import about2 from '@/assets/about2.jpeg'
import about3 from '@/assets/about3.jpeg'
import about5 from '@/assets/about5.jpeg'
import shop1 from '@/assets/Shop1.jpeg'

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  gradient: string;
}

interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
  location: string;
  image: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    {
      label: 'Happy Customers',
      value: '50K+',
      icon: Users,
      color: '#1B8BBE',
      bg: 'rgba(27,139,190,0.12)',
      gradient: 'linear-gradient(135deg, #1B8BBE, #06b6d4)',
    },
    {
      label: 'Products Sold',
      value: '100K+',
      icon: Award,
      color: '#ED1C24',
      bg: 'rgba(237,28,36,0.12)',
      gradient: 'linear-gradient(135deg, #ED1C24, #f472b6)',
    },
    {
      label: 'Countries Served',
      value: '25+',
      icon: Globe,
      color: '#1B8BBE',
      bg: 'rgba(27,139,190,0.12)',
      gradient: 'linear-gradient(135deg, #1B8BBE, #ED1C24)',
    },
    {
      label: '5-Star Reviews',
      value: '10K+',
      icon: Heart,
      color: '#ED1C24',
      bg: 'rgba(237,28,36,0.12)',
      gradient: 'linear-gradient(135deg, #ED1C24, #ef4444)',
    },
  ]

  const values: Value[] = [
    {
      title: 'Quality First',
      description: 'We carefully curate every product to ensure it meets our high standards of quality and durability.',
      icon: Sparkles,
      gradient: 'linear-gradient(135deg, #1B8BBE, #06b6d4)',
    },
    {
      title: 'Customer Focused',
      description: "Your satisfaction is our priority. We're here to help you find exactly what you need.",
      icon: Target,
      gradient: 'linear-gradient(135deg, #ED1C24, #f472b6)',
    },
    {
      title: 'Sustainable',
      description: "We're committed to reducing our environmental impact through eco-friendly packaging and partnerships.",
      icon: Leaf,
      gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
    },
    {
      title: 'Fair Pricing',
      description: "Great products shouldn't break the bank. We offer competitive prices without compromising quality.",
      icon: DollarSign,
      gradient: 'linear-gradient(135deg, #1B8BBE, #ED1C24)',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      feedback: 'PP Collections has become my go-to store for quality products. The attention to detail and customer service is unmatched!',
      rating: 5,
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      feedback: "I've been shopping here for over a year now. Every purchase has exceeded my expectations. Highly recommended!",
      rating: 5,
      location: 'Delhi, India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Ananya Reddy',
      feedback: 'The perfect blend of quality and affordability. PP Collections truly understands what customers need.',
      rating: 5,
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Vikram Mehta',
      feedback: "Outstanding products and exceptional service. They've earned a customer for life!",
      rating: 5,
      location: 'Pune, India',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
  ]

  const inaugurationImages: string[] = [about1, about2, about3, about5]

  return (
    <div className="about-root">

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-blur-1" />
        <div className="hero-blur-2" />
        {/* desktop dot pattern */}
        <div className="hero-dot-pattern" />

        <div className="hero-inner">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            ✨ Trusted by 50,000+ customers worldwide
          </span>
          <h1 className="hero-title">
            About <span className="hero-gradient-text">PP Collections</span>
          </h1>
          <p className="hero-subtitle">
            We're on a mission to make quality products accessible to everyone.
            Founded in 2020, we've grown from a small startup to a trusted
            destination for thousands of happy customers.
          </p>
          <div className="hero-divider">
            <span className="hero-div-line blue" />
            <span className="hero-div-dot" />
            <span className="hero-div-line red" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS
      ════════════════════════════════ */}
      <section className="stats-section">
        <div className="stats-inner">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* desktop: full gradient icon box */}
              <div className="stat-icon-desktop" style={{ background: stat.gradient }}>
                <stat.icon size={28} color="white" />
              </div>
              {/* mobile: small tinted icon */}
              <div className="stat-icon-mobile" style={{ background: stat.bg }}>
                <stat.icon size={16} style={{ color: stat.color }} />
              </div>
              <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          STORY
      ════════════════════════════════ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-badge">
            <span className="badge-dot blue" />
            Our Journey
          </div>
          <h2 className="section-title">
            Building Something <span className="gradient-text">Special</span>
          </h2>

          <div className="story-grid">
            {/* image */}
            <div className="story-image-wrap">
              <div className="story-image-overlay" />
              <img src={shop1} alt="Our store" className="story-image" />
              <div className="story-image-tag">
                <Sparkles size={14} color="#1B8BBE" />
                Since 2020
              </div>
            </div>

            {/* text */}
            <div className="story-text">
              <p>
                PP Collections started with a simple idea: everyone deserves access to
                high-quality products without the premium price tag. What began as a small
                online store has evolved into a vibrant marketplace serving customers across
                the globe.
              </p>
              <p>
                Our team works tirelessly to source the best products, negotiate fair prices,
                and deliver an exceptional shopping experience. We believe in building lasting
                relationships with our customers and partners.
              </p>
              <p className="story-highlight">
                Today, we're proud to offer thousands of carefully selected products across
                multiple categories, all backed by our commitment to quality and customer
                satisfaction.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          INAUGURATION GALLERY
      ════════════════════════════════ */}
      <section className="section-pad gallery-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">
              <span className="badge-dot red" />
              Our Beginning
            </div>
            <h2 className="section-title">
              Inauguration <span className="gradient-text">Moments</span>
            </h2>
            <p className="section-sub">
              Relive the special moments from our grand opening celebration
            </p>
          </div>

          <div className="gallery-grid">
            {inaugurationImages.map((image, index) => (
              <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={image} alt={`Inauguration moment ${index + 1}`} className="gallery-img" />
                <div className="gallery-overlay">
                  {/* desktop: decorative corner */}
                  <span className="gallery-corner-decor" />
                  {/* mobile: number */}
                  <span className="gallery-num">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          VALUES
      ════════════════════════════════ */}
      <section className="section-pad values-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">
              <span className="badge-dot blue" />
              What We Stand For
            </div>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-top-bar" style={{ background: value.gradient }} />
                <div className="value-icon-wrap" style={{ background: value.gradient }}>
                  <value.icon size={20} color="white" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════ */}
      <section className="section-pad testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">
              <span className="badge-dot red" />
              Customer Stories
            </div>
            <h2 className="section-title">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="section-sub">
              Real feedback from real customers who trust PP Collections
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={t.name} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="testimonial-top-bar" />
                <div className="testimonial-body">
                  {/* Desktop uses Heart icons (code 2); mobile uses Stars (code 1) */}
                  <div className="testimonial-stars desktop-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Heart key={i} size={16} fill="#ED1C24" color="#ED1C24" />
                    ))}
                  </div>
                  <div className="testimonial-stars mobile-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#ED1C24" color="#ED1C24" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.feedback}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar-wrap">
                    <img src={t.image} alt={t.name} className="testimonial-avatar" />
                    <span className="testimonial-online" />
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-loc">
                      {/* desktop: plain text location */}
                      <span className="desktop-loc">{t.location}</span>
                      {/* mobile: icon + city only */}
                      <span className="mobile-loc"><MapPin size={10} /> {t.location.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ── LIGHT / DARK VARIABLES ── */
        .about-root {
          --bg-page:        #f8fafc;
          --bg-card:        #ffffff;
          --bg-section-alt: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
          --border-card:    #f1f5f9;
          --border-author:  #f1f5f9;
          --bg-author:      #fafbfd;
          --text-heading:   #0f172a;
          --text-body:      #475569;
          --text-muted:     #64748b;
          --text-label:     #94a3b8;
          --text-badge:     #475569;
          --shadow-card:    0 4px 20px rgba(0,0,0,0.06);
          --shadow-stats:   0 8px 40px rgba(0,0,0,0.10);
          --highlight-bg:   linear-gradient(135deg, rgba(27,139,190,0.06), rgba(237,28,36,0.06));
          --story-tag-bg:   rgba(255,255,255,0.9);
          --story-tag-color:#1e293b;
          --badge-bg:       linear-gradient(90deg, rgba(27,139,190,0.08), rgba(237,28,36,0.08));
          --badge-border:   rgba(27,139,190,0.2);
          --online-border:  white;
        }
        html.dark .about-root {
          --bg-page:        #0f172a;
          --bg-card:        #1e293b;
          --bg-section-alt: linear-gradient(180deg, #0f172a 0%, #0d1520 100%);
          --border-card:    #334155;
          --border-author:  #334155;
          --bg-author:      #172033;
          --text-heading:   #f1f5f9;
          --text-body:      #94a3b8;
          --text-muted:     #64748b;
          --text-label:     #64748b;
          --text-badge:     #94a3b8;
          --shadow-card:    0 4px 20px rgba(0,0,0,0.3);
          --shadow-stats:   0 8px 40px rgba(0,0,0,0.4);
          --highlight-bg:   linear-gradient(135deg, rgba(27,139,190,0.12), rgba(237,28,36,0.12));
          --story-tag-bg:   rgba(30,41,59,0.95);
          --story-tag-color:#e2e8f0;
          --badge-bg:       linear-gradient(90deg, rgba(27,139,190,0.15), rgba(237,28,36,0.15));
          --badge-border:   rgba(27,139,190,0.35);
          --online-border:  #1e293b;
        }

        .about-root {
          font-family: 'Poppins', sans-serif;
          background: var(--bg-page);
          color: var(--text-heading);
          min-height: 100vh;
          transition: background 0.3s, color 0.3s;
        }

        /* ══════════════ HERO ══════════════ */
        .hero-section {
          position: relative;
          background: linear-gradient(145deg, #0f1923 0%, #1a2535 50%, #0d1520 100%);
          overflow: hidden;
          text-align: center;
          /* mobile */
          padding: 72px 10px 80px;
        }
        .hero-blur-1 {
          position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px;
          background: rgba(27,139,190,0.25);
          border-radius: 50%; filter: blur(80px); pointer-events: none;
        }
        .hero-blur-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          background: rgba(237,28,36,0.2);
          border-radius: 50%; filter: blur(80px); pointer-events: none;
        }
        /* desktop dot-grid texture */
        .hero-dot-pattern {
          display: none;
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+");
          opacity: 0.2; pointer-events: none;
        }
        .hero-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          color: #e2e8f0; font-size: 13px; font-weight: 700;
          padding: 8px 18px; border-radius: 100px; margin-bottom: 22px;
          letter-spacing: 0.02em;
        }
        .hero-badge-dot {
          width: 8px; height: 8px; background: #1B8BBE;
          border-radius: 50%; animation: pulse 2s infinite;
        }
        .hero-title {
          font-size: clamp(1.25rem, 4.5vw, 3.2rem);
          font-weight: 800; color: white; line-height: 1.2; margin: 0 0 16px;
        }
        .hero-gradient-text {
          background: linear-gradient(90deg, #1B8BBE, #ED1C24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-subtitle {
          color: #94a3b8; font-size: clamp(12px, 2.5vw, 16px); line-height: 1.7; margin: 0 0 28px;
        }
        .hero-divider { display: flex; align-items: center; justify-content: center; gap: 6px; }
        .hero-div-line { height: 3px; width: 48px; border-radius: 10px; }
        .hero-div-line.blue { background: linear-gradient(90deg, transparent, #1B8BBE); }
        .hero-div-line.red  { background: linear-gradient(90deg, #ED1C24, transparent); }
        .hero-div-dot { width: 8px; height: 8px; background: #ED1C24; border-radius: 50%; }

        /* ══════════════ STATS ══════════════ */
        /* MOBILE: single row card (code 1 style) */
        .stats-section {
          padding: 0 2px;
          margin-top: -32px;
          position: relative; z-index: 10;
        }
        .stats-inner {
          background: var(--bg-card);
          border-radius: 16px;
          box-shadow: var(--shadow-stats);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto;
        }
        .stat-card {
          padding: 12px 2px;
          text-align: center;
          border-right: 1px solid var(--border-card);
          animation: fadeUp 0.5s ease both;
          transition: background 0.2s;
          cursor: default;
        }
        .stat-card:last-child { border-right: none; }
        .stat-card:hover { background: var(--bg-page); }

        /* desktop icon */
        .stat-icon-desktop {
          display: none;
        }
        /* mobile icon */
        .stat-icon-mobile {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 4px;
        }
        .stat-value {
          font-size: clamp(0.85rem, 2.2vw, 1.5rem);
          font-weight: 800; line-height: 1.2;
        }
        .stat-label {
          font-size: 8px; color: #94a3b8; font-weight: 700;
          margin-top: 2px; letter-spacing: 0.02em; text-transform: uppercase;
        }

        /* ══════════════ SECTIONS COMMON ══════════════ */
        .section-pad { padding: 56px 10px; }
        .container { max-width: 1100px; margin: 0 auto; }

        .section-header-center { text-align: center; margin-bottom: 28px; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--text-badge); font-size: 10px; font-weight: 800;
          padding: 5px 12px; border-radius: 100px; margin-bottom: 10px;
          letter-spacing: 0.05em; text-transform: uppercase;
        }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; }
        .badge-dot.blue { background: #1B8BBE; }
        .badge-dot.red  { background: #ED1C24; }

        .section-title {
          font-size: clamp(1.1rem, 3vw, 2.2rem);
          font-weight: 700; color: var(--text-heading); margin: 0 0 10px; line-height: 1.3;
        }
        .gradient-text {
          background: linear-gradient(90deg, #1B8BBE, #ED1C24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .section-sub {
          color: var(--text-muted); font-size: clamp(12px, 2.5vw, 15px);
          margin: 0 auto; max-width: 500px;
        }

        /* ══════════════ STORY ══════════════ */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-top: 28px;
        }
        .story-image-wrap {
          position: relative; border-radius: 24px; overflow: hidden;
          aspect-ratio: 4/3; box-shadow: 0 16px 48px rgba(0,0,0,0.15);
        }
        .story-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .story-image-wrap:hover .story-image { transform: scale(1.05); }
        .story-image-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(135deg, rgba(27,139,190,0.15), rgba(237,28,36,0.15));
          pointer-events: none;
        }
        .story-image-tag {
          position: absolute; bottom: 14px; left: 14px; z-index: 2;
          background: var(--story-tag-bg); backdrop-filter: blur(10px);
          border-radius: 100px; padding: 6px 14px;
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 800; color: var(--story-tag-color);
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .story-text { display: flex; flex-direction: column; gap: 16px; }
        .story-text p {
          color: var(--text-body); font-size: clamp(12px, 2.5vw, 15px); line-height: 1.75; margin: 0;
        }
        .story-highlight {
          color: var(--text-heading) !important; font-weight: 700 !important;
          padding: 16px 20px;
          background: var(--highlight-bg);
          border-left: 3px solid #1B8BBE;
          border-radius: 0 12px 12px 0;
        }
        .story-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #1B8BBE, #ED1C24);
          color: white; border: none; padding: 12px 24px;
          border-radius: 100px; font-weight: 800; font-size: 14px;
          cursor: pointer; width: fit-content;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 20px rgba(27,139,190,0.35);
          font-family: 'Poppins', sans-serif;
        }
        .story-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(27,139,190,0.4); }

        /* ══════════════ GALLERY ══════════════ */
        .gallery-section { background: var(--bg-section-alt); }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .gallery-item {
          position: relative; border-radius: 16px; overflow: hidden;
          aspect-ratio: 4/3; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.10);
          animation: fadeUp 0.5s ease both;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .gallery-item:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.18); }
        .gallery-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .gallery-item:hover .gallery-img { transform: scale(1.08); }
        .gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 60%);
          display: flex; align-items: flex-end; justify-content: space-between;
          padding: 12px;
          opacity: 0; transition: opacity 0.3s;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        /* mobile: show number */
        .gallery-num {
          font-size: 18px; font-weight: 800; color: white; opacity: 0.6;
        }
        /* desktop: decorative corner (hidden on mobile) */
        .gallery-corner-decor {
          display: none;
          width: 32px; height: 32px;
          border-top: 2px solid rgba(255,255,255,0.5);
          border-right: 2px solid rgba(255,255,255,0.5);
          border-radius: 0 8px 0 0;
          align-self: flex-start;
          margin-left: auto;
        }

        /* ══════════════ VALUES ══════════════ */
        .values-section { background: var(--bg-page); }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .value-card {
          position: relative; background: var(--bg-card);
          border-radius: 12px; padding: 8px 8px 10px;
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border-card);
          overflow: hidden; animation: fadeUp 0.5s ease both;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .value-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.18); }
        .value-top-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
        }
        .value-icon-wrap {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.18);
        }
        .value-title {
          font-size: clamp(10px, 2vw, 13px); font-weight: 700;
          color: var(--text-heading); margin: 0 0 3px;
        }
        .value-desc {
          font-size: clamp(9px, 1.8vw, 11px); color: var(--text-muted); line-height: 1.5; margin: 0;
        }

        /* ══════════════ TESTIMONIALS ══════════════ */
        .testimonials-section { background: var(--bg-section-alt); }
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .testimonial-card {
          background: var(--bg-card); border-radius: 16px; overflow: hidden;
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border-card);
          animation: fadeUp 0.5s ease both;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex; flex-direction: column;
        }
        .testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.2); }
        .testimonial-top-bar {
          height: 4px;
          background: linear-gradient(90deg, #1B8BBE, #ED1C24, #1B8BBE);
          flex-shrink: 0;
        }
        .testimonial-body { padding: 14px 14px 12px; flex: 1; }
        .testimonial-stars { display: flex; gap: 3px; margin-bottom: 8px; }

        /* show/hide based on breakpoint */
        .desktop-stars { display: none; }
        .mobile-stars  { display: flex; }
        .desktop-loc   { display: none; }
        .mobile-loc    { display: flex; align-items: center; gap: 3px; }

        .testimonial-text {
          font-size: clamp(11px, 2vw, 13px); color: var(--text-body);
          line-height: 1.6; font-style: italic; margin: 0;
        }
        .testimonial-author {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 12px;
          border-top: 1px solid var(--border-author);
          background: var(--bg-author);
          flex-shrink: 0;
        }
        .testimonial-avatar-wrap { position: relative; flex-shrink: 0; }
        .testimonial-avatar {
          width: 32px; height: 32px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(27,139,190,0.25);
        }
        .testimonial-online {
          position: absolute; bottom: 1px; right: 1px;
          width: 8px; height: 8px; background: #22c55e;
          border-radius: 50%; border: 2px solid var(--online-border);
        }
        .testimonial-name {
          font-size: clamp(11px, 2vw, 13px); font-weight: 800; color: var(--text-heading);
        }
        .testimonial-loc {
          font-size: 9px; color: var(--text-label); margin-top: 2px;
        }

        /* ══════════════ ANIMATIONS ══════════════ */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        /* ══════════════════════════════════════════
           DESKTOP OVERRIDES (≥ 768px)
           → Stats: large gradient icon boxes (code 2)
           → Story: side-by-side 2-col
           → Gallery: 4-col
           → Values: 4-col, larger padding
           → Testimonials: 4-col, larger padding, Heart icons
        ══════════════════════════════════════════ */
        @media (min-width: 768px) {
          /* Hero */
          .hero-section { padding: 96px 16px 112px; }
          .hero-dot-pattern { display: block; }
          .hero-blur-1 { width: 480px; height: 480px; }
          .hero-blur-2 { width: 420px; height: 420px; }

          /* Stats */
          .stats-section { padding: 0 16px; margin-top: -48px; }
          .stats-inner   { border-radius: 28px; }
          .stat-card     { padding: 28px 16px; }
          /* switch to desktop icon style */
          .stat-icon-desktop {
            display: flex;
            width: 56px; height: 56px; border-radius: 16px;
            align-items: center; justify-content: center;
            margin: 0 auto 14px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.18);
            transition: transform 0.3s;
          }
          .stat-card:hover .stat-icon-desktop { transform: scale(1.1); }
          .stat-icon-mobile { display: none; }
          .stat-value { font-size: clamp(1.6rem, 3vw, 2.2rem); }
          .stat-label { font-size: 13px; }

          /* Section padding */
          .section-pad { padding: 80px 16px; }
          .section-header-center { margin-bottom: 48px; }

          /* Story: 2 cols */
          .story-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 48px;
          }
          .story-image-wrap { aspect-ratio: 1/1; border-radius: 28px; }

          /* Gallery: 4 cols */
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .gallery-item { border-radius: 24px; }
          .gallery-corner-decor { display: block; }

          /* Values: 4 cols, bigger cards */
          .values-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .value-card { padding: 28px 24px 32px; border-radius: 24px; }
          .value-icon-wrap { width: 52px; height: 52px; border-radius: 14px; margin-bottom: 18px; }
          .value-title { font-size: 17px; margin-bottom: 10px; }
          .value-desc  { font-size: 13px; }

          /* Testimonials: 4 cols, Heart icons */
          .testimonials-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .testimonial-card { border-radius: 24px; }
          .testimonial-body { padding: 24px 24px 20px; }
          .desktop-stars { display: flex; }
          .mobile-stars  { display: none; }
          .desktop-loc   { display: block; }
          .mobile-loc    { display: none; }
          .testimonial-avatar { width: 48px; height: 48px; }
          .testimonial-author { padding: 16px 20px; }
          .testimonial-name { font-size: 14px; }
          .testimonial-loc  { font-size: 12px; }
          .testimonial-text { font-size: 13px; }
        }

        /* ══════════════ MOBILE FINE-TUNING ══════════════ */
        @media (max-width: 480px) {
          .hero-section  { padding: 48px 4px 56px; }
          .stats-section { padding: 0 2px; }
          .stats-inner   { border-radius: 12px; }
          .stat-card     { padding: 8px 1px; }
          .stat-icon-mobile { width: 26px; height: 26px; border-radius: 6px; }
          .stat-icon-mobile svg { width: 12px; height: 12px; }
          .stat-value { font-size: 0.8rem; }
          .stat-label { font-size: 7px; }
          .section-pad   { padding: 32px 4px; }
          .gallery-grid  { gap: 4px; }
          .gallery-item  { border-radius: 10px; }
          .gallery-num   { font-size: 16px; }
          .values-grid   { gap: 4px; }
          .value-card    { padding: 6px 6px 8px; }
          .value-icon-wrap { width: 26px; height: 26px; }
          .value-icon-wrap svg { width: 14px; height: 14px; }
          .testimonials-grid { gap: 6px; }
        }
      `}</style>
    </div>
  )
}

export default About