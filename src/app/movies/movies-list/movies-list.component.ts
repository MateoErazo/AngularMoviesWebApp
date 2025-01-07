import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.movies = [
        {
          title: 'Inside Out 2',
          releaseDate: new Date(),
          ticketValue: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
        },
        {
          title: 'Moana 2',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },
        {
          title: 'Deadpool & Wolverine',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          title: 'Oppenheimer',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          title: 'The Flash',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        },
        {
          title: 'Moana 2',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },
        {
          title: 'Deadpool & Wolverine',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          title: 'Oppenheimer',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          title: 'The Flash',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        },
        {
          title: 'Moana 2',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },
        {
          title: 'Deadpool & Wolverine',
          releaseDate: new Date('2016-05-03'),
          ticketValue: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        }
      ]
    },2000)
  }

  title = 'angular-movies'
  movies! : any[]

}
