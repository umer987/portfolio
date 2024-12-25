'use client';

import { useState } from 'react';
import { getShippingRates } from '@/lib/api';
import { ShippingRate } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ShippingCalculatorProps {
  productId: string;
}

export function ShippingCalculator({ productId }: ShippingCalculatorProps) {
  const [zipCode, setZipCode] = useState('');
  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [loading, setLoading] = useState(false);

  const calculateShipping = async () => {
    if (!zipCode) return;
    
    setLoading(true);
    try {
      const shippingRates = await getShippingRates(zipCode);
      setRates(shippingRates);
    } catch (error) {
      console.error('Error fetching shipping rates:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Calculate Shipping</h3>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="max-w-[200px]"
        />
        <Button onClick={calculateShipping} disabled={loading}>
          {loading ? 'Calculating...' : 'Calculate'}
        </Button>
      </div>
      
      {rates.length > 0 && (
        <div className="space-y-2">
          {rates.map((rate) => (
            <Card key={rate.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{rate.carrier}</p>
                  <p className="text-sm text-muted-foreground">{rate.service}</p>
                  <p className="text-sm">Estimated delivery: {rate.estimatedDays} days</p>
                </div>
                <p className="font-bold">${rate.rate.toFixed(2)}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}