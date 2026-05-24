import { useState } from "react";
import { ACTIVITIES } from "../data";
import { Code, Presentation, Cpu, Brain, Users, Heart, Sparkles, SlidersHorizontal, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Icon mapper for dynamic string rendering
const iconMap: Record<string, LucideIcon> = {
  Code,
  Presentation,
  Cpu,
  Brain,
  Users,
  Heart,
};

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  // Dynamically extract categories
  const categories = ["Tous", ...Array.from(new Set(ACTIVITIES.map((act) => act.category)))];

  const filteredActivities = selectedCategory === "Tous"
    ? ACTIVITIES
    : ACTIVITIES.filter((act) => act.category === selectedCategory);

  return (
    <section
      id="activites"
      className="py-20 bg-white relative overflow-hidden text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-2 max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase block">
              Ce que nous faisons
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
              Des activités riches pour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 font-extrabold">
                bâtir l’excellence
              </span>
            </h2>
            <p className="text-sm text-slate-500 font-sans">
              Clubs techniques, rendez-vous d'orientation et événements d'intégration : nous animons la vie étudiante du BTS Al Kendi tout au long de l'année scolaire.
            </p>
          </div>

          {/* Interactive filter badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0 border-b border-slate-100 md:border-none">
            <SlidersHorizontal className="h-4 w-4 text-slate-400 shrink-0 hidden sm:block" />
            <div className="flex gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid List with Motion entry */}
        <motion.div
          id="activities-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((act) => {
              const IconComponent = iconMap[act.iconName] || Code;
              return (
                <motion.div
                  key={act.id}
                  id={`activity-card-${act.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-sky-300/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header: Category Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-sky-650 px-2 py-0.5 rounded bg-sky-50 border border-sky-100/60">
                        {act.category}
                      </span>
                      <div className="p-2.5 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-sans font-bold text-slate-950 group-hover:text-sky-700 transition-colors">
                        {act.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                        {act.description}
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic footnote indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-sky-400" />
                      Inclus au BTS Al Kendi
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform group-hover:text-sky-500">
                      En savoir plus &rarr;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Action point banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50/50 border border-sky-100 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            Vous souhaitez proposer une nouvelle initiative ou animer un atelier thématique ? Nous sommes preneurs ! Rejoignez notre équipe de coordinateurs.
          </p>
          <button
            id="activity-btn-suggest"
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-3 inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-350 shadow-sm text-xs font-semibold px-4 py-1.5 rounded-lg font-sans transition-all"
          >
            Suggérer une activité
          </button>
        </div>

      </div>
    </section>
  );
}
