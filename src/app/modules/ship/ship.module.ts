import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipRoutingModule } from './ship-routing.module';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ShipComponent } from './ship.component';

@NgModule({
  declarations: [ShippingComponent, ShipComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShipRoutingModule
  ]
})
export class ShipModule { }
