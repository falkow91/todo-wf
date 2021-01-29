import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { TodoInMemDataService } from './project/services/todo-in-mem-data.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './project/store/todo.effects';
import * as TodoReducer from './project/store/todo.reducers';
import { TodoViewComponent } from './project/components/todo-view/todo-view.component'
import { SharedModule } from './project/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDetailsComponent } from './project/components/todo-details/todo-details.component';

  
@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TodoInMemDataService),
    StoreModule.forRoot({ todo: TodoReducer.reducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
