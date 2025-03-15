import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormlyModule, FormlyPrimeNGModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({});
  model = signal<{ username: string; password: string }>({ username: '', password: '' });
  fields = [
    { key: 'username', type: 'input', props: { label: 'Username', required: true } },
    { key: 'password', type: 'password', props: { label: 'Password', required: true } },
  ];

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.model()).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    }
  }
}
