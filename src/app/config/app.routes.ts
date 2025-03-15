import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'patients',
    loadComponent: () =>
      import(
        '../features/patients/components/patient-list/patient-list.component'
      ).then((m) => m.PatientListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/new',
    loadComponent: () =>
      import(
        '../features/patients/components/patient-form/patient-form.component'
      ).then((m) => m.PatientFormComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments',
    loadComponent: () =>
      import(
        '../features/appointments/components/appointment-list/appointment-list.component'
      ).then((m) => m.AppointmentListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments/new',
    loadComponent: () =>
      import(
        '../features/appointments/components/appointment-form/appointment-form.component'
      ).then((m) => m.AppointmentFormComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'doctors',
    loadComponent: () => import('../features/doctors/components/doctor-list/doctor-list.component')
      .then(m => m.DoctorListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'doctors/new',
    loadComponent: () => import('../features/doctors/components/doctor-form/doctor-form.component')
      .then(m => m.DoctorFormComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'prescriptions',
    loadComponent: () => import('../features/prescriptions/components/prescription-list/prescription-list.component')
      .then(m => m.PrescriptionListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'prescriptions/new',
    loadComponent: () => import('../features/prescriptions/components/prescription-form/prescription-form.component')
      .then(m => m.PrescriptionFormComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../features/auth/login/login.component').then((m) => m.LoginComponent),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
];
