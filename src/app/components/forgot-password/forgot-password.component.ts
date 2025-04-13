import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required, Validators.email]
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Solicitação enviada:', this.forgotForm.value.email);
      this.router.navigate(['/reset-password']);
    }
  }
}
