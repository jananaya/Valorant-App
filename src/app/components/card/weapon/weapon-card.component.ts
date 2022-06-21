import { Component, Input } from '@angular/core';
import Weapon from 'src/app/types/Weapon';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: [
    './weapon-card.component.css',
    '../card.component.css'
  ]
})
export class WeaponCardComponent {

  readonly CSS_CLASS_TO_HIDE = 'hidden';
  @Input() data: Weapon = {
    id: 0,
    name: '',
    category: '',
    specs: [],
    imagePath: '',
    brief: '',
    rateOfFire: 0,
    damage: 0,
    rating: 0
  };

  isMouseOver: boolean = false;
  frontDisplay = '';
  backDisplay = this.CSS_CLASS_TO_HIDE;

  changeDisplayValue() {
    this.isMouseOver = !this.isMouseOver;

    if (this.isMouseOver) {
      this.frontDisplay = this.CSS_CLASS_TO_HIDE;
      this.backDisplay = '';
    } else {
      this.frontDisplay = '';
      this.backDisplay = this.CSS_CLASS_TO_HIDE;
    }
  }
}
