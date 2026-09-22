import IllustrationPage from '@/components/illustration/IllustrationPage';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Illustration — Portfolio',
  description: 'Illustration styles and portfolio.',
};

export const viewport: Viewport = {
  themeColor: '#c7bdb4',
  colorScheme: 'light',
};

export default function Page() {
  return <IllustrationPage />;
}
