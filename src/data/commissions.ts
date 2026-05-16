import { CommissionType } from '@/types/commission';
import { animationCommission } from './animation';

export const allCommissions: CommissionType[] = [
  animationCommission,
];

// Helper: look up by slug (used by dynamic pages)
export function getCommissionBySlug(slug: string): CommissionType | undefined {
  return allCommissions.find((c) => c.slug === slug);
}
