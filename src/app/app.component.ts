import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './core/books.service';
import { AppState } from './state/app.state';
import { addBook, removeBook, loadBooksSuccess } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  collection$ = this.store.pipe(select(selectBookCollection));

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
    ) {

  }

  onAdd(bookId) {
    this.store.dispatch(addBook({bookId}))
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({bookId}))
  }

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe(Book => {
        this.store.dispatch(loadBooksSuccess({Book}))
      })
  }
  


}
