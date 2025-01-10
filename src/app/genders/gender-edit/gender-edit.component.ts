import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-gender-edit',
  imports: [],
  templateUrl: './gender-edit.component.html',
  styleUrl: './gender-edit.component.css'
})
export class GenderEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

}
