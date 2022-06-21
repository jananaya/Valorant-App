import { Component, OnInit } from '@angular/core';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-dropdown-categories',
  templateUrl: './dropdown-categories.component.html',
})
export class DropdownCategoriesComponent implements OnInit {
  readonly DEFAULT_OPTION = 'Todas las armas';
  categories: string[] = [];

  constructor(private weaponsService: WeaponsService) {
    weaponsService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  changeSelectedCategory(categoryName: string) {
    let method =
      categoryName === this.DEFAULT_OPTION
        ? this.weaponsService.get()
        : this.weaponsService.getByCategory(categoryName);

    method.subscribe((data) => {
      this.weaponsService.weaponEmitter.emit(data);
    });
  }

  ngOnInit(): void {}
}
