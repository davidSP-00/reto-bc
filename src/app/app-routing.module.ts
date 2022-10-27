import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'landing', component: LandingPageComponent},
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', redirectTo: 'landing', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
