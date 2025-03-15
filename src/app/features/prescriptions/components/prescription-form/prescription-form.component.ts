import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { Prescription } from '../../../../core/models/prescription.model';
import { PrescriptionService } from '../../../../core/services/prescription.service';
import { prescriptionFormConfig } from '../../../../config/forms/prescription-form.config';

@Component({
  selector: 'app-prescription-form',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './prescription-form.component.html',
  styleUrl: './prescription-form.component.scss'
})
export class PrescriptionFormComponent {
  form = new FormGroup({});
  model = signal<Prescription>({ patientId: 0, doctorId: 0, medication: '', dosage: '', dateIssued: '' });
  fields: FormlyFieldConfig[] = prescriptionFormConfig;

  constructor(private prescriptionService: PrescriptionService) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.prescriptionService.create(this.model()).subscribe((prescription) => {
        console.log('Prescription added:', prescription);
        this.model.set({ patientId: 0, doctorId: 0, medication: '', dosage: '', dateIssued: '' });
        this.form.reset();
      });
    }
  }
}
