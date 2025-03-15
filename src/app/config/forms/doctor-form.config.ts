import { FormlyFieldConfig } from '@ngx-formly/core';

export const doctorFormConfig: FormlyFieldConfig[] = [
  { key: 'name', type: 'input', props: { label: 'Name', required: true } },
  {
    key: 'specialty',
    type: 'dropdown',
    props: {
      label: 'Specialty',
      required: true,
      options: [
        { label: 'Cardiology', value: 'Cardiology' },
        { label: 'Neurology', value: 'Neurology' },
        { label: 'Pediatrics', value: 'Pediatrics' },
      ],
    },
  },
  { key: 'email', type: 'input', props: { label: 'Email', required: true, type: 'email' } },
];
