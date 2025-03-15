import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { PrescriptionService } from '../../../../core/services/prescription.service';
import { Prescription } from '../../../../core/models/prescription.model';
import { BaseListComponent } from '../../../../shared/components/base-list/base-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  imports: [CommonModule, TableModule, ButtonModule, SkeletonModule, RouterModule],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.scss'
})
export class PrescriptionListComponent extends BaseListComponent<Prescription> {
  constructor(apiService: PrescriptionService) {
    super(apiService);
  }

  displayItem(item: Prescription): void {
    console.log(`Displaying prescription: ${item.medication}, Dosage: ${item.dosage}`);
  }
}
