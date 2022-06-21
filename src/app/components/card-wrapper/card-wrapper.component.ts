import { Component, OnInit } from '@angular/core';
import Weapon from 'src/types/Weapon';
import { WeaponsService } from '../../services/weapons.service';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css'],
})
export class CardWrapperComponent implements OnInit {
  weapons: Weapon[] = [];

  constructor(private weaponService: WeaponsService) {
    weaponService.get().subscribe((res) => {
      this.weapons = res;
    });
  }

  ngOnInit(): void {
    this.weaponService.weaponEmitter.subscribe((data) => {
      if (data instanceof Array) {
        this.weapons = data;
        return;
      }

      this.weapons = [];
      this.weapons.push(data);
    });
  }
}
