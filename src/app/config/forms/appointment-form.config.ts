import { FormlyFieldConfig } from '@ngx-formly/core';

export const appointmentFormConfig: FormlyFieldConfig[] = [
  {
    key: 'patientId',
    type: 'input',
    props: { label: 'Patient ID', type: 'number', required: true },
  },
  {
    key: 'date',
    type: 'calendar', // PrimeNG calendar component
    props: { label: 'Date', required: true, dateFormat: 'yy-mm-dd' },
  },
  {
    key: 'time',
    type: 'input',
    props: { label: 'Time', placeholder: 'HH:MM', required: true },
  },
];
