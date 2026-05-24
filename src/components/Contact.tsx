import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, ChevronRight, Copy, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Email and Telephone credentials
  const contactInfo = {
    email: "association.des.jeunes.alkendi@gmail.com",
    phone: "+212 696-270079",
    address: "BTS Al Kendi, Casablanca Finance City (CFC), Casablanca, Maroc",
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Auto-transform/send message via standard mailto action
    const mailtoSubject = encodeURIComponent(subject || "Formulaire de Contact AJK — Al Kendi");
    const mailtoBody = encodeURIComponent(
      `Bonjour l'AJK,\n\nVous avez reçu un nouveau message de la part de : ${name}\nEmail de contact : ${email}\n\nMessage :\n${message}\n\nCordialement.`
    );
    
    // Simulate API submission workflow and trigger standard mail client
    setTimeout(() => {
      window.location.href = `mailto:association.des.jeunes.alkendi@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      // reset success screen after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-200/60"
      style={{ perspective: 1000 }}
    >
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high fidelity scroll in */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase block">
            Nous écrire
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Restons en Contact
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 font-sans max-w-xl mx-auto pt-1">
            Une question sur l'un de nos événements, une remarque sur nos filières, ou un projet de sponsoring ? Notre bureau de l’AJK est à votre écoute et reçoit vos courriels instantanément.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Click to Copy info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h3 className="text-xl font-sans font-bold text-slate-950 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-500 rounded-full" />
              Coordonnées de l'AJK
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Nos bureaux d'étudiants sont situés au sein même du BTS Al Kendi de Casablanca (CFC). N'hésitez pas à passer nous voir lors de nos permanences du mardi au jeudi de 12h à 14h.
            </p>

            <div className="space-y-4">
              
              {/* E-mail copy card with interactive 3D hover scale */}
              <motion.div 
                whileHover={{ scale: 1.025, rotateY: 5, translateZ: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between group cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-100/60 text-sky-600 rounded-xl">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-medium">Par Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-850 break-all">{contactInfo.email}</span>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => handleCopy(contactInfo.email, "email")}
                  className="p-2 text-slate-400 hover:text-sky-600 bg-slate-50 hover:bg-sky-55 border border-slate-100 rounded-lg group-hover:scale-105 transition-colors"
                  title="Copier l'email"
                >
                  {copiedId === "email" ? <Check className="h-4 w-4 text-emerald-500 animate-pulse" /> : <Copy className="h-4 w-4" />}
                </button>
              </motion.div>

              {/* Telephone copy card with 3D hover */}
              <motion.div 
                whileHover={{ scale: 1.025, rotateY: -5, translateZ: 10 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between group cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-100/60 text-sky-600 rounded-xl">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-medium">Téléphone Secrétariat</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{contactInfo.phone}</span>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => handleCopy(contactInfo.phone, "phone")}
                  className="p-2 text-slate-400 hover:text-sky-600 bg-slate-50 hover:bg-sky-55 border border-slate-100 rounded-lg group-hover:scale-105 transition-colors"
                  title="Copier le numéro"
                >
                  {copiedId === "phone" ? <Check className="h-4 w-4 text-emerald-500 animate-pulse" /> : <Copy className="h-4 w-4" />}
                </button>
              </motion.div>

              {/* Address card */}
              <motion.div 
                whileHover={{ scale: 1.02, translateZ: 5 }}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
              >
                <div className="p-3 bg-sky-100/60 text-sky-600 rounded-xl shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-medium">Notre Adresse</span>
                  <p className="text-xs text-slate-700 leading-snug mt-0.5">{contactInfo.address}</p>
                  <p className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 mt-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Bâtiment C - Bureau 204 (2ème Étage)
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Social networks Follow Widget without GitHub Code Lab as requested */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400">
                Suivre l'AJK sur les réseaux
              </h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-sky-600 text-xs font-medium rounded-xl font-sans inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Globe className="h-3.5 w-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-pink-600 text-xs font-medium rounded-xl font-sans inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Globe className="h-3.5 w-3.5 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form with rich 3D scroll and feedback */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <motion.div 
              whileHover={{ rotateX: 1, rotateY: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nom Complet Input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Nom Complet *</label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Rayan ElMoatadide"
                        className="w-full text-xs font-sans px-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Adresse Email *</label>
                      <input
                        id="contact-input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: rayan@gmail.com"
                        className="w-full text-xs font-sans px-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Sujet de votre message</label>
                    <input
                      id="contact-input-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Ex: Demande de renseignement sur le Hackathon"
                      className="w-full text-xs font-sans px-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50 transition-all"
                    />
                  </div>

                  {/* Message Big Textarea */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">Votre Message *</label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Bonjour, je souhaiterais savoir s'il est possible de participer à l'Innovation Challenge en étant..."
                      className="w-full text-xs font-sans px-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50 transition-all resize-none"
                    />
                  </div>

                  {/* Button Submission */}
                  <div>
                    <button
                      id="submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-sans font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le Message à l'AJK</span>
                          <Send className="h-3.5 w-3.5 text-white/80 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div id="contact-form-success" className="text-center py-10 space-y-4">
                  <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full w-fit mx-auto animate-bounce">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-sans font-bold text-slate-950">Redirection Mail client</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                      Merci <span className="font-semibold text-slate-800">{name || "visiteur"}</span> ! Votre message à destination de <span className="font-semibold text-sky-600">association.des.jeunes.alkendi@gmail.com</span> a été préparé dans votre logiciel ou application de messagerie de manière automatique.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
