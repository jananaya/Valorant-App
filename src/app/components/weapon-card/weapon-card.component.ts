import { Component, Input } from '@angular/core';
import Weapon from 'src/types/Weapon';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.css']
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
  display = this.CSS_CLASS_TO_HIDE;

  changeDisplayValue() {
    this.display = this.isMouseOver ? this.CSS_CLASS_TO_HIDE : '';
    this.isMouseOver = !this.isMouseOver;
  }
}
