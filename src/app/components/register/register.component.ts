import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  mostrarRequisitosSenha = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required,  Validators.pattern(/^\d{10,15}$/)],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required, Validators.minLength(10)],
      confirmarSenha: ['', Validators.required, Validators.minLength(10)],
      termos: [false, Validators.requiredTrue]
    }, {Validators: this.matchPasswords });
  }

  
  matchPasswords(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : {mismatch: true};
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Dados de cadastro:', this.registerForm.value);
      
      // Enviar dados ao backend no futuro
    }
  }

  toggleRequisitosSenha(){
    this.mostrarRequisitosSenha = true;
  }

}
