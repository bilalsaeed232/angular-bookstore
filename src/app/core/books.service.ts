import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "../models/book.model";


@Injectable({
    providedIn: "root"
})
export class GoogleBooksService {
    private API_PATH = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Array<Book>> {
        return this.http.get<{ items: Array<Book> }>(this.API_PATH)
            .pipe(
                map( (books) => books.items || [])
            );
    }
 }