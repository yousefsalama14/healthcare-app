import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { Patient } from '../../../../core/models/patient.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PatientsService } from '../../../../core/services/patients.service';
import { patientFormConfig } from '../../../../config/forms/patient-form.config';

@Component({
  selector: 'app-patient-form',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss'
})
export class PatientFormComponent {
  form = new FormGroup({});
  model = signal<Patient>({ name: '', age: 0, condition: '' });
  fields: FormlyFieldConfig[] = patientFormConfig;

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
