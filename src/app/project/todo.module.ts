import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoViewComponent} from './components/todo-view/todo-view.component';

@NgModule({
  declarations: [TodoViewComponent],
  imports: [
    CommonModule,
  ],

  exports: [
    TodoViewComponent,
  ]
})

export class TodoModule {
  
}