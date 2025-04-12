import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

    onSubmit() {
      if (this.loginForm.valid) {
        const {email, password} = this.loginForm.value;
        // Aqui futuramente entra a chamada de autenticação no back-end
        console.log('Login válido:', email, password);
      }
    }
 
}
