import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';


const routes: Routes = [
  {
    path:'nosotros',component:NosotrosComponent
  }
]


@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    [RouterModule]
  ]
})
export class NosotrosModule { }
