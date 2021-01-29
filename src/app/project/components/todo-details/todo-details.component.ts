import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../../todo';
import { IState as TodoState, selectTodo } from '../../store/todo.reducers';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  public todo$: Observable<Todo>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ todo: TodoState }>
  ) { }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.store.select((state) => selectTodo(state.todo, Number(params.get('id'))))));   
  }
}
