import { FormlyFieldConfig } from '@ngx-formly/core';

export const loginFormConfig: FormlyFieldConfig[] = [
  { key: 'username', type: 'input', props: { label: 'Username', required: true } },
  { key: 'password', type: 'password', props: { label: 'Password', required: true } },
];
