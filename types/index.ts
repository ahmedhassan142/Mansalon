export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
}

export interface Booking {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceId: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}