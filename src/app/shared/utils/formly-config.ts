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
    },
  },
  {
    key: 'age',
    type: 'input',
    props: {
      label: 'Age',
      type: 'number',
      required: true,
    },
  },
];

export const formlyModules = [FormlyPrimeNGModule];
