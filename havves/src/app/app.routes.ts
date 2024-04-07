import { Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { StarterComponent } from './pages/starter/starter.component';
import { SearchComponent } from './pages/search/search.component';
import { MainsComponent } from './pages/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},

    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainsComponent},
    { path: 'dessert', component: DessertComponent },
    { path: 'starter', component: StarterComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },

];
