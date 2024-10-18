export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'Basic Plan',
    id: 'starter',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Ideal for individuals starting out.',
    features: ['Feature 1', 'Feature 2'],
    featured: false,
    priceId: { month: 'your_monthly_price_id', year: 'your_annual_price_id' },
  },
];
