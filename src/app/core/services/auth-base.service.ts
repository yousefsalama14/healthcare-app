import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AuthBaseService {
  abstract login(credentials: { username: string; password: string }): Observable<any>;
  abstract logout(): void;
  abstract isAuthenticated(): boolean;
}
