import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends BaseApiService<Doctor> {
  constructor(http: HttpClient) {
    super(http, 'doctors');
  }

  getBySpecialty(specialty: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}?specialty=${specialty}`);
  }
}
