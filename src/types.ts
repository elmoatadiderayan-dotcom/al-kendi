export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface Filiere {
  id: string;
  title: string;
  shortName: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  badge: string;
  objective: string;
  iconName: string;
}

export interface SponsorPackage {
  name: string;
  price: string;
  color: string;
  textColor: string;
  borderColor: string;
  popular: boolean;
  iconName: string;
  benefits: string[];
}
