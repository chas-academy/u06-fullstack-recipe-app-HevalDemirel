import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  id: string  = '';
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService){}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getRecipe()
  }

  getRecipe(){
    this.recipeService.getRecipeById(this.id).subscribe(result=> {
      console.log(result)
      this.recipe = result.recipe
    })
  }

}


