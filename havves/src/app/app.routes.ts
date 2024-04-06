import { Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { StarterComponent } from './pages/starter/starter.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'dessert', component: DessertComponent },
    { path: 'starter', component: StarterComponent },
    { path: 'search', component: SearchComponent },
];
