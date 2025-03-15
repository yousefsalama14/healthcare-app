import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../core/services/base-api.service';
import { Appointment } from '../../core/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseApiService<Appointment> {

  constructor(http: HttpClient) {
    super(http, 'appointments');
  }

  getByPatientId(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}?patientId=${patientId}`);
  }
}
