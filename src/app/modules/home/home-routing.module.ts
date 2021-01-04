import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { counterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'counter',
        component: counterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
