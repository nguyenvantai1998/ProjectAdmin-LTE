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
import { ProductService } from './services/products/product.service';
//pipes
import { ProductFortunePipe } from './pipes/product-fortune.pipe';
//component
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/main/navigation/navigation.component';
import { ListProductOneComponent } from './components/main/list-product-one/list-product-one.component';
import { ListProductTwoComponent } from './components/main/list-product-two/list-product-two.component';
import { ListProductThreeComponent } from './components/main/list-product-three/list-product-three.component';
import { ListProductFourComponent } from './components/main/list-product-four/list-product-four.component';
import { ListProductFiveComponent } from './components/main/list-product-five/list-product-five.component';


@NgModule({
  declarations: [
    AppComponent,
    routingModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListProductOneComponent,
    ProductFortunePipe,
    ListProductTwoComponent,
    ListProductThreeComponent,
    ListProductFourComponent,
    ListProductFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthTokenService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
