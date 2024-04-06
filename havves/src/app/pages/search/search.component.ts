import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Input() dishType = "";
  @Output() recipesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  querySearch = '';
  selectedMeal = '';
  recipes: any
  mealList = [
    { value: 'alcohol-free', name: 'Alcohol Free' },
    { value: 'celery-free', name: 'Celery Free' },
    { value: 'crustacean-free', name: 'Crustacean Free' },
    { value: 'dairy-free', name: 'Dairy Free' },
    { value: 'DASH', name: 'DASH' },
    { value: 'egg-free', name: 'Egg Free' },
    { value: 'fish-free', name: 'Fish Free' },
    { value: 'fodmap-free', name: 'FODMAP Free' },
    { value: 'gluten-free', name: 'Gluten Free' },
    { value: 'immuno-supportive', name: 'Immuno Supportive' },
    { value: 'keto-friendly', name: 'Keto Friendly' },
    { value: 'kidney-friendly', name: 'Kidney Friendly' },
    { value: 'kosher', name: 'Kosher' },
    { value: 'low-fat-abs', name: 'Low Fat ABS' },
    { value: 'low-potassium', name: 'Low Potassium' },
    { value: 'low-sugar', name: 'Low Sugar' },
    { value: 'lupine-free', name: 'Lupine Free' },
    { value: 'Mediterranean', name: 'Mediterranean' },
    { value: 'mollusk-free', name: 'Mollusk Free' },
    { value: 'mustard-free', name: 'Mustard Free' },
    { value: 'no-oil-added', name: 'No Oil Added' },
    { value: 'paleo', name: 'Paleo' },
    { value: 'peanut-free', name: 'Peanut Free' },
    { value: 'pescatarian', name: 'Pescatarian' },
    { value: 'pork-free', name: 'Pork Free' },
    { value: 'red-meat-free', name: 'Red Meat Free' },
    { value: 'sesame-free', name: 'Sesame Free' },
    { value: 'shellfish-free', name: 'Shellfish Free' },
    { value: 'soy-free', name: 'Soy Free' },
    { value: 'sugar-conscious', name: 'Sugar Conscious' },
    { value: 'sulfite-free', name: 'Sulfite Free' },
    { value: 'tree-nut-free', name: 'Tree Nut Free' },
    { value: 'vegan', name: 'Vegan' },
    { value: 'vegetarian', name: 'Vegetarian' },
    { value: 'wheat-free', name: 'Wheat Free' }
];
  constructor(private recipeService: RecipeService) { }
  onSearch() {
    this.recipeService.getRecipes(this.querySearch, this.dishType, this.selectedMeal).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  getRecommendations() {
    this.recipeService.getRecipes('', this.dishType).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  ngOnInit(): void {
    this.getRecommendations();
  }
}