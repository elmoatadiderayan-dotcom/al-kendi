import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ajkLogo from "../assets/images/regenerated_image_1779662384829.jpg";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", id: "accueil" },
    { label: "Présentation", id: "presentation" },
    { label: "Missions & Vision", id: "mission-vision" },
    { label: "Activités", id: "activites" },
    { label: "Nos Filières", id: "filieres" },
    { label: "Événements", id: "evenements" },
    { label: "Sponsoring", id: "sponsoring" },
    { label: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="ajk-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-sky-950/40 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            id="ajk-brand"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleItemClick("accueil")}
          >
            <div className="h-10 w-10 flex items-center justify-center bg-sky-500/10 border border-sky-450/40 rounded-xl overflow-hidden group-hover:bg-sky-500/20 transition-all">
              <img 
                src={ajkLogo} 
                alt="AJK Logo" 
                className="h-full w-full object-cover group-hover:scale-110 transition-transform" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-lg text-white tracking-tight">
                  AJK <span className="text-sky-400 text-sm font-medium">Al Kendi</span>
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-wider">
                ASSOCIATION DES JEUNES
              </p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-2 rounded-lg font-sans text-sm font-medium transition-all relative ${
                  activeSection === item.id
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-sky-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Sponsoring Button badge */}
          <div className="hidden lg:block">
            <button
              id="cta-nav-sponsor"
              onClick={() => handleItemClick("sponsoring")}
              className="flex items-center gap-1.5 px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-400/30 hover:border-sky-400/60 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Nous soutenir <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-slate-900 border-b border-sky-950/60"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 shadow-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-sans text-base font-medium flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-sky-500/10 text-sky-400 border-l-4 border-sky-400 pl-3"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </button>
              ))}

              <div className="pt-4 px-2">
                <button
                  id="mobile-cta-sponsor"
                  onClick={() => handleItemClick("sponsoring")}
                  className="w-full text-center py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-sans font-semibold rounded-xl text-sm transition-all shadow-md shadow-sky-500/15"
                >
                  Devenir Sponsor de l'AJK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
