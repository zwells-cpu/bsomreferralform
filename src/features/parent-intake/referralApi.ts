import { supabase } from '../../lib/supabase';
import type {
  ParentIntakeFormValues,
  ParentIntakePayload,
} from './types';
import type { IntakeLanguage } from '../../i18n/parentIntakeTranslations';

export async function createParentReferral(
  values: ParentIntakeFormValues,
  selectedLanguage: IntakeLanguage,
): Promise<void> {
  const payload: ParentIntakePayload = {
    ...values,
    referral_source: 'Parent iPad Intake',
    current_stage: 'New Referral',
    needs_review: true,
    submitted_language: selectedLanguage,
  };

  const { error } = await supabase.from('referrals').insert(payload);
  if (error) {
    throw error;
  }
}
