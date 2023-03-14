import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  deleteHero(){
    window.alert("Del the value")
  }
  condition = true;
  
  expression = "blue"
  

  @Input()size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.max(8, +this.size + delta);
    this.sizeChange.emit(this.size);
  }
  birthday = new Date(1988, 3, 15);
  chechUpperCase = "haii";
}
