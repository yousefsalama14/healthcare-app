import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { loginFormConfig } from '../../../config/forms/login-form.config';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({});
  model = signal<{ username: string; password: string }>({ username: '', password: '' });
  fields: FormlyFieldConfig[] = loginFormConfig;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.model()).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    }
  }
}
