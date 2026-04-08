export type IntakeLanguage = 'en' | 'es';

export const intakeTranslations = {
  en: {
    parentIntakeMode: 'Parent Intake Mode',
    parentIntakeDescription:
      'Use this kiosk form for families checking in or requesting services.',
    launchParentIntake: 'Open Parent Intake',
    backToPortal: 'Back to Staff Portal',
    welcomeTitle: 'Welcome to BSOM Parent Intake',
    welcomeSubtitle:
      'Please choose your language to begin. You can switch languages anytime.',
    startEnglish: 'Start in English',
    startSpanish: 'Comenzar en Español',
    languageBadge: 'Language',
    parentIntakeTitle: 'Parent Intake / New Referral',
    helperText:
      'Please complete this form. Our team will review and contact you soon.',
    required: 'Required',
    childFirstName: 'Child first name',
    childLastName: 'Child last name',
    childDob: 'Child date of birth',
    caregiverName: 'Caregiver full name',
    caregiverPhone: 'Caregiver phone',
    caregiverEmail: 'Caregiver email',
    preferredOffice: 'Preferred office/location',
    preferredLanguage: 'Preferred language',
    insurance: 'Insurance',
    secondaryInsurance: 'Secondary insurance',
    autismDiagnosis: 'Does the child already have an autism diagnosis?',
    attendsSchool: 'Does the child attend school?',
    hasIep: 'Does the child have an IEP?',
    referralReason: 'Reason for referral / concerns',
    bestContactMethod: 'Best contact method',
    additionalNotes: 'Notes or anything else we should know',
    yes: 'Yes',
    no: 'No',
    unknown: 'Not sure',
    submit: 'Submit Referral',
    submitting: 'Submitting...',
    validationRequired: 'Please complete all required fields.',
    successTitle: 'Thank you!',
    successMessage:
      'Your referral has been submitted. A team member will review it and follow up soon.',
    startNewForm: 'Start New Form',
    submissionError:
      'We were unable to submit right now. Please ask the front desk for assistance.',
  },
  es: {
    parentIntakeMode: 'Modo de Registro para Padres',
    parentIntakeDescription:
      'Use este formulario de kiosco para familias que llegan o solicitan servicios.',
    launchParentIntake: 'Abrir Registro para Padres',
    backToPortal: 'Regresar al Portal del Personal',
    welcomeTitle: 'Bienvenido al Registro para Padres de BSOM',
    welcomeSubtitle:
      'Seleccione su idioma para comenzar. Puede cambiar de idioma en cualquier momento.',
    startEnglish: 'Start in English',
    startSpanish: 'Comenzar en Español',
    languageBadge: 'Idioma',
    parentIntakeTitle: 'Registro para Padres / Nueva Referencia',
    helperText:
      'Complete este formulario. Nuestro equipo lo revisará y se comunicará con usted pronto.',
    required: 'Requerido',
    childFirstName: 'Nombre del niño/a',
    childLastName: 'Apellido del niño/a',
    childDob: 'Fecha de nacimiento del niño/a',
    caregiverName: 'Nombre completo del cuidador',
    caregiverPhone: 'Teléfono del cuidador',
    caregiverEmail: 'Correo electrónico del cuidador',
    preferredOffice: 'Oficina/ubicación preferida',
    preferredLanguage: 'Idioma preferido',
    insurance: 'Seguro médico',
    secondaryInsurance: 'Seguro secundario',
    autismDiagnosis: '¿El niño/a ya tiene diagnóstico de autismo?',
    attendsSchool: '¿El niño/a asiste a la escuela?',
    hasIep: '¿El niño/a tiene un IEP?',
    referralReason: 'Motivo de referencia / inquietudes',
    bestContactMethod: 'Mejor método de contacto',
    additionalNotes: 'Notas o algo más que debamos saber',
    yes: 'Sí',
    no: 'No',
    unknown: 'No estoy seguro/a',
    submit: 'Enviar Referencia',
    submitting: 'Enviando...',
    validationRequired: 'Complete todos los campos requeridos.',
    successTitle: '¡Gracias!',
    successMessage:
      'Su referencia fue enviada. Un miembro del equipo la revisará y se comunicará pronto.',
    startNewForm: 'Comenzar Nuevo Formulario',
    submissionError:
      'No pudimos enviar el formulario en este momento. Pida ayuda en recepción.',
  },
} as const;

export type IntakeTranslationKey = keyof typeof intakeTranslations.en;

export function t(language: IntakeLanguage, key: IntakeTranslationKey): string {
  return intakeTranslations[language][key];
}
