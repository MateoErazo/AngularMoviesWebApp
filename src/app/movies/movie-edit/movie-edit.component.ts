import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-movie-edit',
  imports: [],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent {
  @Input({transform: numberAttribute})
  id!:number

}
