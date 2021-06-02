import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-cart-display',
  templateUrl: './cart-display.component.html'
})
export class CartDisplayComponent {

  @Output() removeFromCart = new EventEmitter<number>();
  @Input() books: Book[] = [];

  get totalValue(): number {
    return this.books.reduce((acc, book) => acc + book.price, 0);
  }

  remove(i: number) {
    this.removeFromCart.emit(i);
  }

}