import { Component } from '@angular/core';
import Weapon from 'src/types/Weapon';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent {
  weapons: Weapon[] = [];
}
