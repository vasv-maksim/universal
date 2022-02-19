import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ 
  path: '', 
  component: AboutComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutRoutingModule { }
