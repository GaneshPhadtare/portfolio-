import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { ChildrouterModule } from './childrouter.module';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ChildrouterModule
  ]
})
export class ChildmoduleModule {
  constructor(){
  
  }
}
