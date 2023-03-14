import { Component } from '@angular/core';

@Component({
  selector: 'template-varible',
  template:`<input #phone placeholder="phone number" />
  <button type="button" (click)="callPhone(phone.value)">Call</button>
  `
})
export class TemplateVaribleComponent {
  callPhone(data: String)
  {
    console.log(data);
  }
}
