import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-wrapper',
  templateUrl: './svg-wrapper.component.html',
  styleUrls: ['./svg-wrapper.component.css']
})
export class SvgWrapperComponent implements OnInit {
  @Input() title: String = '';
  @Input() height: String = '85';
  @Input() width: String = '85';
  @Input() fillColor: 'white' | 'black' = 'black';
  @Input() icon: String = '';
  @Input() viewBox: String = '';

  ngOnInit(): void {
  }
}
