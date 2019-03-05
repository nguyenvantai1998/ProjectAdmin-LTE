import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

//router
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routers.modules";

//service
import { AuthGuard } from "./services/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
