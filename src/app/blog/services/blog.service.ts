import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public blogs:Blog[] = [
    {
      id: 24,
      title: "I am Groot",
      description: "I am Groot",
      author: "I am Groot",
      comments: [
        "I am Groot",
        "I am Groot",
        "I am Groot"
      ]
    },
    {
      id: 7,
      title: "Thor: Love and Thunder",
      description: "Beeeeebbbeeeeeehhhhh",
      author: "Goat",
      comments: [
        "BEEEHHBEHH",
        "BBEEEEHHHH",
        "BEEHBEEHHHBEEEH"
      ]
    }
  ]
  constructor() { }

  getBlogs() {
    return this.blogs
  }

}
