import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { TodoService } from './../services/todo.service';


@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    ) { }
  
    fetchTodos$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.fetch),
      mergeMap(() => this.todoService.getTodos()
        .pipe(
          map(todos => TodoActions.receive({ todos })),
          catchError(() => of(TodoActions.receive({ todos: [] }))
          ))
      )));


    updateTodo$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
        ofType(TodoActions.update),
        mergeMap((action) => this.todoService.updateTodo(action.todo)
            .pipe(
            map(todo => TodoActions.updated({ todo })),
            catchError(() => of(TodoActions.updateFail()))
            ))
        ));
}
