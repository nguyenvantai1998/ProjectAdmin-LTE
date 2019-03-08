import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingModule } from './app-routing.module';
//Form
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//service
import { AuthGuard } from './services/auth-token-login/auth-login.guard';
import { AuthTokenService } from './services/auth-token-login/auth-token.service';
//component
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    routingModule,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
