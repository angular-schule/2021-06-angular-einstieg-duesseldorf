import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  cart: Book[] = [];
  d = new Date();

  // "private" vor dem Argument sorgt dafür, dass das Property "bs" automatisch
  // deklariert und initialisiert wird
  constructor(private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  // im ngOnInit sind Input-propertys bereits initialisiert – im Konstruktor noch nicht!
  ngOnInit(): void {
  }

  doAddToCart(book: Book) {
    this.cart.push(book);
    console.log(this.cart);
  }

  removeFromCart(index: number) {
    this.cart = this.cart.filter((_, i) => i !== index);
  }

}
