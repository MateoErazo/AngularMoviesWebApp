import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActorFormComponent } from "../actor-form/actor-form.component";
import { ActorCreationDTO } from '../actors';

@Component({
  selector: 'app-actor-create',
  imports: [MatButtonModule, ActorFormComponent],
  templateUrl: './actor-create.component.html',
  styleUrl: './actor-create.component.css'
})
export class ActorCreateComponent {
  router = inject(Router)
  saveChanges = (actor: ActorCreationDTO) => {
    //this.router.navigate(['/actors'])
    console.log('Creating the actor:',actor)
  }

}
