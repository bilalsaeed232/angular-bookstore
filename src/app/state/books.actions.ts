import { createAction, props } from "@ngrx/store";


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId }>()
);

export const removeBook = createAction(
    '[Book List] Remove Book',
    props<{ bookId }>()
);

export const loadBooks = createAction(
    '[Book List/API] Load Books',
);

export const loadBooksSuccess = createAction(
    '[Book List/API] Load Books Success',
    props<{ Book }>()
);

export const loadBooksFailure = createAction(
    '[Book List/API] Load Books Failure',
    props<{ Book }>()
);

