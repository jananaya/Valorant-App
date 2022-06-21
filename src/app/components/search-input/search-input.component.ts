import { Component } from '@angular/core';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  constructor(private weaponsService: WeaponsService) {}

  formatName(name: string): string {
    let str = name.toLowerCase();

    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }

  search(name: string) {
    this.weaponsService.getByName(this.formatName(name)).subscribe((data) => {
      this.weaponsService.weaponEmitter.emit(data);
    });
  }
}
