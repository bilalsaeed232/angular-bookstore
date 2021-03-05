import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BookListComponent } from './components/book-list/book-list.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CollectionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 35,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
