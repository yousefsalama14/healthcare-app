import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../core/services/base-api.service';
import { Patient } from '../../core/models/patient.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends BaseApiService<Patient> {
  constructor(http: HttpClient) {
    super(http, 'patients'); // Endpoint for patients
  }

  // Optional: Add patient-specific methods
  getByCondition(condition: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}?condition=${condition}`);
  }
}
