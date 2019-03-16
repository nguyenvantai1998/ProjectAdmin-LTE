import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Router,  } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  public category = {};
  public frmEditCategory: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private activedRouter: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loadCaterogy();
    this.createForm();
  }

  createForm() {
    this.frmEditCategory = this.formBuilder.group({
      namecategory: ['', [Validators.required]],
      subcategory: ['', [Validators.required]]
    })
  }

  loadCaterogy() {
    this.activedRouter.params.subscribe(data => {
      let id = data['id'];console.log(data);
      this.categoryService.getIdCategoryDetail(id).subscribe(category => {
        this.category = category;
        console.log(this.category)
      })
    })
  }

  onEditCategory() {
    this.categoryService.editCategoryService(this.category).subscribe(data => {
      this.router.navigate(['/admin/category']);
    })
  }

  onSubmitEdit() {
    if (this.frmEditCategory.valid) {
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
}
