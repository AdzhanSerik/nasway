
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FactItem {
  title: string;
  description: string;
  icon: string;
}

export interface HealthRisk {
  name: string;
  severity: 'high' | 'medium' | 'low';
  details: string;
}
