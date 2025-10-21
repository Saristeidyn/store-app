import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component/shop.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ShopService } from '../core/services/shop.service';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages.routes';
import { API_URL } from '../../environments/secret.env';
import { ModelSource } from 'mapbox-gl';
import { OrderService } from '../core/services/order.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetailComponent } from './order-detail.component/order-detail.component';
import { NzTagModule } from 'ng-zorro-antd/tag';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule
  ],
  providers: [
    ShopService,
    OrderService
  ],
  exports:[
    ShopComponent,
    ProductsComponent,
    OrdersComponent,
    InvoicesComponent,
    AdminLayout,
    RouterModule,
    OrderDetailComponent
  ]
})
export class PagesModule { }

// PASOS PARA OBTENER DATOS DE UNA API_URL