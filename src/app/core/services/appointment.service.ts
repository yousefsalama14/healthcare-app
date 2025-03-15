import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Appointment } from '../models/appointment.model';

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
