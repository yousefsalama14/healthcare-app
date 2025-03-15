import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { DoctorsService } from '../../../../core/services/doctors.service';
import { Doctor } from '../../../../core/models/doctor.model';
import { BaseListComponent } from '../../../../shared/components/base-list/base-list.component';

@Component({
  selector: 'app-doctor-list',
  imports: [CommonModule, TableModule, ButtonModule, SkeletonModule, RouterModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent extends BaseListComponent<Doctor> {
  constructor(apiService: DoctorsService) {
    super(apiService);
  }

  displayItem(item: Doctor): void {
    console.log(`Displaying doctor: ${item.name}, Specialty: ${item.specialty}`);
  }
}
