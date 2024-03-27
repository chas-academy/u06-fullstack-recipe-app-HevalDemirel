import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('RecipeListComponent is initialized');
  }

  handleRecipeClick(recipeName: string): void {
    console.log('Klick på', recipeName);
  }
}
