import { LeftBarComponent } from './left-bar/left-bar.component';
import { BreadCrumbComponent } from './breadCrumb/breadCrumb.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'breadCrumb',
    component: BreadCrumbComponent
  },
  {
    path: 'left-bar-component',
    component: LeftBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
