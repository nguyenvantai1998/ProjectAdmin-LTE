import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  public category: {};
  public subScription: Subscription;
  // public subCategory: {};

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.showCategory();
  }

  showCategory(){
    this.subScription = this.categoryService.getActiveCategory().subscribe(data=>{
      this.category = data;
      // console.log(this.category)
    });
  }

  ngOnDestroy(){
    if(this.subScription){
      this.subScription.unsubscribe();
    }
  }

}
