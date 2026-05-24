import { useState, FormEvent } from "react";
import { SPONSORING_PACKS } from "../data";
import { Award, ShieldAlert, Crown, Check, CheckCircle2, ShieldCheck, Mail, ArrowRight, HelpCircle, LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldAlert,
  Crown,
};

export default function Sponsoring() {
  const [selectedPack, setSelectedPack] = useState<string>("Pack Silver");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [sponsorCompany, setSponsorCompany] = useState("");

  const comparisonTable = [
    { benefit: "Logo sur le site web officiel l'AJK", bronze: true, silver: true, gold: true },
    { benefit: "Mention spéciale lors des Hackathons", bronze: true, silver: true, gold: true },
    { benefit: "Accès à la CVthèque des étudiants", bronze: "Basique", silver: "Avancé", gold: "Premium" },
    { benefit: "Kakémonos & Imprimés promotionnels", bronze: false, silver: true, gold: true },
    { benefit: "Stand physique d'exposition lors des Forums", bronze: false, silver: true, gold: true },
    { benefit: "Proposer de cas d'étude réel au Challenge", bronze: false, silver: true, gold: true },
    { benefit: "Intervention clé / Keynote (15 min) en direct", bronze: false, silver: false, gold: true },
    { benefit: "Statut privilège de Membre d'Élite du jury", bronze: false, silver: false, gold: true },
  ];

  const handleSponsorSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!sponsorEmail || !sponsorCompany) return;
    setSuccessMsg(true);

    const mailtoSubject = encodeURIComponent(`Demande de Sponsoring — ${selectedPack}`);
    const mailtoBody = encodeURIComponent(
      `Bonjour l'AJK,\n\nNotre entreprise ${sponsorCompany} souhaite souscrire au :\n👉 ${selectedPack}\n\nEmail de contact de l'entreprise : ${sponsorEmail}\n\nMerci de reprendre contact avec nous afin de finaliser le partenariat.\n\nCordialement.`
    );

    setTimeout(() => {
      window.location.href = `mailto:association.des.jeunes.alkendi@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSuccessMsg(false);
      setIsFormModalOpen(false);
      setSponsorEmail("");
      setSponsorCompany("");
    }, 1200);
  };

  return (
    <section
      id="sponsoring"
      className="py-20 bg-white relative overflow-hidden text-slate-900 border-t border-slate-100"
      style={{ perspective: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase block">
            Devenir Partenaire
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Soutenir la Jeunesse & l’Innovation
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 font-sans max-w-xl mx-auto pt-1">
            Associez l’image de votre entreprise à l’excellence du BTS Al Kendi. Recrutez nos meilleurs talents de DIA, DAI et CG en soutenant nos initiatives de terrain.
          </p>
        </motion.div>

        {/* 3 Columns Sponsoring Packs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SPONSORING_PACKS.map((pack, idx) => {
            const Icon = iconMap[pack.iconName] || Award;
            const isSelected = selectedPack === pack.name;

            return (
              <motion.div
                key={pack.name}
                id={`sponsor-pack-${pack.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedPack(pack.name)}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: pack.name === "Pack Bronze" ? -6 : pack.name === "Pack Gold" ? 6 : 0,
                  rotateX: -3,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(0,0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className={`rounded-3xl border p-8 flex flex-col justify-between cursor-pointer transition-all relative ${
                  isSelected
                    ? "border-sky-550 bg-sky-950/5 shadow-xl ring-2 ring-sky-400/20"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Ribbon Tag */}
                {pack.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-white bg-sky-650 rounded-full shadow-sm">
                    RECOMMANDÉ
                  </span>
                )}

                {/* Sponsoring Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-slate-100 text-slate-700 ${isSelected ? "bg-sky-500/10 text-sky-600" : ""}`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-slate-950">
                      {pack.name}
                    </h3>
                  </div>

                  <div>
                    <span className="text-xl sm:text-2xl font-sans font-extrabold text-sky-600 tracking-tight">
                      Don de Soutien
                    </span>
                    <span className="text-xs text-slate-400 font-mono ml-1.5 block">Partenariat AJK</span>
                  </div>

                  <p className="text-xs text-slate-500 font-sans">
                    {pack.name === "Pack Bronze" && "Parfait pour soutenir nos associations locales avec une visibilité essentielle."}
                    {pack.name === "Pack Silver" && "Excellent compromis pour asseoir votre marque employeur auprès de l'école."}
                    {pack.name === "Pack Gold" && "Partenaire académique majeur avec un accès direct et privilégié à la gouvernance."}
                  </p>

                  <div className="h-[1px] w-full bg-slate-100" />

                  {/* Benefit list list */}
                  <ul className="space-y-3 pt-2">
                    {pack.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4">
                  <button
                    id={`btn-choose-${pack.name.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPack(pack.name);
                      setIsFormModalOpen(true);
                    }}
                    className={`w-full py-3 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider transition-all ${
                      isSelected
                        ? "bg-slate-950 hover:bg-slate-900 text-white shadow"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Choisir ce pack
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Side-by-Side Comparison Grid */}
        <div className="hidden md:block rounded-3xl border border-slate-200/80 bg-slate-50 p-8 space-y-6">
          <div className="text-left">
            <h3 className="text-lg font-sans font-bold text-slate-950">
              Tableau comparatif des privilèges
            </h3>
            <p className="text-xs text-slate-500">
              Comparez les fonctionnalités et la visibilité associées à chaque pack de partenariat de l'AJK.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table id="sponsoring-comparison-table" className="w-full text-left font-sans border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-500">
                  <th className="pb-3 w-1/2">Privilèges Sponsoring</th>
                  <th className="pb-3 text-center">Pack Bronze</th>
                  <th className="pb-3 text-center">Pack Silver</th>
                  <th className="pb-3 text-center bg-sky-50 text-sky-650 rounded-t-xl">Pack Gold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-100/55 transition-colors">
                    <td className="py-3 font-medium text-slate-705">{row.benefit}</td>
                    
                    {/* Bronze col */}
                    <td className="py-3 text-center">
                      {typeof row.bronze === "boolean" ? (
                        row.bronze ? <CheckCircle2 className="h-4 w-4 text-slate-400 mx-auto" /> : <span className="text-slate-350">—</span>
                      ) : (
                        <span className="font-mono text-[10px] text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">{row.bronze}</span>
                      )}
                    </td>

                    {/* Silver col */}
                    <td className="py-3 text-center">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? <ShieldCheck className="h-4 w-4 text-sky-500 mx-auto" /> : <span className="text-slate-350">—</span>
                      ) : (
                        <span className="font-mono text-[10px] text-sky-650 bg-sky-100 px-2 py-0.5 rounded font-semibold">{row.silver}</span>
                      )}
                    </td>

                    {/* Gold col */}
                    <td className="py-3 text-center bg-sky-50/50">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? <Crown className="h-4 w-4 text-amber-500 mx-auto animate-pulse" /> : <span className="text-slate-350">—</span>
                      ) : (
                        <span className="font-mono text-[10px] text-sky-700 bg-sky-100 border border-sky-305 px-2 py-0.5 rounded font-bold">{row.gold}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Sponsor Application */}
        {isFormModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div id="sponsor-form-modal" className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-6 border border-slate-150 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sky-500" />
                  <h3 className="font-sans font-bold text-slate-950">Option de Sponsoring</h3>
                </div>
                <button
                  id="close-sponsor-modal"
                  onClick={() => setIsFormModalOpen(false)}
                  className="text-slate-400 hover:text-slate-650 text-xs font-mono px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded"
                >
                  Fermer
                </button>
              </div>

              {!successMsg ? (
                <form onSubmit={handleSponsorSubmit} className="space-y-4 text-left">
                  <p className="text-xs text-slate-500">
                    Vous avez sélectionné le <span className="font-bold text-slate-800">{selectedPack}</span>. Renseignez ces champs pour que notre Bureau d'Association reprenne contact.
                  </p>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Nom de l'entreprise</label>
                    <input
                      id="sponsor-input-company"
                      type="text"
                      required
                      value={sponsorCompany}
                      onChange={(e) => setSponsorCompany(e.target.value)}
                      placeholder="Ex: Al Kendi Corp"
                      className="w-full text-xs font-sans px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Adresse Email pro</label>
                    <input
                      id="sponsor-input-email"
                      type="email"
                      required
                      value={sponsorEmail}
                      onChange={(e) => setSponsorEmail(e.target.value)}
                      placeholder="Ex: rh@alkendicorp.fr"
                      className="w-full text-xs font-sans px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <button
                    id="submit-sponsor-form"
                    type="submit"
                    className="w-full py-3 bg-sky-550 hover:bg-sky-650 text-white font-sans font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>Envoyer ma demande de sponsoring</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                <div id="sponsor-form-success" className="text-center py-6 space-y-4">
                  <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full w-fit mx-auto">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-950">Demande enregistrée !</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Merci à l'entreprise <span className="font-semibold text-slate-900">{sponsorCompany}</span>. Notre secrétaire va vous recontacter par email en moins de 24 heures.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
