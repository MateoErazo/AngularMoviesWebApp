import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreationDTO, ActorDTO } from '../actors';
import { ActorFormComponent } from "../actor-form/actor-form.component";

@Component({
  selector: 'app-actor-edit',
  imports: [ActorFormComponent],
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

  actor : ActorDTO = {id:this.id, name:'Tom Holand', birthDate: new Date(2025,1,4)
  }

  saveChanges(actor : ActorCreationDTO){
    console.log('editing the actor:',actor)
  }

}
