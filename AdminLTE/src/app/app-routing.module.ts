import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-token-login/auth-login.guard';
import { IndexComponent } from './components/index/index.component';
import { ListProductComponent } from './components/admin/list-product/list-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ListProductDeactiveComponent } from './components/admin/list-product-deactive/list-product-deactive.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { CartComponent } from './components/product/cart/cart.component';
import { ListCategoryComponent } from './components/admin/list-category/list-category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { ListOrderComponent } from './components/admin/list-order/list-order.component';
import { DetailOrderComponent } from './components/admin/detail-order/detail-order.component';
import { UploadImageComponent } from './components/admin/upload-image/upload-image.component';
import { ListBuyerComponent } from './components/admin/list-buyer/list-buyer.component';
import { BuyerDetailComponent } from './components/admin/buyer-detail/buyer-detail.component';
import { AddSubcategoryComponent } from './components/admin/add-subcategory/add-subcategory.component';
import { EditSubcategoryComponent } from './components/admin/edit-subcategory/edit-subcategory.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
      path: 'login',
      component: UserComponent
  },
  {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children:[
        { 
          path: '', 
          component: ListProductComponent 
        },
        {
          path: 'deactive',
          component: ListProductDeactiveComponent
        },
        { 
          path: 'add',
          component: AddProductComponent
        },
        { 
          path: 'edit/:id',
          component: EditProductComponent
        },
        {
          path:'category',
          component: ListCategoryComponent
        },
        { 
          path: 'category/add',
          component: AddCategoryComponent
        },
        { 
          path: 'category/edit/:id',
          component: EditCategoryComponent
        },
        { 
          path: 'category/subcategory/add/:id',
          component: AddSubcategoryComponent
        },
        { 
          path: 'category/subcategory/edit/:id',
          component: EditSubcategoryComponent
        },
        { 
          path: 'order',
          component: ListOrderComponent
        },
        { 
          path: 'order/view/:id',
          component: DetailOrderComponent
        },
        { 
          path: 'buyer', 
          component: ListBuyerComponent
        },
        { 
          path: 'buyer/:id', 
          component: BuyerDetailComponent
        },
        { 
          path: 'upload', 
          component: UploadImageComponent
        },
      ]
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  { 
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  { 
    path: '404', 
    component: Page404Component
  },
  { 
    path: '**', 
    redirectTo: '/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [
  IndexComponent,
  DetailComponent,
  CartComponent,
  UserComponent,
  AdminComponent,
  ListProductComponent,
  ListProductDeactiveComponent,
  EditProductComponent,
  AddProductComponent,
  Page404Component,
  ListOrderComponent,
  DetailOrderComponent,
  UploadImageComponent,
  BuyerDetailComponent,
  AddSubcategoryComponent,
  EditSubcategoryComponent,
  CheckoutComponent
]
