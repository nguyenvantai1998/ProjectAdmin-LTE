import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit, OnDestroy {

  public category: Category;
  public subscription: Subscription;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.subscription = this.categoryService.getActiveCategory().subscribe(data => {
      this.category = data;
    })
  }

  onDeactive(id: string) {
    console.log(id);
    this.categoryService.getIdCategoryDetail(id).subscribe(category => {
      this.category = category;
      console.log(this.category);
      this.categoryService.deactiveCategoryService(this.category).subscribe(data => {
        this.loadCategory();
      })
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
