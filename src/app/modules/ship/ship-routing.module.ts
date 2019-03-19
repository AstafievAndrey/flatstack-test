import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { ShipComponent } from './ship.component';

const routes: Routes = [
  {
    path: 'shipping', 
    component: ShipComponent, 
    children:[
      {path : '',component: ShippingComponent}
    ]
  },
  {path: '',   redirectTo: 'shipping', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
