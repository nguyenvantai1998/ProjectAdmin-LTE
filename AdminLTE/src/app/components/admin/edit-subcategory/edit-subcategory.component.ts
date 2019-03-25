import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {

  public categoryLoad = {};
  public category = {
    name: ''
  };
  public idCate: string;
  public idSubEdit: string;
  public idSubDel: string;

  constructor(
    private activeRouter: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.activeRouter.params.subscribe((data: Params) => {
      this.idCate = data['id'];
      this.categoryService.getIdCategoryDetail(this.idCate).subscribe(data => {
        this.categoryLoad = data;
      })
    })
  }

  onSelected(event) {
    this.idSubEdit = event._id;
    this.category.name = event.name;
  }

  onDeleteSub(event) {
    this.idSubDel = event._id;
    this.category.name = event.name;
    this.categoryService.deleteSubCategory(this.idCate, this.idSubDel).subscribe(data => {
    })
  }

  onSubmit(category: any) {
    this.category.name = category;
    this.categoryService.editSubCategory(this.idCate, this.idSubEdit, this.category).subscribe(data => {
      this.loadCategory();
      this.category.name = '';
    })

  }

}
