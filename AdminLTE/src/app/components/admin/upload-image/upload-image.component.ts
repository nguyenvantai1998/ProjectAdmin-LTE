import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  // public image: any;
  // public selectedFile={
  //   source : file,
  // };
  selectedFile: any = {
    source: File,
  };
  public SourceImage: any = {};
  
  public subscription: Subscription;
  constructor(
    private _productService: ProductService,
  ) { }

  handleFileInput(event) {
    this.selectedFile['source'] = <File>event.target.files[0].name;
    console.log(this.selectedFile);
  }
  onSubmit() {
    console.log(this.selectedFile['source']);
    if (this.selectedFile['source']) {
      console.log(this.SourceImage);
      this.onUpload();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Image Required !",
        text: 'The fields required cannot be empty!!'
      })

    }
  }
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    this._productService.Upload(uploadData).subscribe(data=>{
      console.log(data);
    })
  }
  ngOnInit() {
  }

}
