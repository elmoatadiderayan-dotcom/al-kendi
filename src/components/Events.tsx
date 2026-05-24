import { EVENTS } from "../data";
import { Sparkles, Coins, Briefcase, LineChart, Calendar, Award, Target, MapPin, LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Coins,
  Briefcase,
  LineChart,
};

export default function Events() {
  return (
    <section
      id="evenements"
      className="py-20 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Decorative starry / techno vector details */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16 max-w-2xl mx-auto-left">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Agenda de l'Année
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Événements Phares de l’AJK
          </h2>
          <div className="h-1 w-20 bg-sky-450 rounded-full" />
          <p className="text-sm text-slate-400 font-sans">
            Des moments d’apprentissage, de partage et de compétition intenses où se dessinent les carrières de nos étudiants et se nouent les contacts avec les recruteurs.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-2 lg:gap-x-12 gap-y-12 before:absolute before:left-1/2 before:top-0 before:h-full before:w-[1px] before:bg-slate-800 before:hidden md:before:block">
          
          {EVENTS.map((event, index) => {
            const Icon = iconMap[event.iconName] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                id={`event-row-${event.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-12 md:mb-0 flex md:block ${
                  isEven ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Visual Timeline Core Node (Dot) */}
                <div className="absolute left-[-21px] top-6 md:left-1/2 md:translate-x-[-10px] z-20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-slate-950 border-4 border-sky-400 shadow shadow-sky-400/50" />
                </div>

                {/* Event Wrapper layout columns */}
                <div className={`w-full pl-6 md:pl-0 md:w-5/6 ${
                  isEven ? "md:ml-auto md:pr-10" : "md:mr-auto md:pl-10"
                }`}>
                  
                  {/* Event main card */}
                  <div className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-sky-500/20 transition-all shadow-md hover:shadow-lg space-y-4 group">
                    
                    {/* Header */}
                    <div className={`flex items-center gap-3 justify-between ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <span className="text-[10px] font-mono font-medium tracking-wider text-sky-400 uppercase">
                          {event.badge}
                        </span>
                      </div>
                      
                      {/* Date Badge */}
                      <span className="text-[10px] font-mono bg-slate-950 text-slate-350 px-2 py-1 rounded inline-flex items-center gap-1 border border-slate-800 shrink-0">
                        <Calendar className="h-3 w-3 text-sky-400" />
                        {event.date}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-sans font-bold text-white group-hover:text-sky-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                        {event.description}
                      </p>
                    </div>

                    <div className="h-[1px] w-full bg-slate-800" />

                    {/* Objective footnote */}
                    <div className={`flex items-start gap-2 text-left text-xs text-slate-400 bg-slate-950/40 p-3 rounded-lg border border-slate-850 ${
                      isEven ? "md:text-right md:justify-end" : ""
                    }`}>
                      <Target className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-200 block text-[11px] uppercase tracking-wider">Objectif</span>
                        <span className="text-[11px] leading-tight text-slate-400">{event.objective}</span>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className={`flex items-center gap-1.5 text-[10px] font-mono text-slate-400 pt-1 ${
                      isEven ? "md:justify-end" : ""
                    }`}>
                      <MapPin className="h-3.5 w-3.5 text-rose-500" />
                      <span>Campus BTS Al Kendi, Salle Polyvalente / Hub Tech</span>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Quick Invitation */}
        <div className="mt-16 text-center max-w-md mx-auto p-4 rounded-xl bg-sky-500/5 border border-sky-500/15">
          <p className="text-xs text-slate-400 font-sans">
            Ces événements sont ouverts en priorité aux étudiants du BTS Al Kendi et à nos entreprises partenaires.
          </p>
        </div>

      </div>
    </section>
  );
}
