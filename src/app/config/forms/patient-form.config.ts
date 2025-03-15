import { FormlyFieldConfig } from '@ngx-formly/core';

export const patientFormConfig: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: { label: 'Patient Name', placeholder: 'Enter name', required: true, minLength: 2, maxLength: 50 },
    validation: { messages: { required: 'Name is required', minLength: 'Name must be at least 2 characters' } },
  },
  {
    key: 'age',
    type: 'input',
    props: { label: 'Age', type: 'number', required: true, min: 0, max: 150 },
    validation: { messages: { required: 'Age is required', min: 'Age must be at least 0' } },
  },
  {
    key: 'condition',
    type: 'dropdown',
    props: {
      label: 'Condition',
      required: true,
      options: [
        { label: 'Diabetes', value: 'Diabetes' },
        { label: 'Hypertension', value: 'Hypertension' },
        { label: 'Asthma', value: 'Asthma' },
      ],
    },
  },
];
