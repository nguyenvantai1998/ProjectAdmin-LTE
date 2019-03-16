import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Module
import { AppRoutingModule, routingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BannerSliderComponent } from './components/main/banner-slider/banner-slider.component';
import { ListCategoryComponent } from './components/admin/list-category/list-category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { ListOrderComponent } from './components/admin/list-order/list-order.component';
import { DetailOrderComponent } from './components/admin/detail-order/detail-order.component';
import { UploadImageComponent } from './components/admin/upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    routingModule,
    ProductFortunePipe,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListProductOneComponent,
    ListProductTwoComponent,
    ListProductThreeComponent,
    ListProductFourComponent,
    ListProductFiveComponent,
    BannerSliderComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListOrderComponent,
    DetailOrderComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthTokenService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
