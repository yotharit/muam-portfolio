import type { Viewport } from 'next';
import AnimationPage from '@/components/animation/AnimationPage';

export const metadata = {
  title: 'Animation — Portfolio',
  description: 'Animation packages — choose your style.',
};

export const viewport: Viewport = {
  themeColor: '#ffead9',
  colorScheme: 'light',
};

export default function Page() {
  return <AnimationPage />;
}
