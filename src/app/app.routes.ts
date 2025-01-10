import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GendersIndexComponent } from './genders/genders-index/genders-index.component';
import { CreateGenderComponent } from './genders/create-gender/create-gender.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { ActorCreateComponent } from './actors/actor-create/actor-create.component';
import { MovieTheatersIndexComponent } from './movie-theaters/movie-theaters-index/movie-theaters-index.component';
import { MovieTheaterCreateComponent } from './movie-theaters/movie-theater-create/movie-theater-create.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { GenderEditComponent } from './genders/gender-edit/gender-edit.component';
import { ActorEditComponent } from './actors/actor-edit/actor-edit.component';
import { MovieTheaterEditComponent } from './movie-theaters/movie-theater-edit/movie-theater-edit.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'genders', component:GendersIndexComponent},
    {path: 'genders/create', component: CreateGenderComponent},
    {path: 'genders/edit/:id', component: GenderEditComponent},
    {path: 'actors', component: ActorsIndexComponent},
    {path: 'actors/create', component: ActorCreateComponent},
    {path: 'actors/edit/:id', component: ActorEditComponent},
    {path: 'movie-theaters', component: MovieTheatersIndexComponent},
    {path: 'movie-theaters/create', component: MovieTheaterCreateComponent},
    {path: 'movie-theaters/edit/:id', component: MovieTheaterEditComponent},
    {path: 'movies/create', component: MovieCreateComponent},
    {path: 'movies/edit/:id', component: MovieEditComponent},
    {path: '**', redirectTo: ''}
];
