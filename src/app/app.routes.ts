import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GendersIndexComponent } from './genders/genders-index/genders-index.component';
import { CreateGenderComponent } from './genders/create-gender/create-gender.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { ActorCreateComponent } from './actors/actor-create/actor-create.component';
import { MovieTheatersIndexComponent } from './movie-theaters/movie-theaters-index/movie-theaters-index.component';
import { MovieTheaterCreateComponent } from './movie-theaters/movie-theater-create/movie-theater-create.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'genders', component:GendersIndexComponent},
    {path: 'genders/create', component: CreateGenderComponent},
    {path: 'actors', component: ActorsIndexComponent},
    {path: 'actors/create', component: ActorCreateComponent},
    {path: 'movie-theaters', component: MovieTheatersIndexComponent},
    {path: 'movie-theaters/create', component: MovieTheaterCreateComponent},
    {path: 'movies/create', component: MovieCreateComponent}
];
