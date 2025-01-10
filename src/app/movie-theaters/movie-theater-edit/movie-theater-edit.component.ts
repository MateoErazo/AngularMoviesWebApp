import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-movie-theater-edit',
  imports: [],
  templateUrl: './movie-theater-edit.component.html',
  styleUrl: './movie-theater-edit.component.css'
})
export class MovieTheaterEditComponent {
  @Input({transform: numberAttribute})
  id!:number

}
