import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Patient } from '../../../../core/models/patient.model';
import { ButtonModule } from 'primeng/button';
import { BaseListComponent } from '../../../../shared/components/base-list/base-list.component';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { PatientsService } from '../../../../core/services/patients.service';

@Component({
  selector: 'app-patient-list',
  imports: [CommonModule, TableModule, ButtonModule, RouterModule, SkeletonModule, DialogModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent extends BaseListComponent<Patient> {
  display = signal(false);
  selectedPatient = signal<Patient | null>(null);

  constructor(apiService: PatientsService) {
    super(apiService);
  }

  showDialog(patient: Patient): void {
    this.selectedPatient.set(patient);
    this.display.set(true);
    this.displayItem(patient);
  }

  displayItem(item: Patient): void {
    console.log(`Displaying patient: ${item.name}, Age: ${item.age}`);
  }
}
