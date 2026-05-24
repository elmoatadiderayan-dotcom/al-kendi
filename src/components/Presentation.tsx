import { GraduationCap, Trophy, Users, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Presentation() {
  const achievements = [
    {
      icon: Users,
      title: "Communauté Unie",
      description: "+250 étudiants réunis au sein d’un réseau solidaire reliant DIA, DAI, et CG.",
      color: "text-blue-600 bg-blue-100 dark:bg-blue-950/40 dark:text-blue-300"
    },
    {
      icon: Trophy,
      title: "Clubs & Innovations",
      description: "6 clubs thématiques dédiés au développement technologique, à la compta et au parrainage.",
      color: "text-sky-600 bg-sky-100 dark:bg-sky-950/40 dark:text-sky-300"
    },
    {
      icon: HeartHandshake,
      title: "Partenariats Pro",
      description: "Des dizaines d’entreprises locales partenaires pour proposer des stages de fin d'études.",
      color: "text-indigo-600 bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300"
    }
  ];

  return (
    <section
      id="presentation"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative subtle vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Section Left: Interactive Text Card with viewport scroll-in */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase block">
                Qui sommes-nous ?
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
                Le cœur battant du{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 font-extrabold">
                  BTS Al Kendi
                </span>
              </h2>
            </div>

            <p className="text-slate-700 leading-relaxed font-sans text-base">
              L’<strong>Association des Jeunes Al Kendi (AJK)</strong> est l'organisation officielle du BTS Al Kendi. Notre mission est d’amener votre cursus au-delà des salles de classe en transformant la théorie académique en expérience de terrain enrichissante.
            </p>

            <p className="text-slate-600 leading-relaxed font-sans text-sm">
              Que vous soyez passionnés par les algorithmes prédictifs en <strong>DIA</strong>, le développement web et mobile en <strong>DAI</strong>, ou l’analyse des flux financiers en <strong>Comptabilité et Gestion (CG)</strong>, l’AJK est le tremplin pour libérer votre potentiel et mener des projets concrets.
            </p>

            {/* Inner quote box with perspective scaling */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative"
            >
              <span className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-100 rounded-full">
                Le Mot du Bureau
              </span>
              <p className="text-xs text-slate-500 italic pt-2">
                &ldquo;Notre association ne se contente pas d'organiser des événements. Elle tisse un pont solide destiné à pérenniser l'échange, l'ambition professionnelle et la solidarité.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Section Right: Value cards and grid metrics with staggered 3D entering */}
          <div className="lg:col-span-6 space-y-6" style={{ perspective: 1000 }}>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    id={`value-card-${index}`}
                    initial={{ opacity: 0, x: 40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.03, 
                      rotateY: 6, 
                      rotateX: -2,
                      z: 20, 
                      transition: { duration: 0.2 } 
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4 cursor-pointer"
                  >
                    <div className={`p-3.5 rounded-xl ${item.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-slate-950 text-base">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-sans mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Micro banner pointing to AJK's core values */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-sky-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold leading-none">Rôle central d'AJK</h4>
                  <p className="text-[10px] text-slate-300 mt-1">Soutenu par la Direction et les Enseignants du BTS</p>
                </div>
              </div>
              <span className="text-[10px] bg-sky-500/10 border border-sky-400/30 text-sky-450 px-2 py-1 rounded font-mono font-semibold">
                AGRÉÉ AJK
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
