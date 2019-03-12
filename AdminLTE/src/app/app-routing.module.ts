import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-token-login/auth-login.guard';
import { IndexComponent } from './components/index/index.component';
import { ListProductComponent } from './components/add-edit-del-Admin/list-product/list-product.component';
import { EditProductComponent } from './components/add-edit-del-Admin/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-edit-del-Admin/add-product/add-product.component';
import { Page404Component } from './components/page404/page404.component';

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
          path: 'add',
          component: AddProductComponent
        },
        { 
          path: 'edit/:id',
          component: EditProductComponent
        }
      ]
  },
  { 
    path: '404', 
    component: Page404Component
  },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [
  IndexComponent,
  UserComponent,
  AdminComponent,
  ListProductComponent,
  EditProductComponent,
  AddProductComponent,
  Page404Component
]
