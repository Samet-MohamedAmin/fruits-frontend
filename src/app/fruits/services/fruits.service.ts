import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fruit } from '../models/fruit';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  PATH_FRUITS = "/fruits"
  BACKEND_URL: String;

  constructor(private http: HttpClient){
    this.BACKEND_URL = 
  }

  sendFruit(fruit: Fruit): Observable<Fruit> {
    const URL:string = environment.BACKEND_URL + this.PATH_FRUITS;
    return this.http.post<Fruit>(URL, {...fruit});
  }

  getFruits(): Observable<Fruit[]> {
    const URL:string = environment.BACKEND_URL + this.PATH_FRUITS;
    return this.http.get<Fruit[]>(URL);
    // return this.getFruitsDummy()
  }

  sendFruitDummy(fruit: Fruit): Observable<Fruit> {
    console.log("sendFruit()")
    console.log(fruit)
    return new Observable<Fruit>()
  }

  getFruitsDummy(): Observable<Fruit[]> {
    const dummyFruits: Fruit[] = [
      {id: "1", name: "fruit_1", description: "fruit_1"},
      {id: "2", name: "fruit_2", description: "fruit_2"},
      {id: "3", name: "fruit_3", description: "fruit_3"},
      {id: "4", name: "fruit_4", description: "fruit_4"},
    ]
    console.log("getFruits()")
    return of(dummyFruits)
  }
}
