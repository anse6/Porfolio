import { Routes, Route, Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import image1 from "./assets/anse.jpeg";

// Toutes les images
const IMAGES = {
  logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/tchio_anse_vernel_portfolio_logo.png",
  portrait:  image1 ,
  hero: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/hero_background_developer_workspace.png",
  map: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/map_location_placeholder.png",
  projects: [
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/telecom_management_system.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/tk_data_inventory_platform.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/kliva_rgpd_compliance_system.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/hotel_revolution_saas_platform.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/yaya_automobile_vehicle_management.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/data_analytics_dashboard_solution.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/tk_data_management_system.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/kliva_banking_compliance.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/yaya_automobile_rental.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/hotel_revolution_saas.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/hotel_revolution_saas.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1453328/img/data_analytics_dashboard_solution.png",
  ],
};

const projects = [
  {
    title: "Gestion des ventes et locations de voiture",
    desc: "Système complet de gestion des appels entrants/sortants",
    img: 0,
  },
  {
    title: "TK-DATA Gestion",
    desc: "Plateforme de gestion de stock et ventes en temps réel",
    img: 1,
  },
  {
    title: "Kliva RGPD",
    desc: "Solution bancaire de conformité RGPD et audits",
    img: 2,
  },
  {
    title: "HotelRevolution SaaS",
    desc: "Gestion hôtelière complète (réservations, facturation, etc.)",
    img: 3,
  },
  {
    title: "YAYA AUTOMOBILE",
    desc: "Location & vente de véhicules avec suivi contrats",
    img: 4,
  },
  {
    title: "Data Analytics Dashboard",
    desc: "Tableaux de bord interactifs et reporting avancé",
    img: 5,
  },
  {
    title: "TK-DATA Management",
    desc: "ERP complet pour magasins et entrepôts",
    img: 6,
  },
  {
    title: "Kliva Banking Compliance",
    desc: "Outil de conformité bancaire et protection données",
    img: 7,
  },
  
  {
    title: "HotelRevolution Pro",
    desc: "Version premium avec analytics intégrés",
    img: 9,
  },
  {
    title: "Hotel Management Suite",
    desc: "Suite complète pour chaînes hôtelières",
    img: 10,
  },
  
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      {/* TOUT LE CSS TAILWIND + ANIMATIONS INTÉGRÉ DIRECTEMENT */}
      <style>{`
        @import "tailwindcss";
        @import "tailwindcss-animate";

        :root {
          --color-background: hsl(0, 0%, 100%);
          --color-foreground: hsl(0, 0%, 10%);
          --color-primary: hsl(270, 80%, 52%);
          --color-primary-hover: hsl(270, 80%, 42%);
          --color-muted: hsl(210, 10%, 70%);
          --color-muted-foreground: hsl(210, 10%, 40%);
          --color-border: hsl(210, 10%, 70%);
          --radius: 0.5rem;
        }
        .dark { --color-background: hsl(210, 10%, 18%); --color-foreground: hsl(0, 0%, 95%); }

        .container { @apply max-w-7xl mx-auto; }
        .btn-primary { @apply inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-10 py-5 text-white font-semibold text-lg transition-all hover:bg-[var(--color-primary-hover)] hover:-translate-y-1 hover:shadow-2xl active:translate-y-0; }
        .glass-effect { @apply bg-[var(--color-background)]/80 backdrop-blur-md border border-[var(--color-muted)]/20 rounded-2xl shadow-2xl; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src={IMAGES.logo} alt="Logo" className="h-10" />
            </Link>
            <div className="hidden lg:flex items-center gap-12">
              <Link
                to="/"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium text-lg transition"
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium text-lg transition"
              >
                À propos
              </Link>
              <Link
                to="/portfolio"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium text-lg transition"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium text-lg transition"
              >
                Contact
              </Link>
            </div>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-[var(--color-border)]/50">
              <div className="flex flex-col gap-6 text-center">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                >
                  Accueil
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                >
                  À propos
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

const Home = () => (
  <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-in-up opacity-0">
          TCHIO ANSE VERNEL
        </h1>
        <p className="text-2xl md:text-4xl mb-12 animate-fade-in-up animation-delay-200 opacity-0">
          Développeur Full-Stack | React • TypeScript • Python • Flutter
        </p>
        <Link
          to="/portfolio"
          className="btn-primary animate-fade-in-up animation-delay-400 opacity-0"
        >
          Voir mon portfolio
        </Link>
      </div>
    </section>

    {/* Expertise */}
    <section className="py-32 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 relative overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
          Mes Expertises
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up animation-delay-100 opacity-0 shadow-lg shadow-primary/50" />
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-20 animate-fade-in-up animation-delay-200 opacity-0">
          Des solutions technologiques de pointe pour propulser votre business
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Développement Full-Stack",
              desc: "Applications web complètes avec React, TypeScript, Python Flask et Spring Boot",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Analyse de Données",
              desc: "Tableaux de bord interactifs et insights business avec visualisations avancées",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Applications Mobiles",
              desc: "Apps iOS & Android performantes et élégantes développées avec Flutter",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((skill, i) => (
            <div
              key={i}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 150 + 300}ms` }}
            >
              {/* Bordure animée avec gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary  to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

              {/* Card principale */}
              <div className="relative glass-effect p-12 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-primary/20">
                {/* Icône avec gradient animé */}
                <div className="relative w-28 h-28 mx-auto mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}
                  ></div>
                  <div
                    className={`relative w-full h-full bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-700 shadow-xl p-6`}
                  >
                    {/* IMAGE au lieu de span */}
                    <img
                      src={skill.icon}
                      alt={`${skill.title} icon`}
                      className="w-16 h-16 object-contain brightness-0 invert"
                    />
                  </div>
                </div>

                
                <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-500">
                  {skill.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {skill.desc}
                </p>

                {/* Ligne décorative en bas */}
                <div className="mt-8 w-0 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-primary/50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge de confiance */}
        <div
          className="mt-24 inline-flex items-center gap-4 glass-effect px-10 py-6 rounded-full border border-primary/20 shadow-xl animate-fade-in-up opacity-0"
          style={{ animationDelay: "800ms" }}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
          <span className="text-lg font-semibold">
            +10 projets livrés avec succès
          </span>
        </div>
      </div>
    </section>
    {/* Projets en vedette */}
    <section className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 animate-fade-in-up opacity-0">
          Projets en Vedette
        </h2>
        <div className="space-y-40 max-w-7xl mx-auto">
          {projects.slice(0, 4).map((p, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              } opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${i * 300}ms` }}
            >
              <div className={i % 2 === 0 ? "" : "lg:col-start-2"}>
                <img
                  src={IMAGES.projects[p.img]}
                  alt={p.title}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-4xl font-bold">{p.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <Link to="/portfolio" className="btn-primary inline-block">
                  Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Call To Action Premium */}
    <section className="py-32 relative overflow-hidden">
      {/* Background avec effet parallaxe */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-600/5 to-primary/5"></div>
      <div className="absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="relative max-w-5xl mx-auto">
          {/* Bordure animée externe */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary  to-primary rounded-[2.5rem] opacity-75 blur-2xl animate-pulse"></div>

          {/* Card principale */}
          <div className="relative glass-effect p-16 md:p-20 rounded-[2.5rem] border-2 border-primary/20 shadow-2xl">
            {/* Badge en haut */}
            <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-8 border border-primary/30 animate-fade-in-up opacity-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Disponible pour de nouveaux projets
              </span>
            </div>
            {/* Titre principal */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up animation-delay-100 opacity-0 leading-tight">
              Prêt à{" "}
              <span className="bg-black bg-clip-text text-transparent">
                transformer
              </span>{" "}
              votre idée en réalité ?
            </h2>
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200 opacity-0 leading-relaxed">
              Discutons de votre projet et créons ensemble une solution digitale
              qui dépasse vos attentes
            </p>
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-300 opacity-0">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-purple-600 px-12 py-6 rounded-2xl text-white font-bold text-xl shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">Me contacter maintenant</span>
                <svg
                  className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 glass-effect px-12 py-6 rounded-2xl font-bold text-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:-translate-y-2 transition-all duration-500"
              >
                Voir mes réalisations
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </Link>
            </div>
            {/* Informations de contact rapides */}
            <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border/50 animate-fade-in-up animation-delay-400 opacity-0">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "ansevernel@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "+237 695 683 485",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  label: "Réponse",
                  value: "Sous 24h",
                  gradient: "from-yellow-500 to-orange-500",
                },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:-translate-y-1"
                >
                  {/* Icône avec fond gradient */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <div className="text-white">{contact.icon}</div>
                  </div>

                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {contact.label}
                  </p>
                  <p className="text-sm font-bold text-center">
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const About = () => (
  <section className="py-32 min-h-screen bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
    {/* Effets de fond décoratifs */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* En-tête de section */}
      <div className="text-center mb-24">
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up animation-delay-200 opacity-0 shadow-lg shadow-primary/50"></div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300 opacity-0">
          Passionné par la création de solutions digitales innovantes
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
        {/* Image de profil avec effets */}
        <div className="group relative animate-fade-in-up animation-delay-400 opacity-0">
          {/* Bordure animée gradient */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-[3rem] opacity-75 blur-2xl group-hover:opacity-100 group-hover:blur-3xl transition-all duration-700"></div>

          {/* Cadre de l'image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-[2.5rem] opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700">
              <img
                src={image1}
                alt="Portrait TCHIO ANSE VERNEL"
                className="w-full h-auto rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay avec info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-2">TCHIO ANSE VERNEL</p>
                  <p className="text-lg">Développeur Full-Stack 🚀</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badge flottant */}
          <div
            className="absolute -top-6 -right-6 glass-effect px-6 py-3 rounded-2xl border-2 border-primary/30 shadow-2xl animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-xs text-muted-foreground">Projets</p>
                <p className="text-xl font-bold text-primary">+10</p>
              </div>
            </div>
          </div>

          {/* Badge expérience */}
          <div className="absolute -bottom-6 -left-6 glass-effect px-6 py-3 rounded-2xl border-2 border-primary/30 shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="text-xs text-muted-foreground">Disponible</p>
                <p className="text-sm font-bold text-green-500">En ligne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu texte */}
        <div className="space-y-8">
          {/* Nom et titre */}
          <div className="animate-fade-in-up animation-delay-500 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-purple-600 bg-clip-text text-transparent">
              TCHIO ANSE VERNEL
            </h2>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                🇨🇲 Cameroun
              </span>
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                💼 Freelance
              </span>
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20 text-green-600">
                ✅ Disponible
              </span>
            </div>
          </div>

          {/* Description principale */}
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-2xl border-l-4 border-primary animate-fade-in-up animation-delay-600 opacity-0 hover:shadow-xl hover:-translate-x-2 transition-all duration-500">
              <p className="text-xl leading-relaxed">
                Développeur full-stack{" "}
                <span className="font-bold text-primary">passionné</span> basé
                au Cameroun, je transforme vos idées en solutions digitales{" "}
                <span className="font-bold text-primary">
                  modernes, performantes et évolutives
                </span>
                .
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl border-l-4 border-purple-600 animate-fade-in-up animation-delay-700 opacity-0 hover:shadow-xl hover:-translate-x-2 transition-all duration-500">
              <p className="text-xl leading-relaxed">
                Spécialisé en{" "}
                <span className="font-bold text-purple-600">
                  React, TypeScript, Python Flask, Java Spring Boot, Laravel et
                  Flutter
                </span>
                , j'ai livré{" "}
                <span className="font-bold text-purple-600">
                  plus de 10 projets professionnels
                </span>{" "}
                utilisés quotidiennement par des entreprises.
              </p>
            </div>
          </div>

          {/* Statistiques */}

          {/* Compétences techniques avec VRAIES ICÔNES */}
          <div className="animate-fade-in-up animation-delay-900 opacity-0">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                💻
              </span>
              Stack Technique
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "React",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  name: "TypeScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  name: "Python",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                  color: "from-blue-500 to-yellow-500",
                },
                {
                  name: "Flutter",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                  color: "from-sky-400 to-blue-600",
                },
                {
                  name: "Spring Boot",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
                  color: "from-green-500 to-green-700",
                },
                {
                  name: "Laravel",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                  color: "from-red-500 to-red-700",
                },
              ].map((skill, i) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Gradient de fond */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                  ></div>

                  {/* Card principale */}
                  <div className="relative glass-effect p-4 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="flex items-center gap-3">
                      {/* Logo réel du langage */}
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            // Fallback en cas d'erreur de chargement
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <span className="font-bold text-lg group-hover:text-primary transition-colors duration-500">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 pt-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "1000ms" }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 bg-purple-600 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-500"
            >
              <span>Voir mes projets</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 glass-effect px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-500"
            >
              <span>Me contacter</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Section valeurs / approche */}
    </div>
  </section>
);

const Portfolio = ({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: number | null;
  setSelectedProject: (n: number | null) => void;
}) => (
  <section className="py-32 min-h-screen">
    <div className="container mx-auto px-6">
      <h1 className="text-6xl font-bold text-center mb-32 animate-fade-in-up opacity-0">
        Tous mes projets
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(i)}
            className="glass-effect rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-6 transition-all duration-700 group opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={IMAGES.projects[p.img]}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
              <p className="text-lg text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Modal */}
    {selectedProject !== null && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        onClick={() => setSelectedProject(null)}
      >
        <div
          className="glass-effect max-w-5xl w-full rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-8 right-8 z-10 bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/40 transition"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <img
            src={IMAGES.projects[projects[selectedProject].img]}
            alt={projects[selectedProject].title}
            className="w-full h-96 object-cover"
          />
          <div className="p-16">
            <h3 className="text-5xl font-bold mb-8">
              {projects[selectedProject].title}
            </h3>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
              {projects[selectedProject].desc}
            </p>
            <Link to="/contact" className="btn-primary text-2xl px-16 py-7">
              Discuter de ce projet
            </Link>
          </div>
        </div>
      </div>
    )}
  </section>
);

const Contact = () => (
  <section className="py-32 min-h-screen bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
    {/* Effets de fond décoratifs */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      {/* En-tête de section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100 opacity-0 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Contactez-moi
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up animation-delay-200 opacity-0 shadow-lg shadow-primary/50"></div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300 opacity-0">
          Contactez-moi directement via WhatsApp ou Email
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 max-w-6xl mx-auto">
        {/* Section Coordonnées - Maintenant à gauche */}
        <div className="space-y-8 animate-fade-in-up animation-delay-400 opacity-0">
          {/* Card coordonnées */}
          <div className="group relative">
            {/* Bordure animée gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-[2rem] opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700"></div>

            <div className="relative glass-effect p-10 rounded-[2rem] border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-700 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Mes coordonnées</h3>
                  <p className="text-sm text-muted-foreground">
                    Contactez-moi directement
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* WhatsApp - Numéro 1 */}
                <a
                  href="https://wa.me/237695683485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block p-5 rounded-2xl hover:bg-green-500/5 transition-all duration-300 border-2 border-transparent hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        WhatsApp Principal
                      </p>
                      <p className="font-bold text-xl group-hover/item:text-green-600 transition-colors">
                        +237 695 683 485
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cliquez pour discuter 💬
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-muted-foreground group-hover/item:text-green-600 group-hover/item:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </a>

                {/* WhatsApp - Numéro 2 */}
                <a
                  href="https://wa.me/237652021435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block p-5 rounded-2xl hover:bg-green-500/5 transition-all duration-300 border-2 border-transparent hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        WhatsApp Secondaire
                      </p>
                      <p className="font-bold text-xl group-hover/item:text-green-600 transition-colors">
                        +237 652 021 435
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cliquez pour discuter 💬
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-muted-foreground group-hover/item:text-green-600 group-hover/item:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:ansevernel@gmail.com?subject=Contact&body=Bonjour%20Anse,%0D%0AJe%20veux%20te%20contacter."
                  className="group/item block p-5 rounded-2xl hover:bg-blue-500/5 transition-all duration-300 border-2 border-transparent hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <p className="font-bold text-xl group-hover/item:text-blue-600 transition-colors break-all">
                        ansevernel@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cliquez pour m'envoyer un email 📧
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-muted-foreground group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </a>

                {/* Localisation */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 border-2 border-red-500/20">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Localisation
                      </p>
                      <p className="font-bold text-lg">Yaoundé, Cameroun 🇨🇲</p>
                      <p className="text-sm text-muted-foreground">
                        Afrique Centrale
                      </p>
                    </div>
                  </div>
                </div>

                {/* Temps de réponse */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-600/10 border-2 border-primary/20">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Temps de réponse
                      </p>
                      <p className="font-bold text-lg text-primary">
                        Moins de 24 heures ⚡
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte de localisation - À droite */}
        <div className="space-y-8 animate-fade-in-up animation-delay-500 opacity-0">
          <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700"></div>
            <div className="relative border-4 border-primary/20 group-hover:border-primary/40 rounded-[2rem] overflow-hidden transition-all duration-700">
              <img
                src={IMAGES.map}
                alt="Localisation Yaoundé Cameroun"
                className="w-full h-full min-h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Badge sur la carte */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-5 rounded-2xl border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                  <div>
                    <p className="text-lg font-bold text-white">
                      📍 Yaoundé, Cameroun
                    </p>
                    <p className="text-sm text-white/90">
                      Afrique Centrale • Disponible en ligne
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action supplémentaire */}
          <div className="glass-effect p-8 rounded-[2rem] border-2 border-primary/10 shadow-xl text-center">
            <div className="mb-6">
              <h4 className="text-2xl font-bold mb-3">Prêt à démarrer ?</h4>
              <p className="text-muted-foreground">
                Contactez-moi maintenant pour discuter de votre projet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/237695683485"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Discuter sur WhatsApp</span>
              </a>
              <a
                href="mailto:ansevernel@gmail.com"
                className="inline-flex items-center justify-center gap-3 glass-effect px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Envoyer un Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-muted/50 py-20 mt-40 border-t border-[var(--color-border)]/30">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center gap-10 mb-10">
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition text-3xl"
        >
          <Github className="w-10 h-10" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition text-3xl"
        >
          <Linkedin className="w-10 h-10" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition text-3xl"
        >
          <Twitter className="w-10 h-10" />
        </a>
      </div>
      <p className="text-xl text-muted-foreground">
        © 2025 TCHIO ANSE VERNEL. Tous droits réservés.
      </p>
    </div>
  </footer>
);
