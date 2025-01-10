import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-actor-edit',
  imports: [],
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

}
