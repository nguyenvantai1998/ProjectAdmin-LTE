import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit, OnDestroy {

  public category: Category;
  public categoryAdd: Category = {};
  public categoryLoadEdit: Category = {};
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public isShowAdd = false;
  public isShowEdit = false;
  today = new Date();
  jstoday = '';

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.subscription = this.categoryService.getAllCategory().subscribe(data => {
      this.category = data;
    })
  }

  //add
  loadCategoryAdd(){
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm:ss', 'en-VI', '+0700');
    this.isShowAdd = !this.isShowAdd;
  }

  onAddCategory() {
    this.subscription = this.categoryService.addCategoryService(this.categoryAdd).subscribe(data => {
      console.log(data);
      if (data && data['_id']) {
        this.isShowAdd = false;
        this.loadCategory();
      }
    })
  }

  onSubmitAdd(frmAddCategory){
    if (frmAddCategory.valid) {
      this.onAddCategory();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't add category",
        text: 'The fields required cannot be empty!!'
      })

    }
  }

  //edit
  loadCategoryEdit(id: string) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm:ss', 'en-VI', '+0700');
    this.isShowEdit = !this.isShowEdit;
    
    this.subscription = this.categoryService.getIdCategoryDetail(id).subscribe((data) => {
      this.categoryLoadEdit = data;
    })
  }

  onEditCategory() {
    this.subscription = this.categoryService.editCategoryService(this.categoryLoadEdit).subscribe(data => {
      this.isShowEdit = !this.isShowEdit;
      this.loadCategory();
    })
  }

  onSubmitEdit(frmEditCategory) {
    if (frmEditCategory.valid) {
      this.onEditCategory();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't edit category",
        text: 'The fields required cannot be empty!!',
      })

    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
