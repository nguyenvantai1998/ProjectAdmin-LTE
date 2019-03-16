import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public category = {
    is_active: true,
    sub_category : []
  };
  public frmAddCategory: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frmAddCategory = this.formBuilder.group({
      namecategory: ['', [Validators.required]],
      subcategory: ['', [Validators.required]]
    })
  }

  onAddCategory() {
    this.categoryService.addCategoryService(this.category).subscribe(data => {
      if(data && data['_id']){
        this.router.navigate(['/admin/category']);
      }
    }, error => console.log(error))
  }

  onSubmitAdd() {
    if (this.frmAddCategory.valid) {
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

}
