import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-theaters-index',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './movie-theaters-index.component.html',
  styleUrl: './movie-theaters-index.component.css'
})
export class MovieTheatersIndexComponent {

}
