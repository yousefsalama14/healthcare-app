import { Injectable } from '@angular/core';
import { AuthBaseService } from './auth-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthBaseService {
  private authenticated = false;

  constructor(private http: HttpClient) {
    super();
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    // Mock login;
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(
      tap(() => (this.authenticated = true))
    );
  }

  logout(): void {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
