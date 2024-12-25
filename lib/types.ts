export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  category: string;
  slug: string;
}

export interface ShippingRate {
  id: string;
  carrier: string;
  service: string;
  rate: number;
  estimatedDays: number;
}

export interface TrackingInfo {
  status: string;
  location: string;
  timestamp: string;
  estimatedDelivery: string;
}