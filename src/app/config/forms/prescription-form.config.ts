import { FormlyFieldConfig } from '@ngx-formly/core';

export const prescriptionFormConfig: FormlyFieldConfig[] = [
  { key: 'patientId', type: 'input', props: { label: 'Patient ID', type: 'number', required: true } },
  { key: 'doctorId', type: 'input', props: { label: 'Doctor ID', type: 'number', required: true } },
  { key: 'medication', type: 'input', props: { label: 'Medication', required: true } },
  { key: 'dosage', type: 'input', props: { label: 'Dosage', required: true } },
  { key: 'dateIssued', type: 'calendar', props: { label: 'Date Issued', required: true, dateFormat: 'yy-mm-dd' } },
];
