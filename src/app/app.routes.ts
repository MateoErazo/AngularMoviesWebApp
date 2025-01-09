import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GendersIndexComponent } from './genders/genders-index/genders-index.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'genders', component:GendersIndexComponent}
];
