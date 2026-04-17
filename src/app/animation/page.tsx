import CommissionPageTemplate from '@/components/commission/CommissionPageTemplate';
import { animationCommission } from '@/data/animation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: animationCommission.seo?.title || animationCommission.name,
  description: animationCommission.seo?.description || animationCommission.description,
};

export default function AnimationPage() {
  return <CommissionPageTemplate commission={animationCommission} />;
}
