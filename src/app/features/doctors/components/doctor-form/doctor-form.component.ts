import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { DoctorsService } from '../../../../core/services/doctors.service';
import { Doctor } from '../../../../core/models/doctor.model';
import { doctorFormConfig } from '../../../../config/forms/doctor-form.config';

@Component({
  selector: 'app-doctor-form',
  imports: [
    CommonModule,
    FormlyModule,
    FormlyPrimeNGModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.scss',
})
export class DoctorFormComponent {
  form = new FormGroup({});
  model = signal<Doctor>({ name: '', specialty: '', email: '' });
  fields: FormlyFieldConfig[] = doctorFormConfig;

  constructor(private doctorService: DoctorsService) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.doctorService.create(this.model()).subscribe((doctor) => {
        console.log('Doctor added:', doctor);
        this.model.set({ name: '', specialty: '', email: '' });
        this.form.reset();
      });
    }
  }
}
