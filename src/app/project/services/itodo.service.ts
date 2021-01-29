import { Observable } from 'rxjs';
import { Todo } from '../todo';

export interface ITodoService {
   
  getTodos(): Observable<Todo[]>;
  getTodo(id: number): Observable<Todo>;
  addTodo(title: string): Observable<Todo>;
  deleteTodo(todo: Todo | number): Observable<Todo>;
  searchTodo(term: string): Observable<Todo[]>;
  updateTodo(todo: Todo): Observable<Todo>;
 
}