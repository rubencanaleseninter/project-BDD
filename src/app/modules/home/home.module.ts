import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { counterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [HomeComponent, counterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
})
export class HomeModule {}