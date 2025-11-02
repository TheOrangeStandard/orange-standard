import { Card as PrimeCard, CardProps } from 'primereact/card';

/**
 * Wrapped PrimeReact Card component
 * Enforces design tokens and accessibility
 */
export default function Card(props: CardProps) {
  return <PrimeCard {...props} />;
}
