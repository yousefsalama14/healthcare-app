import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { PatientsService } from '../../patients.service';
import { Patient } from '../../../../core/models/patient.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { formlyConfig } from '../../../../config/formly.config';

@Component({
  selector: 'app-patient-form',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss'
})
export class PatientFormComponent {
  form = new FormGroup({});
  model = signal<Patient>({ name: '', age: 0, condition: '' });
  fields: FormlyFieldConfig[] = formlyConfig;

  constructor(private patientService: PatientsService) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.patientService.create(this.model()).subscribe((patient) => {
        console.log('Patient added:', patient);
        this.model.set({ name: '', age: 0, condition: '' });
        this.form.reset();
      });
    }
  }
}
