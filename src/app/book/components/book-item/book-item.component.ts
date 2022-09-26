import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book:Book | undefined;
  @Output() Emitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id:number) {
    this.Emitter.emit(this.book)
  }
  edit(id:number) {
    this.Emitter.emit(this.book)
  }


}
