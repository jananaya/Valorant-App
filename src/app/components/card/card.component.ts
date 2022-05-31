import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title = '';
  @Input() imagePath = '';
  @Input() imageAlt = '';
  @Input() brief = '';
  @Input() classes: string[] = [];
}
