import IllustrationPage from '@/components/illustration/IllustrationPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illustration — Portfolio',
  description: 'Illustration styles and portfolio.',
};

export default function Page() {
  return <IllustrationPage />;
}
