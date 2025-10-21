import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { ProductsComponent } from "./products.component/products.component";
import { InvoicesComponent } from "./invoices.component/invoices.component";
import { OrdersComponent } from "./orders.component/orders.component";
import { ShopComponent } from "./shop.component/shop.component";
import { OrderDetailComponent } from "./order-detail.component/order-detail.component";

export const ADMIN_ROUTES : Routes = [
    {
        // /admin -> /admin/shop
        path: 'admin',
        component: AdminLayout,
        children: [
            // /admin/productd
            {path:"products", component: ProductsComponent},
            // /adimin/invoices
            {path:"invoices", component: InvoicesComponent},
            {path:"orders", component: OrdersComponent},
            {path:"orders/:id", component: OrderDetailComponent},
            {path:"shop", component: ShopComponent},
            // /admin
            {path: '', pathMatch: 'full', redirectTo: 'shop' }
        ]
            
    }
]