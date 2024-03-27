import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component'; // Importerar RecipeListComponent

export const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'register', component: RegisterUserComponent}
];
