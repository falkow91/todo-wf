import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../services/todo.service';
import { Store } from '@ngrx/store/';
import * as TodoActions from '../../store/todo.actions';
import { IState as TodoState, selectAllTodos, selectDoneTodoList, selectUndoneTodoList } from '../../store/todo.reducers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  public IsFetching: Observable<boolean> = this.store.select(state => state.todo.isFetching);
  public todosDone$: Observable<Todo[]> = this.store.select(state => selectDoneTodoList(state.todo));
  public todosUndone$: Observable<Todo[]> = this.store.select(state => selectUndoneTodoList(state.todo));

  constructor(
    private store: Store<{ todo: TodoState }>,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.fetch());
  }

  public OnTodoToggle(todo2: Todo) {
    // todo2 read-only error ???
    var todo = {...todo2};
    todo.isDone = !todo.isDone;
    this.store.dispatch(
      TodoActions.update({
        id: todo.id,
        todo,
      }),
    );
  }

  public OnClickDetails(event: Event, todoId: number) {
    event.stopPropagation();
    this.router.navigate(['todos', todoId, 'details']);
  }

}
