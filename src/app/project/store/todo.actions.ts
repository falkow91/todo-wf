import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo';

export const fetch = createAction('[Todos] fetch todos');
export const receive = createAction('[Todos] receive todos', props<{ todos: Todo[] }>());
export const update = createAction('[Todos] update todo', props<{ id: number, todo: Todo }>());
export const updated = createAction('[Todos] update todo success', props<{ todo: Todo }>());
export const updateFail = createAction('[Todos] update todo fail');

