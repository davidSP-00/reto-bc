import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { AchievementsSectionComponent } from './components/achievements-section/achievements-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { LoginComponent } from './auth/login/login.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './views/grid/grid.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModules } from './material-modules';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    HeadSectionComponent,
    FeaturesSectionComponent,
    AchievementsSectionComponent,
    FooterSectionComponent,
    InputComponent,
    LoginComponent,
    GridComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
