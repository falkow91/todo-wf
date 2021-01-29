import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class TodoInMemDataService implements InMemoryDbService {
  
  constructor() { }

  createDb() {
    let todos: Todo[] = [
      { id: 1, title: 'Etape 1', isDone: false },
      { id: 2, title: 'Etape 2' , isDone: false },
      { id: 3, title: 'Etape 3' , isDone: true },
      { id: 4, title: 'Etape 4' , isDone: true },
      { id: 5, title: 'Etape 5' , isDone: false },
    ];  
    return {todos};   
  }
}
