import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'patients',
    loadComponent: () => import('../features/patients/components/patient-list/patient-list.component')
      .then(m => m.PatientListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/new',
    loadComponent: () => import('../features/patients/components/patient-form/patient-form.component')
      .then(m => m.PatientFormComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments',
    loadComponent: () => import('../features/appointments/components/appointment-list/appointment-list.component')
      .then(m => m.AppointmentListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments/new',
    loadComponent: () => import('../features/appointments/components/appointment-form/appointment-form.component')
      .then(m => m.AppointmentFormComponent),
    canActivate: [AuthGuard],
  },
  // { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
];
