import { NgModule } from '@angular/core';
import { DataComponent } from './data/data.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, DataComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
