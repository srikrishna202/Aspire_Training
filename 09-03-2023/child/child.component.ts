import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentData = "haii";
  @Output() senttoparent = new EventEmitter<string>()
  senttoParent(){
    this.senttoparent.emit("haii this is child")
  }
  
}
