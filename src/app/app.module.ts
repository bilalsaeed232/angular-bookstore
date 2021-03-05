import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BookListComponent } from './components/book-list/book-list.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BookEffects } from './state/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CollectionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 35,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
