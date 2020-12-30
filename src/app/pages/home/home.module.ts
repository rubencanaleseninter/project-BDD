import { NgModule } from '@angular/core';
import { DataComponent } from './data/data.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, DataComponent],
  imports: [HomeRoutingModule, MatButtonModule],
})
export class HomeModule {}
