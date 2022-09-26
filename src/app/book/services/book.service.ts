import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books:Book[] = [
    {
      id: 34,
      name: "How Do You Make It Work",
      authors: [
        "Aldrin Morada",
        "Alison Pedrozo",
        "Jhon Daniel Catalan"
      ],
      isbn:"87-11-07559-7"
    },
    {
      id: 14,
      name: "Into The Vortex",
      authors: [
        "Ted Bundy",
        "John Wayne Gacy",
        "Jeffrey Dahmer",
        "The Zodiac Killer",
        "Jack the Ripper",
        "Richard Ramirez"
      ],
      isbn:"0-471-19047-0"
    }
  ]
  constructor() { }

  getBooks() {
    return this.books
  }
}
