import { Component, Input } from '@angular/core';

type Color = 'white' | 'black';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
})
export class BrandComponent {
  @Input() color: Color = 'black';
}
