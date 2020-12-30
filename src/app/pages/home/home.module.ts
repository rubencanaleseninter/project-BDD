import { NgModule } from '@angular/core';
import { DataComponent } from './data/data.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, DataComponent],
  imports: [HomeRoutingModule],
})
export class HomeModule {}
