import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
import { environment } from '@environments/environment.prod';
declare var $: any;
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public product: Products = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public ImageObj: any ={}
  public images = [];
  public dataImage ="";
  public idProduct ="";
  isShow = false;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.subscription = this._productService.getAllProduct().subscribe(data => {
      this.product = data;
    })
  }
  ShowHide(id:string){
    this.isShow = !this.isShow;
     this.idProduct = id;
  }

  addImage(){
    this.images.push(this.dataImage);
    this.ImageObj['images'] = this.images;
    console.log(JSON.stringify(this.ImageObj));
     this.subscription = this._productService.actAddImage(this.idProduct,JSON.stringify(this.ImageObj)).subscribe(data => {
      console.log(data);
      this.loadProduct()
      this.images = [];
    })
  }

  delImage(){
    this.images.push(this.dataImage);
    this.ImageObj['images'] = this.images;
    console.log(JSON.stringify(this.ImageObj));
     this.subscription = this._productService.actAddImage(this.idProduct,JSON.stringify(this.ImageObj)).subscribe(data => {
      console.log(data);
      this.loadProduct()
      this.images = [];
    })
  }

  deleteImage(id: string, url: string){
    // alert(id+url);
  //   const token: string = localStorage.getItem('userToken');
  //   this.images.push(url);
  //   this.ImageObj['images'] = this.images;
  //   console.log(JSON.stringify(this.ImageObj));
  //   $.ajax({
  //   url : `${environment.apiPV}/api/v1/products/${id}/images?`,
  //   data : JSON.stringify(this.ImageObj),
  //   contentType: "application/json",
  //   headers : {
  //     'Authorization' : `Bearer ${token}`
  //   },
  //   type: 'DELETE',
  //   success : data => {
  //     console.log(data);
  //     this.loadProduct();
  //   } ,
  //   error : error => {
  //     Swal.fire({
  //       type: 'error',
  //       title: "Can't Delete Image",
  //       text: 'Something Is WRONG !',
  //     })
  //   }
  // });
  
   
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    const token: string = localStorage.getItem('userToken');
    this.images.push(url);
    this.ImageObj['images'] = this.images;
    console.log(JSON.stringify(this.ImageObj));
    $.ajax({
    url : `${environment.apiPV}/api/v1/products/${id}/images?`,
    data : JSON.stringify(this.ImageObj),
    contentType: "application/json",
    headers : {
      'Authorization' : `Bearer ${token}`
    },
    type: 'DELETE',
    success : data => {
      this.images = [];
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      this.loadProduct();
    } ,
    error : error => {
      Swal.fire({
        type: 'error',
        title: "Can't Delete Image",
        text: 'Something Is WRONG !',
      })
    }
  });
  }
})
}

  onDeactive(id:string) {
    this.subscriptionParams = this._productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.subscription = this._productService.deactiveProductService(this.product).subscribe(data => {
        this.loadProduct();
      })
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
