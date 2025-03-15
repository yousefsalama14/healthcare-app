import { Routes } from '@angular/router';
import { PatientListComponent } from './features/patients/components/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointments/components/appointment-list/appointment-list.component';

export const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
];
