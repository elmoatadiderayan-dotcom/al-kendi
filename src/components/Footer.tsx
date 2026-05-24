import { GraduationCap, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="ajk-footer" className="bg-slate-950 text-slate-400 font-sans border-t border-sky-950/60 pt-16 pb-8 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("accueil")}>
              <div className="p-2 bg-sky-500/10 border border-sky-500/20 rounded-xl text-sky-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-sans font-bold text-lg text-white tracking-tight block">
                  AJK <span className="text-sky-400 text-sm font-medium">Al Kendi</span>
                </span>
                <p className="text-[9px] font-mono text-slate-500 tracking-wider">
                  ASSOCIATION DES JEUNES
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
              L’Association des Jeunes Al Kendi (AJK) est l'organisation officielle qui dynamise le BTS Al Kendi en guidant les étudiants vers l’employabilité et l’innovation.
            </p>

            <span className="inline-block text-xs text-sky-400 italic font-mono border-l-2 border-sky-500 pl-3">
              “Investir dans la jeunesse, c’est investir dans l’avenir”
            </span>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate("accueil")} className="hover:text-sky-400 transition-colors">
                  Page d'accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("presentation")} className="hover:text-sky-400 transition-colors">
                  Présentation de l'AJK
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("mission-vision")} className="hover:text-sky-400 transition-colors">
                  Missions et Vision
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("activites")} className="hover:text-sky-450 transition-colors">
                  Nos Activités de l’année
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("filieres")} className="hover:text-sky-400 transition-colors">
                  Les Filières d'Enseignement
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("sponsoring")} className="hover:text-sky-400 transition-colors">
                  Devenir Sponsor
                </button>
              </li>
            </ul>
          </div>

          {/* Practical info block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Secrétariat & Campus
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                <span>BTS Al Kendi, 45 Rue de l'Orientation, 69003 Lyon</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-500 shrink-0" />
                <span>contact@ajk-alkendi.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-500 shrink-0" />
                <span>+33 4 72 81 90 22</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-slate-900" />

        {/* Footnote layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <p id="ajk-copyright">© 2026 Association des Jeunes Al Kendi. Tous droits réservés.</p>
            <p className="text-[10px] mt-0.5">Visuel agréé par la Direction du BTS Al Kendi.</p>
          </div>

          {/* Scroll Up button */}
          <button
            id="scroll-to-top"
            onClick={scrollUp}
            className="p-3 bg-slate-900 hover:bg-sky-500/10 text-slate-400 hover:text-sky-400 border border-slate-900 hover:border-sky-500/30 rounded-xl transition-all shadow-md flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span>Haut de page</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
