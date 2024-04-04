import { FaTrophy, FaHandshake } from 'react-icons/fa';
import * as marketingStyles from '~/styles/marketing.css';
import PricingPlan from '~/components/marketing/PricingPlan';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';

const PRICING_PLANS = [
  {
    id: 'p1',
    title: 'Basic',
    price: 'Free forever',
    perks: ['1 User', 'Up to 100 expenses/year', 'Basic analytics'],
    icon: FaHandshake
  },
  {
    id: 'p2',
    title: 'Pro',
    price: '$9.99/month',
    perks: ['Unlimited Users', 'Unlimited expenses/year', 'Detailed analytics'],
    icon: FaTrophy
  },
];

export default function PricingPage() {
  return (
    <main id="pricing">
      <MainHeader />
      <h2>Great Product, Simple Pricing</h2>
      <ol id="pricing-plans">
        {PRICING_PLANS.map((plan) => (
          <li key={plan.id} className="plan">
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}

export function loader({ request }) {
  /* console.log('In the pricing loader'); */
  return getUserFromSession(request);
}

export function links() {
  const rv = [{ rel: 'stylesheet', href: marketingStyles }];
  return rv;
}

export function headers({}) {
  /* console.log('In expenses.headers()'); */
  return {
    'Cache-Control': 'max-age=3600'
  }
}

export function meta() {
  return [{
    title: 'Pricing',
    description: 'See our pricing plans.'
  }] 
}

export const handle = { disableJS: true };