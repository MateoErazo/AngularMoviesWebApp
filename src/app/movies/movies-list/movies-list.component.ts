import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenericListingComponent } from "../../shared/components/generic-listing/generic-listing.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, GenericListingComponent, MatButtonModule, MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  ngOnInit(): void {
    
  }

  title = 'angular-movies'
  @Input({required:true})
  movies! : any[]
  addMovie = ()=>{
    this.movies.push({
      title: "Default Movie",
      releaseDate: new Date('2025-01-12'),
      ticketValue: 327
    })
  }

  removeMovie = (movie:any) =>{
    const index = this.movies.findIndex( (currentMovie: any) => currentMovie.title === movie.title)
    this.movies.splice(index,1)
  }

}
