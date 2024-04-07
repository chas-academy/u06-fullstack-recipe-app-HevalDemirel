import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2';
  private app_key = 'dde760ae17ce5e9ade3ff09c0478f8cc';
  private app_id = '5b9defec';
  private httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      'Accept-Language': 'en',
    }),
  };
  constructor(private http: HttpClient) { }
  getRecipes(
    searchterm: string,
    dishType: string,
    meal: string = '',
  ): Observable<any> {
    let url = this.baseUrl + '?type=public' + '&q=' + searchterm + '&app_id=' + this.app_id + '&app_key=' + this.app_key + '&dishType=' + dishType + '&random=true'
    if (meal) {
      url += '&meal=' + meal;
      }
    console.log(url);
    return this.http.get<any>(url, this.httpOptions);
  }
  getRecipeById(id: string) {
    let url = this.baseUrl + '/' + id + '?type=public' + '&app_id=' + this.app_id + '&app_key=' + this.app_key;
    return this.http.get<any>(url, this.httpOptions);
  }
}

