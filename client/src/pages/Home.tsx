import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  ChevronRight,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5511943702370";
const INSTAGRAM = "https://www.instagram.com/ateliepriscilaviana";

const portfolio = [
  {
    title: "Bolos de celebração",
    eyebrow: "Bolos",
    image: "/manus-storage/atelie-bolos_4027c525.jpg",
    size: "tall",
    description: "Acabamentos delicados para marcar o seu momento.",
  },
  {
    title: "Tortas com frutas frescas",
    eyebrow: "Tortas",
    image: "/manus-storage/atelie-tortas_f9a73b54.jpg",
    size: "wide",
    description: "Leveza, cor e sabor em cada fatia.",
  },
  {
    title: "Salgados para compartilhar",
    eyebrow: "Salgados",
    image: "/manus-storage/atelie-salgados_3ef31c53.jpg",
    size: "wide",
    description: "Mini lanches e salgados para encontros especiais.",
  },
  {
    title: "Pudim de leite",
    eyebrow: "Doces",
    image: "/manus-storage/atelie-pudim_0ee550a8.jpg",
    size: "tall",
    description: "Aquele clássico cremoso que conquista na primeira colherada.",
  },
];

const services = [
  {
    number: "01",
    icon: CakeSlice,
    title: "Bolos deliciosos",
    description: "Bolos para celebrar com beleza, recheio generoso e um acabamento que faz parte da experiência.",
    message: "Olá! Gostaria de saber mais sobre os bolos do Ateliê.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Tortas & doces",
    description: "Tortas, pudins e doces pensados para adoçar encontros — do jeito que a ocasião pede.",
    message: "Olá! Quero conhecer as opções de tortas e doces.",
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Salgados & mini lanches",
    description: "Salgados fritos na hora e mini lanches para compor reuniões, eventos e celebrações.",
    message: "Olá! Tenho interesse em salgados e mini lanches.",
  },
];

const highlights = [
  { icon: Heart, label: "Feito com afeto", text: "Cuidado visível nos detalhes, do preparo à entrega." },
  { icon: ChefHat, label: "Artesanal", text: "Sabor e acabamento que valorizam o feito à mão." },
  { icon: Sparkles, label: "Sob encomenda", text: "Uma conversa próxima para entender a sua ocasião." },
];

function whatsappLink(message?: string) {
  return message ? `${WHATSAPP}?text=${encodeURIComponent(message)}` : WHATSAPP;
}

function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ""}`} role="img" aria-label={`${alt} — imagem indisponível`}>
        <CakeSlice size={34} strokeWidth={1.2} />
        <span>Ateliê Priscila Viana</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<(typeof portfolio)[number] | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMobile} aria-label="Ateliê Priscila Viana — início">
            <img className="brand-mark" src="/logo-pv.jpg" alt="" />
            <span className="brand-name">
              Ateliê <strong>Priscila Viana</strong>
            </span>
          </a>

          <button className="menu-toggle" type="button" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMobile}>O ateliê</a>
            <a href="#portfolio" onClick={closeMobile}>Portfólio</a>
            <a href="#servicos" onClick={closeMobile}>Encomendas</a>
            <a href="#contato" onClick={closeMobile}>Entrar em contato</a>
            <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMobile}>
              <MessageCircle size={16} /> Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
            onLoadedMetadata={(event) => {
              event.currentTarget.muted = true;
              void event.currentTarget.play().catch(() => undefined);
            }}
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663911480749/ISBXTJlJFLosiPnl.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <p className="eyebrow"><span className="eyebrow-line" /> Confeitaria artesanal</p>
              <h1>Doces que criam <em>memórias.</em></h1>
              <p className="hero-lede">Bolos, tortas, salgados e detalhes que transformam encontros em ocasiões para guardar.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} /> Falar no WhatsApp
                </a>
                <a className="button button-quiet" href="#portfolio">Conhecer nosso trabalho <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-note"><span className="note-dot" /> Encomendas para momentos que pedem algo especial</div>
            </div>

          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Rolar para a seção sobre"><span>role para descobrir</span><ArrowDownRight size={15} /></a>
        </section>

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span>Para celebrar</span><i>✦</i><span>Para compartilhar</span><i>✦</i><span>Para criar memória</span><i>✦</i><span>Com sabor e intenção</span>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="section-label"><span>01</span><span className="label-rule" /><span>o ateliê</span></div>
            <div className="about-copy">
              <p className="eyebrow">Uma mesa posta para a vida real</p>
              <h2>O sabor começa antes da primeira <em>mordida.</em></h2>
              <p className="body-large">No Ateliê Priscila Viana, a confeitaria artesanal encontra o cuidado com cada ocasião. São bolos, tortas, doces, salgados e mini lanches para celebrar, receber e compartilhar.</p>
              <p className="body-copy">Tudo começa com uma conversa: o que você está planejando, para quem é e como quer que esse momento seja lembrado. O resultado é uma encomenda com beleza, sabor e atenção aos detalhes.</p>
              <a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">Conhecer nosso Instagram <ArrowUpRight size={17} /></a>
            </div>
            <div className="about-card">
              <div className="about-card-top"><img className="mini-monogram" src="/logo-pv.jpg" alt="" /><span>Ateliê<br />Priscila Viana</span></div>
              <div className="about-card-quote">“Doces que criam memórias”</div>
              <div className="about-card-bottom"><span>Confeitaria artesanal</span><span>♡</span></div>
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="section-label"><span>02</span><span className="label-rule" /><span>portfólio</span></div>
                <h2>Feito para <em>encantar.</em></h2>
              </div>
              <p className="section-intro">Uma seleção de referências visuais para apresentar os sabores e formatos do ateliê. Para ver os trabalhos reais e mais recentes, visite o Instagram.</p>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((item, index) => (
                <button className={`portfolio-item ${item.size} reveal-up`} key={item.title} type="button" onClick={() => setActiveImage(item)} style={{ animationDelay: `${index * 80}ms` }}>
                  <ImageWithFallback src={item.image} alt={item.title} className="portfolio-image" />
                  <span className="portfolio-overlay" />
                  <span className="portfolio-content"><small>{item.eyebrow}</small><strong>{item.title}</strong><span>{item.description}</span></span>
                  <span className="portfolio-plus"><Plus size={18} /></span>
                </button>
              ))}
            </div>
            <div className="portfolio-footer"><span>Veja o portfólio completo</span><a className="round-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Abrir o Instagram do Ateliê Priscila Viana"><Instagram size={18} /></a></div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-heading-row services-heading">
              <div>
                <div className="section-label"><span>03</span><span className="label-rule" /><span>encomendas</span></div>
                <h2>O que vai para a<br /><em>sua mesa.</em></h2>
              </div>
              <div className="services-heading-aside"><p>Do café especial ao evento que reúne todo mundo, cada pedido é pensado para chegar bonito, gostoso e no tempo certo.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowUpRight size={17} /></a></div>
            </div>
            <div className="service-list">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><Icon size={25} strokeWidth={1.3} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsappLink(service.message)} target="_blank" rel="noreferrer" className="service-link">Tenho interesse <ChevronRight size={16} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="highlight-section">
          <div className="container">
            <div className="highlight-intro"><p className="eyebrow">O jeito do ateliê</p><h2>Pequenos detalhes.<br /><em>Grande diferença.</em></h2></div>
            <div className="highlight-list">
              {highlights.map((item) => { const Icon = item.icon; return <div className="highlight-item" key={item.label}><Icon size={24} strokeWidth={1.25} /><div><h3>{item.label}</h3><p>{item.text}</p></div></div>; })}
            </div>
          </div>
        </section>

        <section className="instagram-section">
          <div className="container instagram-card">
            <div className="instagram-orbit orbit-one" /><div className="instagram-orbit orbit-two" />
            <div className="instagram-icon"><Instagram size={24} /></div>
            <div><p className="eyebrow eyebrow-light">Por trás de cada encomenda</p><h2>Veja mais do nosso<br /><em>trabalho no Instagram.</em></h2></div>
            <a className="button button-light" href={INSTAGRAM} target="_blank" rel="noreferrer">@ateliepriscilaviana <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="container cta-inner">
            <p className="eyebrow">Para a próxima celebração</p>
            <h2>Vamos criar algo <em>especial?</em></h2>
            <p>Conte um pouco do que você está imaginando. O Ateliê Priscila Viana está a uma mensagem de distância.</p>
            <div className="cta-actions"><a className="button button-primary button-large" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar com o Ateliê no WhatsApp <ArrowUpRight size={17} /></a><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Entrar em contato <ChevronRight size={17} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#inicio"><img className="brand-mark" src="/logo-pv.jpg" alt="" /><span className="brand-name">Ateliê <strong>Priscila Viana</strong></span></a>
          <p>Confeitaria artesanal para<br />momentos que merecem sabor.</p>
          <div className="footer-links"><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={16} /> @ateliepriscilaviana</a><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16} /> (11) 94370-2370</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ateliê Priscila Viana</span><span>Feito com cuidado, detalhe por detalhe.</span></div>
      </footer>

      {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Visualização de ${activeImage.title}`} onClick={() => setActiveImage(null)}>
        <button className="lightbox-close" type="button" aria-label="Fechar imagem" onClick={() => setActiveImage(null)}><X size={22} /></button>
        <div className="lightbox-content" onClick={(event) => event.stopPropagation()}><ImageWithFallback src={activeImage.image} alt={activeImage.title} className="lightbox-image" /><div className="lightbox-caption"><span>{activeImage.eyebrow}</span><strong>{activeImage.title}</strong><p>{activeImage.description}</p></div></div>
      </div>}
    </div>
  );
}
