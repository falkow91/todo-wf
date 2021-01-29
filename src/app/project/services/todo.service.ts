import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITodoService } from './itodo.service';
import { Todo } from '../todo';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
 
@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {
  
  private static readonly todosUrl = '/api/todos';
  constructor(private http: HttpClient) {
   }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.todosUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  // get by id - will 404 when id not found
  getTodo(id: number): Observable<Todo> {
    const url = `${TodoService.todosUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(
      catchError(this.handleError)
    );
  }
 
  addTodo(title: string): Observable<Todo> {
    const todo = { title: title, isDone: false };
    return this.http.post<Todo>(TodoService.todosUrl, todo, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  deleteTodo(todo: number | Todo): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${TodoService.todosUrl}/${id}`;
 
    return this.http.delete<Todo>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(TodoService.todosUrl, todo, cudOptions).pipe(
      map(() => todo),
      catchError(this.handleError)
    );
  }

   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }

}