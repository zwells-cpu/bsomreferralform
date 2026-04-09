import type { IntakeLanguage } from '../../i18n/parentIntakeTranslations';

export type YesNoUnknown = 'yes' | 'no' | 'unknown';

export type ParentIntakeFormValues = {
  child_first_name: string;
  child_last_name: string;
  child_dob: string;
  caregiver_full_name: string;
  caregiver_phone: string;
  caregiver_email: string;
  preferred_office: string;
  preferred_language: string;
  insurance: string;
  secondary_insurance: string;
  autism_diagnosis: YesNoUnknown;
  attends_school: YesNoUnknown;
  has_iep: YesNoUnknown;
  referral_reason: string;
  best_contact_method: string;
  additional_notes: string;
};

export const defaultParentIntakeValues: ParentIntakeFormValues = {
  child_first_name: '',
  child_last_name: '',
  child_dob: '',
  caregiver_full_name: '',
  caregiver_phone: '',
  caregiver_email: '',
  preferred_office: '',
  preferred_language: '',
  insurance: '',
  secondary_insurance: '',
  autism_diagnosis: 'unknown',
  attends_school: 'unknown',
  has_iep: 'unknown',
  referral_reason: '',
  best_contact_method: '',
  additional_notes: '',
};

export const requiredFields: Array<keyof ParentIntakeFormValues> = [
  'child_first_name',
  'child_last_name',
  'child_dob',
  'caregiver_full_name',
  'caregiver_phone',
  'caregiver_email',
  'preferred_office',
  'preferred_language',
  'insurance',
  'referral_reason',
  'best_contact_method',
];

export type ParentIntakePayload = ParentIntakeFormValues & {
  referral_source: 'Parent iPad Intake';
  current_stage: 'New Referral';
  needs_review: boolean;
  submitted_language: IntakeLanguage;
};
