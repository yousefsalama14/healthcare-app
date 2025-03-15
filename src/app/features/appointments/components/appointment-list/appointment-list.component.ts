import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Appointment } from '../../../../core/models/appointment.model';
import { BaseListComponent } from '../../../../shared/components/base-list/base-list.component';
import { AppointmentService } from '../../../../core/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule, TableModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent extends BaseListComponent<Appointment> {
  constructor(apiService: AppointmentService) {
    super(apiService);
  }

  displayItem(item: Appointment): void {
    console.log(`Displaying appointment: ${item.date} at ${item.time}`);
  }
}
