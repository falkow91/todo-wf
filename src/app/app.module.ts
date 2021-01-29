import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './project/todo.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { TodoInMemDataService } from './project/services/todo-in-mem-data.service';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TodoInMemDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
