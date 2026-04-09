import { useMemo, useState } from 'react';
import {
  intakeTranslations,
  t,
  type IntakeLanguage,
  type IntakeTranslations,
} from '../../i18n/parentIntakeTranslations';
import {
  defaultParentIntakeValues,
  requiredFields,
  type ParentIntakeFormValues,
  type YesNoUnknown,
} from './types';
import { createParentReferral } from './referralApi';
import './ParentIntake.css';

type ScreenState = 'welcome' | 'form' | 'success';

function isFormValid(formValues: ParentIntakeFormValues): boolean {
  return requiredFields.every((field) => formValues[field].trim().length > 0);
}

export function ParentIntakePage(): JSX.Element {
  const [language, setLanguage] = useState<IntakeLanguage>('en');
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [values, setValues] = useState<ParentIntakeFormValues>(defaultParentIntakeValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = useMemo(() => intakeTranslations[language], [language]);

  const setField = (field: keyof ParentIntakeFormValues, value: string): void => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const resetKiosk = (): void => {
    setScreen('welcome');
    setValues(defaultParentIntakeValues);
    setIsSubmitting(false);
    setError(null);
    setLanguage('en');
  };

  const submit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (!isFormValid(values)) {
      setError(t(language, 'validationRequired'));
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createParentReferral(values, language);
      setValues(defaultParentIntakeValues);
      setScreen('success');
    } catch (submissionError) {
      const message =
        submissionError instanceof Error && submissionError.message.trim().length > 0
          ? submissionError.message
          : t(language, 'submissionError');
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (screen === 'welcome') {
    return (
      <section className="page-shell">
        <div className="kiosk-panel">
          <h1>{labels.welcomeTitle}</h1>
          <p className="lead">{labels.welcomeSubtitle}</p>
          <div className="btn-group">
            <button
              className="btn"
              type="button"
              onClick={() => {
                setLanguage('en');
                setScreen('form');
              }}
            >
              {labels.startEnglish}
            </button>
            <button
              className="btn secondary"
              type="button"
              onClick={() => {
                setLanguage('es');
                setScreen('form');
              }}
            >
              {labels.startSpanish}
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (screen === 'success') {
    return (
      <section className="page-shell">
        <div className="kiosk-panel">
          <h1>{labels.successTitle}</h1>
          <p className="lead">{labels.successMessage}</p>
          <button className="btn" type="button" onClick={resetKiosk}>
            {labels.startNewForm}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="kiosk-panel">
        <div className="header-row">
          <h1>{labels.parentIntakeTitle}</h1>
          <div className="language-pill" aria-label={labels.languageBadge}>
            {labels.languageBadge}:
            <button type="button" onClick={() => setLanguage('en')}>
              EN
            </button>
            |
            <button type="button" onClick={() => setLanguage('es')}>
              ES
            </button>
          </div>
        </div>

        <p className="lead">{labels.helperText}</p>
        {error ? <p className="error-banner">{error}</p> : null}

        <form onSubmit={submit}>
          <div className="form-grid">
            <FormInput
              label={labels.childFirstName}
              required
              value={values.child_first_name}
              onChange={(value) => setField('child_first_name', value)}
            />
            <FormInput
              label={labels.childLastName}
              required
              value={values.child_last_name}
              onChange={(value) => setField('child_last_name', value)}
            />
            <FormInput
              label={labels.childDob}
              required
              inputType="date"
              value={values.child_dob}
              onChange={(value) => setField('child_dob', value)}
            />
            <FormInput
              label={labels.caregiverName}
              required
              value={values.caregiver_full_name}
              onChange={(value) => setField('caregiver_full_name', value)}
            />
            <FormInput
              label={labels.caregiverPhone}
              required
              inputType="tel"
              value={values.caregiver_phone}
              onChange={(value) => setField('caregiver_phone', value)}
            />
            <FormInput
              label={labels.caregiverEmail}
              required
              inputType="email"
              value={values.caregiver_email}
              onChange={(value) => setField('caregiver_email', value)}
            />
            <FormInput
              label={labels.preferredOffice}
              required
              value={values.preferred_office}
              onChange={(value) => setField('preferred_office', value)}
            />
            <FormInput
              label={labels.preferredLanguage}
              required
              value={values.preferred_language}
              onChange={(value) => setField('preferred_language', value)}
            />
            <FormInput
              label={labels.insurance}
              required
              value={values.insurance}
              onChange={(value) => setField('insurance', value)}
            />
            <FormInput
              label={labels.secondaryInsurance}
              value={values.secondary_insurance}
              onChange={(value) => setField('secondary_insurance', value)}
            />
            <FormSelect
              label={labels.autismDiagnosis}
              value={values.autism_diagnosis}
              onChange={(value) => setField('autism_diagnosis', value)}
              labels={labels}
            />
            <FormSelect
              label={labels.attendsSchool}
              value={values.attends_school}
              onChange={(value) => setField('attends_school', value)}
              labels={labels}
            />
            <FormSelect
              label={labels.hasIep}
              value={values.has_iep}
              onChange={(value) => setField('has_iep', value)}
              labels={labels}
            />
            <FormInput
              label={labels.bestContactMethod}
              required
              value={values.best_contact_method}
              onChange={(value) => setField('best_contact_method', value)}
            />
            <FormArea
              className="full"
              label={labels.referralReason}
              required
              value={values.referral_reason}
              onChange={(value) => setField('referral_reason', value)}
            />
            <FormArea
              className="full"
              label={labels.additionalNotes}
              value={values.additional_notes}
              onChange={(value) => setField('additional_notes', value)}
            />
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? labels.submitting : labels.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

type FormInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
};

function FormInput({
  label,
  value,
  onChange,
  required,
  inputType = 'text',
}: FormInputProps): JSX.Element {
  return (
    <label className="field">
      <span>
        {label} {required ? <span className="required">*</span> : null}
      </span>
      <input
        className="input"
        type={inputType}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

type FormAreaProps = {
  className?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

function FormArea({
  className,
  label,
  value,
  onChange,
  required,
}: FormAreaProps): JSX.Element {
  return (
    <label className={`field ${className ?? ''}`}>
      <span>
        {label} {required ? <span className="required">*</span> : null}
      </span>
      <textarea
        className="textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

type FormSelectProps = {
  label: string;
  value: YesNoUnknown;
  onChange: (value: YesNoUnknown) => void;
  labels: IntakeTranslations;
};

function FormSelect({
  label,
  value,
  onChange,
  labels,
}: FormSelectProps): JSX.Element {
  return (
    <label className="field">
      <span>{label}</span>
      <select
        className="select"
        value={value}
        onChange={(event) => onChange(event.target.value as YesNoUnknown)}
      >
        <option value="yes">{labels.yes}</option>
        <option value="no">{labels.no}</option>
        <option value="unknown">{labels.unknown}</option>
      </select>
    </label>
  );
}
