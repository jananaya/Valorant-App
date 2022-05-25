import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-wrapper',
  templateUrl: './svg-wrapper.component.html',
  styleUrls: ['./svg-wrapper.component.css']
})
export class SvgWrapperComponent {
  @Input() title = '';
  @Input() height = '85';
  @Input() width = '85';
  @Input() fillColor = 'black';
  @Input() icon = '';
  @Input() viewBox = '';
}
