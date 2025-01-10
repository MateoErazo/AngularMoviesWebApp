import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gender',
  imports: [MatButtonModule],
  templateUrl: './create-gender.component.html',
  styleUrl: './create-gender.component.css'
})
export class CreateGenderComponent {
  router = inject(Router);

  saveChanges = () => {
    this.router.navigate(['/genders'])
  }

}
