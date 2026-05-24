import { Activity, Filiere, EventItem, SponsorPackage } from "./types";

export const ACTIVITIES: Activity[] = [
  {
    id: "hackathons",
    title: "Hackathons de l'AJK",
    description: "Des marathons de code intensifs de 24h ou 48h où les étudiants de DIA et DAI s'allient pour concevoir des prototypes innovants et intelligents en un temps record.",
    category: "Technologie & Innovation",
    iconName: "Code"
  },
  {
    id: "conferences",
    title: "Conférences Inspiration",
    description: "Des rencontres enrichissantes avec des professionnels du secteur de la tech, de la finance ou du management venus partager les tendances du marché de l'emploi.",
    category: "Réseau Professionnel",
    iconName: "Presentation"
  },
  {
    id: "ateliers",
    title: "Ateliers & Tech Labs",
    description: "Des sessions pratiques hebdomadaires de montée en compétences : initiation aux nouveaux frameworks web, initiation à l'IA, modélisation de données financières.",
    category: "Apprentissage Pratique",
    iconName: "Cpu"
  },
  {
    id: "olympiades_ia",
    title: "Olympiades de l'IA",
    description: "Un tournoi de programmation et de modélisation algorithmique stimulant, conçu spécifiquement pour former à l'optimisation et au machine learning moderne.",
    category: "Compétition Académique",
    iconName: "Brain"
  },
  {
    id: "activites_sociales",
    title: "Activités Sociales & Team building",
    description: "Des sorties, tournois d'e-sport et pique-niques de rentrée pour relâcher la pression, nouer des amitiés de promotion solides et consolider la cohésion d'équipe.",
    category: "Vie Étudiante",
    iconName: "Users"
  },
  {
    id: "evenements_solidaires",
    title: "Événements Solidaires",
    description: "Collectes de denrées, mentorats gratuits auprès de lycéens et actions bénévoles d'intérêt public. Nous croyons que la solidarité forge les grands esprits.",
    category: "Engagement Citoyen",
    iconName: "Heart"
  }
];

export const FILIERES: Filiere[] = [
  {
    id: "dia",
    title: "Développement Intelligence Artificielle (DIA)",
    shortName: "BTS DIA",
    description: "Une formation de pointe axée sur les technologies d'apprentissage automatique, le traitement des données et la création d'algorithmes intelligents.",
    details: [
      "Machine Learning & Deep Learning",
      "Programmation Python & Big Data",
      "Modèles de langage (LLMs) & NLP",
      "Éthique & intégration de l'IA applicative"
    ],
    iconName: "Binary"
  },
  {
    id: "dai",
    title: "Développement Applications Informatiques (DAI)",
    shortName: "BTS DAI",
    description: "La voie d'excellence pour maîtriser la conception, la programmation et le déploiement de solutions d'applications web, mobiles et d'entreprise.",
    details: [
      "Architectures Cloud & Microservices",
      "Frameworks Modernes (React, Node.js, Spring)",
      "Bases de données relationnelles & NoSQL",
      "Sécurité applicative & DevOps"
    ],
    iconName: "CodeXml"
  },
  {
    id: "cg",
    title: "Comptabilité & Gestion (CG)",
    shortName: "BTS CG",
    description: "Un parcours académique rigoureux préparant aux métiers du chiffre, du diagnostic financier, de l'audit et du pilotage de la performance d’entreprise.",
    details: [
      "Analyse financière & Contrôle de gestion",
      "Fiscalité, audit & conformité légale",
      "Outils ERP & Digitalisation comptable",
      "Stratégie de financement & Reporting"
    ],
    iconName: "TrendingUp"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "challenge",
    title: "Al Kendi Innovation Challenge",
    date: "14 - 15 Novembre 2026",
    description: "Une compétition phare où les étudiants forment des équipes pluridisciplinaires (développeurs + gestionnaires) pour créer en 48h un projet répondant à un besoin réel d'entreprise partenaire.",
    badge: "Compétition de l'Année",
    objective: "Favoriser l'esprit d'équipe et le croisement des compétences techniques et économiques.",
    iconName: "Sparkles"
  },
  {
    id: "pitch",
    title: "Pitch & Invest",
    date: "18 Décembre 2026",
    description: "Les meilleures idées issues du Challenge font face à un jury d'investisseurs et d'alumni pour obtenir un accompagnement et du sponsoring pour le déploiement de leur start-up.",
    badge: "Réseautage Élite",
    objective: "Découvrir la création d'entreprise et lever des fonds de pré-amorçage pour les meilleurs concepts.",
    iconName: "Coins"
  },
  {
    id: "forum",
    title: "Forum d'Orientation & Carrières",
    date: "23 Janvier 2026",
    description: "Rencontre exclusive entre les étudiants d'Al Kendi et les recruteurs du domaine digital et financier pour décrocher des opportunités de stage, d'alternance et de premier emploi.",
    badge: "Carrière",
    objective: "Accélérer l'insertion professionnelle et l'intégration dans le tissu économique rhônalpin.",
    iconName: "Briefcase"
  },
  {
    id: "datadec",
    title: "Data & Décision Workshop",
    date: "05 Mars 2026",
    description: "Une journée d'étude et de cas pratiques liant modélisation de données (DIA/DAI) et stratégie de trésorerie (CG). Un véritable exemple de l'interconnexion moderne de nos filières.",
    badge: "Inter-Tech Lab",
    objective: "Démontrer la puissance de la Business Intelligence alliée à la comptabilité analytique.",
    iconName: "LineChart"
  }
];

export const SPONSORING_PACKS: SponsorPackage[] = [
  {
    name: "Pack Bronze",
    price: "350 €",
    color: "bg-amber-50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200",
    textColor: "text-amber-700 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-900/50",
    popular: false,
    iconName: "Award",
    benefits: [
      "Logo sur le site officiel de l'AJK",
      "Mention spéciale lors des Hackathons",
      "Accès prioritaire à la CVthèque des étudiants",
      "Relais de vos offres de stages de fin d'année",
      "Affichage sur les brochures de l'AJK"
    ]
  },
  {
    name: "Pack Silver",
    price: "750 €",
    color: "bg-slate-50 text-slate-900 dark:bg-slate-800/50 dark:text-slate-100",
    textColor: "text-sky-600 dark:text-sky-400",
    borderColor: "border-sky-200 dark:border-sky-900/40",
    popular: true,
    iconName: "ShieldAlert",
    benefits: [
      "Tous les avantages du Pack Bronze",
      "Stand physique d'exposition lors de nos Forums",
      "Une publication dédiée sur notre compte LinkedIn",
      "Logo grand format sur les supports imprimés (Kakémonos)",
      "Possibilité de proposer un cas d'étude pour le Challenge"
    ]
  },
  {
    name: "Pack Gold",
    price: "1 500 €",
    color: "bg-cyan-950/50 text-cyan-200 border-cyan-500/30",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    popular: false,
    iconName: "Crown",
    benefits: [
      "Tous les avantages du Pack Silver",
      "Statut de Membre d'Élite du jury des Innovation Challenges",
      "Intervention clé (Keynote de 15 min) en préambule d'événement",
      "Logo de taille maximale en tête d'affiche des affiches de l'école",
      "Opportunité d'animation d'un Tech Lab par vos ingénieurs"
    ]
  }
];
