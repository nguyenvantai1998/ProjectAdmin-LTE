import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Router, } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  public category = {};
  public idSub: string;

  constructor(
    private categoryService: CategoryService,
    private activedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCaterogy();
  }

  loadCaterogy() {
    this.activedRouter.params.subscribe(data => {
      let id = data['id'];
      this.categoryService.getIdCategoryDetail(id).subscribe(category => {
        this.category = category;
      })
    })
  }

  onEditCategory() {
    this.categoryService.editCategoryService(this.category).subscribe(data => {
      this.router.navigate(['/admin/category']);
    })
  }

  onSubmit(frmEditCategory) {
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
}
