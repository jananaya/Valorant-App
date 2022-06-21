import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() label = '';
  @Input() option = '';
  @Output() dropdownEvent = new EventEmitter<string>();

  changeSelectedItem(item: string) {
    this.dropdownEvent.emit(item);
  }

  ngOnInit(): void {
  }
}
