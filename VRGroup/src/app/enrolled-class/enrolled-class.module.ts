import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnrolledClassPage } from './enrolled-class.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolledClassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnrolledClassPage]
})
export class EnrolledClassPageModule {}
