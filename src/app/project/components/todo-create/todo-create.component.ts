import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../../todo';
import * as TodoActions from '../../store/todo.actions';
import { IState as TodoState } from '../../store/todo.reducers';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  
  public TodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<{ todo: TodoState }>, private router: Router) {}

  ngOnInit() {
    this.initTodoForm();
  }

  private initTodoForm(): void {
    this.TodoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }


  public OnSubmit(): void {
    if (this.TodoForm.valid) {
      const todo: Partial<Todo> = {
        title: this.TodoForm.value.title,
        description: this.TodoForm.value.description,
      };

      this.store.dispatch(TodoActions.create({ todo }));

      this.TodoForm.reset({
        title: '',
        description: '',
      });

      this.router.navigate(['/todos']);
    }
  }


}
