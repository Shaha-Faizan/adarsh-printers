
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  basePrice: number;
  imageUrl: string;
}

export interface DesignSuggestion {
  concept: string;
  colors: string[];
  fonts: string[];
  layoutDescription: string;
}

export interface Quote {
  serviceId: string;
  quantity: number;
  isUrgent: boolean;
  total: number;
}
