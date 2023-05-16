import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { BannerModalComponent } from './components/modals/banner-modal/banner-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { AboutMeModalComponent } from './components/modals/about-me-modal/about-me-modal.component';
import { ExperienceModalComponent } from './components/modals/experience-modal/experience-modal.component';
import { EducationModalComponent } from './components/modals/education-modal/education-modal.component';
import { SkillsModalComponent } from './components/modals/skills-modal/skills-modal.component';
import { Project1ModalComponent } from './components/modals/project1-modal/project1-modal.component';
import { Project2ModalComponent } from './components/modals/project2-modal/project2-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    BannerModalComponent,
    LoginModalComponent,
    AboutMeModalComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    SkillsModalComponent,
    Project1ModalComponent,
    Project2ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
