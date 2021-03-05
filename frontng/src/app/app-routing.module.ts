import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateprodComponent } from './createprod/createprod.component';

const routes: Routes = [
  {path:'',component:CreateprodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
