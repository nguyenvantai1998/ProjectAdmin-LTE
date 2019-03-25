import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  public category = {
    name : ''
  }
  public id: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router : Router
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((data: Params) => {
      this.id = data['id'];
    })
  }

  onSubmit(sub_category: string) {
    if (sub_category != undefined) {
      this.category.name = sub_category;
      this.categoryService.addSubCategory(this.category, this.id).subscribe(data => {
        this.router.navigate(['/admin/category'])
      })
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't Add Sub_Category",
        text: 'The fields required cannot be empty!!'
      })
    }
  }
}