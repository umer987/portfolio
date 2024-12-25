'use client';

import { useState, useEffect } from 'react';
import { getTrackingInfo } from '@/lib/api';
import { TrackingInfo } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

interface TrackingModalProps {
  trackingId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function TrackingModal({ trackingId, isOpen, onClose }: TrackingModalProps) {
  const [tracking, setTracking] = useState<TrackingInfo | null>(null);

  useEffect(() => {
    if (isOpen && trackingId) {
      getTrackingInfo(trackingId).then(setTracking);
    }
  }, [isOpen, trackingId]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Tracking Information
          </DialogTitle>
        </DialogHeader>
        
        {tracking && (
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="font-semibold">Status: {tracking.status}</p>
              <p className="text-sm text-muted-foreground">
                Last Location: {tracking.location}
              </p>
              <p className="text-sm text-muted-foreground">
                Last Update: {new Date(tracking.timestamp).toLocaleString()}
              </p>
              <p className="text-sm font-medium mt-2">
                Estimated Delivery: {new Date(tracking.estimatedDelivery).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}