import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password' , component: ForgotPasswordComponent},
    { path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule {}
