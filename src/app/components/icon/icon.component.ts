import { Component, Input } from '@angular/core';

type Color = 'white' | 'black';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() color: Color = 'black';
}
