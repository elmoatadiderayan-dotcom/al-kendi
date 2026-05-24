import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, ChevronDown, Check, CornerDownLeft, RefreshCw, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      parts: [
        {
          text: "Bonjour ! Je suis l'assistant d'Intelligence Artificielle de l'AJK. Je peux vous renseigner sur nos filières (DIA, DAI, CG), nos événements, notre bureau ou encore le sponsoring de l'association. Comment puis-je vous aider aujourd'hui ?",
        },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom whenever messages list update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const presetQuestions = [
    { label: "🎓 Filières du BTS", text: "Pouvez-vous me présenter les filières DIA, DAI et CG de l'AJK ?" },
    { label: "🤝 Devenir Sponsor", text: "Comment fonctionne le sponsoring et quels sont les dons de soutien ?" },
    { label: "📅 Événements 2026", text: "Quels sont les prochains événements marquants de l'AJK ?" },
    { label: "📞 Email / Contacts", text: "Quels sont vos contacts officiels et e-mail de correspondance ?" },
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    // Append user message
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", parts: [{ text: textToSend }] },
    ];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    try {
      // Send API request and parse standard JSON array structure
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Erreur de connexion avec l'IA");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: data.text || "Désolé, je rencontre une petite difficulté pour formuler ma réponse." }] },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Oups ! Je ne parviens pas à joindre mes modules d'Intelligence Artificielle. Vérifiez votre connexion ou retentez dans un instant." }],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        role: "model",
        parts: [
          {
            text: "Historique réinitialisé ! Que puis-je faire pour vous aujourd'hui sur le BTS Al Kendi ?",
          },
        ],
      },
    ]);
  };

  // Basic Markdown text formatting helper to deal with bold text and lists beautifully
  const renderMessageContent = (text: string) => {
    return text.split("\n").map((line, idx) => {
      // Bullet list items
      if (line.trim().startsWith("- ")) {
        const remaining = line.replace(/^\s*-\s+/, "");
        return (
          <li key={idx} className="ml-4 list-disc mt-1 text-xs text-slate-700 leading-relaxed font-sans">
            {renderBoldText(remaining)}
          </li>
        );
      }
      // Numbered list items
      if (/^\s*\d+\.\s+/.test(line)) {
        const remaining = line.replace(/^\s*\d+\.\s+/, "");
        const num = line.match(/^\s*(\d+)/)?.[1] || "1";
        return (
          <li key={idx} className="ml-4 list-decimal mt-1 text-xs text-slate-700 leading-relaxed font-sans">
            <span className="font-semibold text-sky-600 mr-1">{num}.</span>
            {renderBoldText(remaining)}
          </li>
        );
      }
      // Standard Paragraph
      return (
        <p key={idx} className="mt-1 text-xs text-slate-800 leading-relaxed font-sans">
          {renderBoldText(line)}
        </p>
      );
    });
  };

  const renderBoldText = (input: string) => {
    const parts = input.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-slate-950">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50" style={{ perspective: 1000 }}>
        <motion.button
          id="ai-assistant-fab"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 15 }}
          whileTap={{ scale: 0.9 }}
          className={`h-14 w-14 rounded-full flex items-center justify-center shadow-2xl border cursor-pointer transition-all duration-300 relative ${
            isOpen
              ? "bg-slate-900 border-slate-750 text-white"
              : "bg-gradient-to-tr from-sky-400 to-blue-600 border-sky-400 text-white"
          }`}
          title="Consulter l'assistant IA de l'AJK"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <Bot className="h-6 w-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* Main Chat Window Sidebar / Drawers */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[92%] sm:w-[420px] h-[550px] bg-white rounded-3xl border border-slate-200/80 shadow-3xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header branding */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex items-center justify-between border-b border-sky-950">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white flex items-center gap-1.5 leading-tight">
                    Assistant IA AJK
                    <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/20 px-1.5 py-0.5 rounded uppercase">
                      Gemini
                    </span>
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono block">En ligne • Connaissances 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClearHistory}
                  className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Réinitialiser la conversation"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  <ChevronDown className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Messages pane */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/65 custom-scrollbar">
              {messages.map((msg, i) => {
                const isModel = msg.role === "model";
                return (
                  <div
                    key={i}
                    className={`flex gap-3 max-w-[85%] ${
                      isModel ? "mr-auto text-left" : "ml-auto flex-row-reverse text-right"
                    }`}
                  >
                    {/* Role Icon */}
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 border shadow-sm ${
                        isModel
                          ? "bg-sky-50/80 border-sky-100 text-sky-600"
                          : "bg-slate-905 border-slate-750 text-slate-800"
                      }`}
                    >
                      {isModel ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>

                    {/* Message Bubble */}
                    <div className="space-y-1">
                      <div
                        className={`p-3 rounded-2xl border text-xs leading-relaxed ${
                          isModel
                            ? "bg-white border-slate-200 text-slate-800 shadow-sm rounded-tl-none"
                            : "bg-sky-500 border-sky-450 text-white rounded-tr-none shadow-md"
                        }`}
                      >
                        {isModel ? renderMessageContent(msg.parts[0].text) : <span className="font-sans">{msg.parts[0].text}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bot typing loader feedback */}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%] mr-auto text-left">
                  <div className="h-7 w-7 rounded-lg bg-sky-50/80 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Bot className="h-4 w-4 animate-bounce" />
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-sky-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies suggestion shortcuts */}
            {messages.length <= 2 && !isTyping && (
              <div className="p-3 bg-white border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold text-center">
                  💡 Suggestions rapides
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {presetQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q.text)}
                      className="p-2 text-left bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 rounded-xl text-[11px] font-sans font-medium transition-colors text-slate-700 cursor-pointer shadow-xs truncate block"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Input footer */}
            <form onSubmit={handleFormSubmit} className="p-3 bg-white border-t border-slate-200/80 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Discutez avec l'assistant de l'AJK..."
                className="flex-1 text-xs border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/40 text-slate-800 bg-slate-50/50"
                disabled={isTyping}
                maxLength={400}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-3.5 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white rounded-xl transition-all font-semibold flex items-center justify-center cursor-pointer shadow-md disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
