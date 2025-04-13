import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group(
      {
      novaSenha:['', [Validators.required, this.senhaForteValidator]],
      confirmaNovaSenha: ['', [Validators.required]]
    },
    { validators: this.senhaIguaisValidator }
    );
  }

  // Validador de senha forte
  senhaForteValidator(control: AbstractControl): ValidationErrors | null {
    const senha = control.value;
    if (!senha) return null;

    const temMinuscula = /[a-z]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temEspecial = /[!@#$%&*(),.?:{}|<>]/.test(senha);
    const temMinCaracteres = senha.length >= 10;

    const valido = temMinuscula && temMaiuscula && temEspecial && temMinCaracteres;
    return valido ? null : { senhaFraca: true };
  }

  // Validador para verificar se as senhas são iguais
  senhaIguaisValidator(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('novaSenha')?.value;
    const confirma = group.get('confirmaNovaSenha')?.value;
    return senha === confirma ? null : { senhasDiferentes: true };
  }


  onSubmit() {
    if (this.resetForm.valid) {
      console.log('Nova senha definida com sucesso!');
      this.router.navigate(['/confirmation-password']);
    }
  }

}
