// Formly configuration
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

export const formlyConfig: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Patient Name',
      placeholder: 'Enter name',
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    validation: {
      messages: {
        required: 'Name is required',
        minLength: 'Name must be at least 2 characters',
        maxLength: 'Name cannot exceed 50 characters',
      },
    },
  },
  {
    key: 'age',
    type: 'input',
    props: {
      label: 'Age',
      type: 'number',
      required: true,
      min: 0,
      max: 150,
    },
    validation: {
      messages: {
        required: 'Age is required',
        min: 'Age must be at least 0',
        max: 'Age cannot exceed 150',
      },
    },
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
      placeholder: 'Select condition',
    },
  },
];

export const appointmentFormlyConfig: FormlyFieldConfig[] = [
  {
    key: 'patientId',
    type: 'input',
    props: {
      label: 'Patient ID',
      type: 'number',
      required: true,
      min: 1,
    },
  },
  {
    key: 'date',
    type: 'calendar',
    props: {
      label: 'Date',
      required: true,
      dateFormat: 'yy-mm-dd',
      showIcon: true,
    },
  },
  {
    key: 'time',
    type: 'input',
    props: {
      label: 'Time',
      placeholder: 'HH:MM',
      required: true,
      pattern: '^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$',
    },
    validation: {
      messages: { pattern: 'Time must be in HH:MM format (e.g., 14:30)' },
    },
  },
];

export const formlyModules = [FormlyPrimeNGModule];
