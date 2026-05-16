import { CommissionType } from '@/types/commission';

export const allCommissions: CommissionType[] = [];

export function getCommissionBySlug(slug: string): CommissionType | undefined {
  return allCommissions.find((c) => c.slug === slug);
}
