import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  content = "srikrishna";
  constructor(){
    console.log("constructor called");
  }
  ngOnDestroy(){
    
  }
  ngAfterViewChecked(): void {
    console.log("ng After View Checked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ng After Content Checked")
  }
  ngAfterContentInit(){
    console.log("after Content init")
  }
  ngDoCheck(): void {
    console.log("Docheck")
  }
  ngOnInit(): void {
    console.log("OnInt called");
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("onChanges")
  }



  UpdateData()
  {
    this.content = "haii";
  }
  
}
