import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-genders-index',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './genders-index.component.html',
  styleUrl: './genders-index.component.css'
})
export class GendersIndexComponent {

}
