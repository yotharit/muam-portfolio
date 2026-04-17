import CommissionPageTemplate from '@/components/commission/CommissionPageTemplate';
import { illustrationCommission } from '@/data/illustration';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: illustrationCommission.seo?.title || illustrationCommission.name,
  description: illustrationCommission.seo?.description || illustrationCommission.description,
};

export default function IllustrationPage() {
  return <CommissionPageTemplate commission={illustrationCommission} />;
}
