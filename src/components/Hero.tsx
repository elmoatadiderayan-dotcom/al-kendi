import { ArrowRight, ChevronDown, CheckCircle, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../assets/images/hero_students_1779649197508.png";

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-slate-950"
    >
      {/* Background radial and grid glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-8">
          {/* Info Left */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Promo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-sans text-xs font-semibold tracking-wide uppercase shadow"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              BDE & Association Officielle BTS Al Kendi
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-none space-y-2">
              <motion.span
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                Association des Jeunes
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 font-extrabold"
              >
                Al Kendi (AJK)
              </motion.span>
            </h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 font-sans max-w-2xl font-light italic border-l-3 border-sky-400 pl-4 py-1"
            >
              “Investir dans la jeunesse, c’est investir dans l’avenir”
            </motion.p>

            {/* Description brief */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl font-normal"
            >
              L’AJK unit les talents des filières Intelligence Artificielle (DIA), Applications 
              Informatiques (DAI), et Comptabilité &amp; Gestion (CG) du BTS Al Kendi. Ensemble, 
              nous bâtissons un avenir d’innovation, de professionnalisme et d'excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="hero-cta-discover"
                onClick={onDiscoverClick}
                className="group px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-sans font-medium rounded-xl text-sm transition-all shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                Découvrir l'association
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => {
                  const target = document.getElementById("contact");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-sans font-medium rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
              >
                Nous contacter
              </button>
            </motion.div>

            {/* Feature lists badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 text-[11px] font-mono tracking-wider text-slate-500 max-w-md border-t border-slate-900"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                <span>DIA / APPRENTISSAGE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                <span>DAI / CODING LABS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                <span>CG / COMPTA STRAT</span>
              </div>
            </motion.div>
          </div>

          {/* Illustration Section Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Visual Frame */}
            <motion.div 
              whileHover={{ 
                scale: 1.04, 
                rotateY: 12, 
                rotateX: -8, 
                z: 60,
                boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.15)",
                transition: { duration: 0.3 } 
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl p-3 bg-slate-900/60 border border-sky-950/40 shadow-2xl overflow-hidden group cursor-pointer"
            >
              {/* Corner tech marks */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-sky-500 opacity-60" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-sky-500 opacity-60" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-sky-500 opacity-60" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-sky-500 opacity-60" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="Association des Jeunes Al Kendi - Students and Technology"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating academic overlay widget */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-slate-900/90 backdrop-blur border border-sky-500/20 rounded-xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-sky-400" />
                    <span className="text-xs text-white font-sans font-medium">BTS Al Kendi Campus</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    AJK Actif (2026)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Background design accents */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full border border-sky-500/20 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-indigo-500/10 animate-bounce pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Down Chevron Anchor click */}
      <div className="w-full flex justify-center pb-6">
        <button
          id="scroll-to-presentation"
          onClick={onDiscoverClick}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-sky-500/10 text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-sky-400/30 transition-all cursor-pointer shadow-md animate-bounce"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
