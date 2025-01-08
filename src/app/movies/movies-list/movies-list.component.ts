import { Component, Input, OnInit } from '@angular/core';
import { GenericListingComponent } from "../../shared/components/generic-listing/generic-listing.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movies-list',
  imports: [GenericListingComponent, MatButtonModule, MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  title = 'angular-movies'
  @Input({required:true})
  movies! : any[]
}
