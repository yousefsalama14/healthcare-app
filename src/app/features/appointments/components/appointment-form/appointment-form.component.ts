import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { Appointment } from '../../../../core/models/appointment.model';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-appointment-form',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {
  form = new FormGroup({});
  model: Appointment = { patientId: 0, date: '', time: '' };
  fields: FormlyFieldConfig[] = [
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

  constructor(private appointmentService: AppointmentService) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.appointmentService.create(this.model).subscribe((appointment) => {
        console.log('Appointment scheduled:', appointment);
        this.form.reset();
      });
    }
  }
}
