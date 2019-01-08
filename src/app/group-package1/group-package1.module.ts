import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupPackage1Page } from './group-package1.page';
import { GlobalComponentsModule } from '../global-components/global-components.module';

const routes: Routes = [
  {
    path: '',
    component: GroupPackage1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupPackage1Page]
})
export class GroupPackage1PageModule {}
