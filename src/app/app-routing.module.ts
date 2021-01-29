import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from './project/components/todo-create/todo-create.component';
import { TodoDetailsComponent } from './project/components/todo-details/todo-details.component';
import { TodoViewComponent } from './project/components/todo-view/todo-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoViewComponent
  },
  {
    path: 'todos/:id/details',
    component: TodoDetailsComponent
  },
  {
    path: 'todos/create',
    component: TodoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

