import { supabase } from '../../lib/supabase';
import type {
  ParentIntakeFormValues,
  ParentReferralInsertPayload,
} from './types';
import type { IntakeLanguage } from '../../i18n/parentIntakeTranslations';

export async function createParentReferral(
  values: ParentIntakeFormValues,
  selectedLanguage: IntakeLanguage,
): Promise<void> {
  const payload: ParentReferralInsertPayload = {
    child_first_name: values.child_first_name,
    child_last_name: values.child_last_name,
    child_dob: values.child_dob,
    caregiver_full_name: values.caregiver_full_name,
    caregiver_phone: values.caregiver_phone,
    caregiver_email: values.caregiver_email,
    preferred_office: values.preferred_office,
    preferred_language: values.preferred_language,
    insurance: values.insurance,
    secondary_insurance: values.secondary_insurance,
    autism_diagnosis: values.autism_diagnosis,
    attends_school: values.attends_school,
    has_iep: values.has_iep,
    referral_reason: values.referral_reason,
    best_contact_method: values.best_contact_method,
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
