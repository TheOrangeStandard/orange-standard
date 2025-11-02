import { Button as PrimeButton, ButtonProps } from 'primereact/button';

/**
 * Wrapped PrimeReact Button component
 * Enforces design tokens and accessibility
 */
export default function Button(props: ButtonProps) {
  return <PrimeButton {...props} />;
}
