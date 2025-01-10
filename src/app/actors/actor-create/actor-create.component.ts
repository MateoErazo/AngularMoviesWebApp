import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  imports: [MatButtonModule],
  templateUrl: './actor-create.component.html',
  styleUrl: './actor-create.component.css'
})
export class ActorCreateComponent {
  router = inject(Router)
  saveChanges = () => {
    this.router.navigate(['/actors'])
  }

}
