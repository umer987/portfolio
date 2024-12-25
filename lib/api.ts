import { Product, ShippingRate, TrackingInfo } from './types';
import { mockProducts, mockShippingRates, mockTrackingInfo } from './mock-data';

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
}

export async function getProduct(slug: string): Promise<Product> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const product = mockProducts.find(p => p.slug === slug);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

export async function getShippingRates(zipCode: string): Promise<ShippingRate[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockShippingRates;
}

export async function getTrackingInfo(trackingId: string): Promise<TrackingInfo> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockTrackingInfo;
}