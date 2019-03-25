import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onAddCategory() {
    this.categoryService.addCategoryService(this.category).subscribe(data => {
      console.log(data);
      if(data){
        this.router.navigate(['/admin/category']);
      }
    }, error => console.log(error))
  }

  onSubmit(frmAddCategory) {
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

}
