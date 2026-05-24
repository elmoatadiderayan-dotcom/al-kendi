import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import MissionVision from "./components/MissionVision";
import Activities from "./components/Activities";
import Filieres from "./components/Filieres";
import Events from "./components/Events";
import Sponsoring from "./components/Sponsoring";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Modern scrollspy: Track user scroll and highlight correct nav item
  useEffect(() => {
    const sections = [
      "accueil",
      "presentation",
      "mission-vision",
      "activites",
      "filieres",
      "evenements",
      "sponsoring",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies core viewing frame
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-sky-500/35 selection:text-white antialiased">
      {/* Header element for screen-readers */}
      <header className="sr-only">
        <h1>Association des Jeunes Al Kendi - Site Officiel AJK</h1>
      </header>

      {/* Modern sticky header navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main app layers */}
      <main>
        {/* Section 1: Hero Accueil */}
        <Hero onDiscoverClick={() => handleNavigate("presentation")} />

        {/* Section 2: Présentation */}
        <Presentation />

        {/* Section 3 & 4: Mission & Vision */}
        <MissionVision />

        {/* Section 5: Activités (with filter) */}
        <Activities />

        {/* Section 6: Filières du BTS */}
        <Filieres />

        {/* Section 7: Événements (Chronological Timeline) */}
        <Events />

        {/* Section 8: Sponsoring Packages */}
        <Sponsoring />

        {/* Section 9: Contact coordinates & Interactive Form */}
        <Contact />
      </main>

      {/* Section 10: Footer & Copyright notes */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
