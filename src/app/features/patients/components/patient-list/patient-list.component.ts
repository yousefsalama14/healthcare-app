import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Patient } from '../../../../core/models/patient.model';
import { BaseApiService } from '../../../../core/services/base-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { BaseListComponent } from '../../../../shared/base-list/base-list.component';
import { PatientsService } from '../../patients.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, TableModule, HttpClientModule, ButtonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent extends BaseListComponent<Patient> {
  patients: Patient[] = [];

  constructor(apiService: PatientsService) {
    super(apiService);
  }

  displayItem(item: Patient): void {
    console.log(`Displaying patient: ${item.name}, Age: ${item.age}`);
    // Could trigger a modal or log details; implementation depends on UI needs
  }
}
