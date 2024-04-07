import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-mains',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainsComponent {
  dishType = "Main course";
  recipes?: any;
  constructor(private recipeService: RecipeService, private router: Router) { }
  recieveRecipes(recipes: any[]) {
    this.recipes = recipes
  }
  recipeDetails(recipe: any) {
    let startIndex = recipe.self.indexOf("/v2/") + 4; 
    let endIndex = recipe.self.indexOf("?");
    let extractedId = recipe.self.substring(startIndex, endIndex);
    console.log(extractedId);
    this.router.navigate(['/recipe', extractedId]);
  }
}
