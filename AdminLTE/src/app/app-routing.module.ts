import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-token-login/auth-login.guard';
import { IndexComponent } from './components/index/index.component';
import { ListProductComponent } from './components/add-edit-del-Admin/list-product/list-product.component';
import { EditProductComponent } from './components/add-edit-del-Admin/edit-product/edit-product.component';
import { ContentAdminComponent } from './components/content-admin/content-admin.component';
import { AddProductComponent } from './components/add-edit-del-Admin/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
      // canActivate: [AuthGuard],
      children:[
        { 
          path: '', 
          component: ContentAdminComponent 
        },
        { 
          path: 'add',
          component: AddProductComponent
        },
        { 
          path: 'list',
          component: ListProductComponent
        },
        { 
          path: 'edit/:id',
          component: EditProductComponent
        }
      ]
  }
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
  ContentAdminComponent,
  AddProductComponent
]
