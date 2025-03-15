import { Injectable } from '@angular/core';
import { Prescription } from '../models/prescription.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService extends BaseApiService<Prescription> {
  constructor(http: HttpClient) {
    super(http, 'prescriptions');
  }

  getByPatientId(patientId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.baseUrl}?patientId=${patientId}`);
  }
}
