import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book?: Book; // Property öffnen, damit es von außen beschrieben werden darf
  @Output() addToCart = new EventEmitter<Book>();


  doAddToCart() {
    if (this.book) {
      this.addToCart.emit(this.book);
    }

    // Alternative:
    // this.book && this.addToCart.emit(this.book);
  }

}
