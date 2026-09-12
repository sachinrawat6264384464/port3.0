export interface Project {
  id: string;
  title: string;
  category: 'Packaging' | 'Presentations' | 'Annual Reports' | 'Logos' | 'Outdoor & Print' | 'Brochures';
  subtitle: string;
  description: string;
  image: string;
  additionalImages?: string[];
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  statement: string;
  description: string;
  iconName: string;
  previewImage: string;
  features: string[];
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LogoItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

export interface ContactPerson {
  name: string;
  title: string;
  email: string;
  phone: string;
  phoneRaw: string;
}
