import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy load Gemini AI Client
  let aiClient: GoogleGenAI | null = null;
  function getAiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required");
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API Route for the AI Assistant Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Le tableau de messages est requis." });
      }

      const client = getAiClient();

      // Official knowledge context for AJK
      const systemInstruction = `Tu es l'assistant de conversation officiel (IA) de l'Association des Jeunes Al Kendi (AJK) de l'établissement d'excellence BTS Al Kendi.
Ton objectif est de fournir des informations complètes, précises et engageantes aux visiteurs sur notre vie étudiante, nos filières, nos activités et notre sponsoring. Sois chaleureux, humain, dynamique et professionnel.

Voici les informations officielles de référence sur l'AJK :
- **Email de contact** : association.des.jeunes.alkendi@gmail.com (tous les formulaires de contact redirigent directement l'utilisateur vers cet e-mail de manière automatisée).
- **Téléphone / WhatsApp** : +212 696-270079
- **Adresse** : BTS Al Kendi, Bâtiment C - Bureau 204 (2ème Étage), Casablanca Finance City (CFC), Casablanca, Maroc
- **Notre Bureau** : Composé d'étudiants déterminés et soudés du BTS Al Kendi.

Filières d'excellence représentées à l'AJK :
1. **DIA (Développement Intelligence Artificielle)** : Machine Learning, Deep Learning, programmation Python & Big Data, traitement du langage naturel (NLP/LLMs) et éthique algorithmique.
2. **DAI (Développement Applications Informatiques)** : Conception d'applications, architectures Web/Mobile, React, Node.js, Spring Boot, bases de données relationnelles & NoSQL, pratiques DevOps & Cloud.
3. **CG (Comptabilité & Gestion)** : Métiers du chiffre, analyse financière, contrôle de gestion, fiscalité, ERP, reporting financier et digitalisation.

Nos 6 grandes catégories d'activités régulières :
1. Hackathons de l'AJK (codage intensif de 24h à 48h)
2. Conférences Inspiration (témoignages de pros de la tech et finance)
3. Ateliers & Tech Labs (montée en compétences techniques hebdomadaires)
4. Olympiades de l'IA (tournois algorithmiques ouverts aux passionnés)
5. Activités Sociales (Team Building, e-sport, sorties de promotion)
6. Événements Solidaires (mentorats scolaires, collectes alimentaires, entraide locale)

Nos Grands Événements programmés pour 2026 :
- **Al Kendi Innovation Challenge** (14 - 15 Novembre 2026) : Marathon de 48h croisant IA, Dev et Comptabilité pour imaginer des solutions concrètes pour notre panel de partenaires.
- **Pitch & Invest** (18 Décembre 2026) : Les meilleurs projets se défendent face à des alumni prestigieux et investisseurs d'élite.
- **Forum d'Orientation & Carrières** (23 Janvier 2026) : Sessions privilégiées de recrutement pour dégoter un stage, une alternance ou un CDI.
- **Data & Décision Workshop** (05 Mars 2026) : Synergie appliquée unissant IA, Dev et comptabilité analytique.

Don de Soutien & Partenariats :
Pour soutenir l'AJK, les entreprises et mécènes peuvent souscrire à nos packs de soutien sous format de "Dons de Soutien libres" (Partenariats). Les prix fixes ont été supprimés par l'association pour une démarche solidaire.
- **Pack Bronze** : Présence logo, relais d'offres de stages, accès privilégié à notre CVthèque.
- **Pack Silver** : Pack Bronze + stand d'exposition aux Forums, publication LinkedIn, soumission d'un cas d'étude pour les hackathons.
- **Pack Gold** : Pack Silver + membre majeur du jury d'examens, prise de parole (Keynote de 15 min), logo en tête d'affiche, animation de Tech Labs.

Règles de style linguistiques :
1. Réponds toujours avec professionnalisme, politesse et enthousiasme en français.
2. Utilise du Markdown structuré (listes à puces, gras) afin de rendre l'affichage impeccablement lisible.
3. Reste synthétique et n'invente jamais d'affirmations infondées.
4. Si on te pose des questions sans rapport avec l'AJK, le BTS Al Kendi ou l'informatique/gestion, ramène poliment mais habilement la discussion vers le BTS Al Kendi.`;

      const gResponse = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: messages,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.75,
        },
      });

      res.json({ text: gResponse.text });
    } catch (err: any) {
      console.error("Gemini Assistant API Error:", err);
      res.status(500).json({ error: err?.message || "Internal server error" });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server launched successfully on http://0.0.0.0:${PORT}`);
  });
}

startServer();
