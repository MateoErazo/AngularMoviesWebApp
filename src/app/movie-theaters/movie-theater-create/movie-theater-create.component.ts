import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-theater-create',
  imports: [MatButtonModule],
  templateUrl: './movie-theater-create.component.html',
  styleUrl: './movie-theater-create.component.css'
})
export class MovieTheaterCreateComponent {
  router = inject(Router)
  saveChanges = () => {
    this.router.navigate(['movie-theaters'])
  }

}
