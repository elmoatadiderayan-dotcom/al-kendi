import { useState } from "react";
import { FILIERES } from "../data";
import { Binary, CodeXml, TrendingUp, Check, ArrowUpRight, GraduationCap, LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, LucideIcon> = {
  Binary,
  CodeXml,
  TrendingUp,
};

export default function Filieres() {
  const [activeFiliereTab, setActiveFiliereTab] = useState<string | null>(null);

  return (
    <section
      id="filieres"
      className="py-20 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Absolute background visual blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase block">
            Notre Territoire Académique
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Les 3 Filières d’Excellence du{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 font-extrabold">
              BTS Al Kendi
            </span>
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 font-sans max-w-xl mx-auto pt-1">
            L'AJK est constituée d'étudiants issus de ces trois parcours majeurs. Le croisement de la tech, du code et de la finance fait la richesse de nos initiatives collectives.
          </p>
        </div>

        {/* 3 Columns Cards Layout with 3D tilt effects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {FILIERES.map((filiere, idx) => {
            const Icon = iconMap[filiere.iconName] || CodeXml;
            const isExpanded = activeFiliereTab === filiere.id;

            return (
              <motion.div
                key={filiere.id}
                id={`filiere-card-${filiere.id}`}
                initial={{ opacity: 0, scale: 0.92, y: 35 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: filiere.id === "dia" ? -6 : filiere.id === "cg" ? 6 : 0,
                  rotateX: -2,
                  z: 40,
                  boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.12)",
                  transition: { duration: 0.25 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all p-7 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
              >
                {/* Decorative border bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-450 opacity-80 group-hover:h-2.5 transition-all" />

                {/* Header info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-sky-700 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-120/40">
                      {filiere.shortName}
                    </span>
                    <div className="p-3 bg-sky-500/10 text-sky-650 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-slate-950 pr-4 leading-tight">
                    {filiere.title}
                  </h3>

                  <p className="text-slate-650 font-sans text-xs sm:text-sm leading-relaxed">
                    {filiere.description}
                  </p>
                </div>

                {/* Modules list (Checklist) */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3.5">
                  <h4 className="text-[11px] font-mono font-bold tracking-wider text-slate-550 uppercase flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5 text-sky-500" />
                    Matières Clés & Ateliers AJK :
                  </h4>
                  <ul className="space-y-2">
                    {filiere.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer CTA */}
                <div className="mt-8 pt-4 flex items-center justify-between">
                  <button
                    id={`filiere-btn-learn-${filiere.id}`}
                    onClick={() => setActiveFiliereTab(isExpanded ? null : filiere.id)}
                    className="text-xs font-semibold text-slate-800 hover:text-sky-600 transition-colors flex items-center gap-1"
                  >
                    <span>{isExpanded ? "Fermer les détails" : "En savoir plus sur le BTS"}</span>
                    <ArrowUpRight className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-45" : ""}`} />
                  </button>
                  <span className="text-[10px] font-mono text-slate-400">Bac+2</span>
                </div>

                {/* Accordion expand with details of career pathways */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-sky-100 bg-sky-50/40 p-3 rounded-2xl text-[11px] text-slate-600 font-sans space-y-1"
                  >
                    <p className="font-semibold text-sky-850">Débouchés professionnels post BTS :</p>
                    <p>{filiere.id === "dia" ? "Data Analyst, Administrateur Bases de données, Développeur IA Junior, Concepteur de chatbots, Consultant data." : 
                        filiere.id === "dai" ? "Développeur Full-Stack, Concepteur d'applications mobiles, Développeur d'intégration Cloud, Analyste software." : 
                        "Comptable d'entreprise, Contrôleur de gestion junior, Analyste financier, Conseiller fiscal, Gestionnaire de paie."}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Synergetic notice footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-sans italic">
            * Toutes les trois filières travaillent main dans la main lors de l'organisation annuelle des challenges entrepreneuriaux.
          </p>
        </div>

      </div>
    </section>
  );
}
