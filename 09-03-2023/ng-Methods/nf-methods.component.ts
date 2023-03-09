import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nf-methods',
  templateUrl: './nf-methods.component.html',
  styleUrls: ['./nf-methods.component.css']
})
export class NfMethodsComponent implements OnChanges, OnDestroy{
  constructor(){
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("Onchange");
    console.log(changes);
  }

  items = ["haii","Sri","krishna"];
 
  senttochild = "hai from parent"
  messageid = false;
  checkId = "";
  checkUserId(event : Event){
    this.checkId = (<HTMLInputElement>event.target).value
     if(this.checkId.length >= 8){
      this.messageid = true;
    }   
  }
  getcolor(){
    if(this.messageid === true)
    {
      return 'green';
    }
    else{
      return 'red'
    }
  }
  childData(data : string)
  {
    console.log(data);
  }
  
}