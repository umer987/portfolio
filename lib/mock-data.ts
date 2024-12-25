export const mockProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 299.99,
    stock: 15,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'],
    category: 'Electronics',
    slug: 'premium-wireless-headphones'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    price: 199.99,
    stock: 8,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'],
    category: 'Wearables',
    slug: 'smart-fitness-watch'
  },
  {
    id: '3',
    name: 'Professional Camera Kit',
    description: 'Complete camera kit with advanced features for professional photography.',
    price: 1299.99,
    stock: 5,
    images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80'],
    category: 'Photography',
    slug: 'professional-camera-kit'
  }
];

export const mockShippingRates = [
  {
    id: 'rate1',
    carrier: 'Express Shipping',
    service: 'Next Day Delivery',
    rate: 24.99,
    estimatedDays: 1
  },
  {
    id: 'rate2',
    carrier: 'Standard Shipping',
    service: 'Ground Transport',
    rate: 9.99,
    estimatedDays: 3
  },
  {
    id: 'rate3',
    carrier: 'Economy Shipping',
    service: 'Standard Mail',
    rate: 4.99,
    estimatedDays: 5
  }
];

export const mockTrackingInfo = {
  status: 'In Transit',
  location: 'Distribution Center, Atlanta, GA',
  timestamp: new Date().toISOString(),
  estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString()
};