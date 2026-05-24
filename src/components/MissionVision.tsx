import { BookOpen, Target, Sparkles, HeartHandshake, Eye, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export default function MissionVision() {
  const missions = [
    {
      icon: BookOpen,
      title: "Soutenir les étudiants",
      description: "Tutorat de mentorat par les pairs, ateliers d'entraide avant les examens nationaux et accompagnement personnalisé pour faciliter l’intégration de chacun.",
      benefits: ["Parrainage d'étudiants", "Entraide inter-filières", "Préparation aux épreuves"]
    },
    {
      icon: Target,
      title: "Développer les compétences",
      description: "Favoriser la maîtrise des soft skills (leadership, prise de parole, gestion du stress) pour propulser l’employabilité de nos futurs lauréats.",
      benefits: ["Prise de parole en public", "Gestion de projet Agile", "Networking professionnel"]
    },
    {
      icon: Sparkles,
      title: "Encourager l’innovation",
      description: "Stimuler l'esprit d'initiative à travers la conception de projets techniques d'envergure, axés sur l'intelligence artificielle et la digitalisation.",
      benefits: ["Incubateur de projets", "Accès aux Techlabs", "Culture d'entreprenariat"]
    },
    {
      icon: HeartHandshake,
      title: "Favoriser la solidarité",
      description: "Initier des actions de bénévolat et soutenir des causes caritatives locales pour forger des citoyens engagés et éthiques au sein de la société.",
      benefits: ["Actions éco-bénévoles", "Partages solidaires", "Tutorat grand public"]
    }
  ];

  return (
    <section
      id="mission-vision"
      className="py-20 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Decorative radial gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Nos Fondements
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Quelle est notre Boussole d’Action ?
          </h2>
          <div className="h-1 w-20 bg-sky-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-sans pt-1">
            Découvrez comment l’AJK structure ses efforts pour accompagner chaque élève vers la réussite, avec une vision claire tournée vers l’excellence académique collective.
          </p>
        </div>

        {/* Grid Layout: Missions & Vision Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: 4 Mission Points */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-sans font-bold text-slate-100 flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-sky-450 rounded-full" />
              Notre Mission Quotidienne
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((mission, idx) => {
                const Icon = mission.icon;
                return (
                  <div
                    key={idx}
                    id={`mission-card-${idx}`}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3 bg-sky-500/10 border border-sky-500/20 text-sky-450 rounded-xl w-fit mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-sans font-bold text-lg text-white mb-2">
                        {mission.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                        {mission.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-wrap gap-1.5">
                      {mission.benefits.map((bName, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[9px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {bName}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Vision Focus */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-sky-950 border border-sky-500/20 shadow-xl relative overflow-hidden space-y-6">
              {/* Abs decoration */}
              <div className="absolute top-0 right-0 p-10 bg-sky-400/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-400/10 text-sky-400 rounded-xl">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-sky-400 uppercase block">
                    Horizon d'avenir
                  </span>
                  <h3 className="text-xl font-sans font-bold text-white leading-none mt-1">
                    Notre Vision
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-[2px] w-full bg-slate-850 relative">
                  <div className="absolute left-0 top-0 h-full w-12 bg-sky-400" />
                </div>

                <p className="text-slate-200 text-base leading-relaxed font-sans italic">
                  &ldquo;Former une génération de jeunes responsables, compétents et innovants, capables de relever les défis de demain.&rdquo;
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  AJK s'engage à outiller chaque étudiant des compétences de pointe pour en 
                  faire des leaders technologiques (DIA, DAI) et de gestion (CG) avertis, investis de fortes valeurs d'entraide et guidés par l'esprit d'innovation constante.
                </p>
              </div>

              {/* Action Point Tag */}
              <div className="pt-4 border-t border-sky-900/40 flex items-center gap-3">
                <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg shrink-0">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">Créer de la valeur</h4>
                  <p className="text-[10px] text-slate-400">Projets, challenges, réseautage</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
