import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';

const routes: Routes = [
  { path: 'subcomponent', component: SubcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
