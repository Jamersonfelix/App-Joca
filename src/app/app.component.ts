import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'joca-app';
}
@NgModule({
    imports: [
    ReactiveFormsModule,
    RouterModule,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ]
})
export class AppModule { }
