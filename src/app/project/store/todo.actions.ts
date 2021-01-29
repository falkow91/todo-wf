import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo';

export const fetch = createAction('[Todos] fetch todos');
export const receive = createAction('[Todos] receive todos', props<{ todos: Todo[] }>());
export const update = createAction('[Todos] update todo', props<{ id: number, todo: Todo }>());
export const updated = createAction('[Todos] update todo success', props<{ todo: Todo }>());
export const updateFail = createAction('[Todos] update todo fail');
export const create = createAction('[Todos Page] create todo', props<{ todo: Partial<Todo> }>());
export const created = createAction('[Todos Page] create todo success', props<{ todo: Todo }>());
export const createFail = createAction('[Todos Page] create todo fail');

