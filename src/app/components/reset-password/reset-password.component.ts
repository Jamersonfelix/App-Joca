import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      novaSenha:['', [Validators.required, Validators.minLength(10)]],
      confirmaNovaSenha: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.resetForm.valid) {
      console.log('Nova senha definida');
      this.router.navigate(['/confirmation-password']);
    }
  }

}
