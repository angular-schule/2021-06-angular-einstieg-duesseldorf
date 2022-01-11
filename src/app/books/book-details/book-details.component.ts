import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    this.book$ = EMPTY; // TODO

    // Synchroner Weg (PULL)
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // /books/details/:isbn
    // console.log('ISBN', isbn);

    // Asynchroner Weg (PUSH)
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn')!; // Non-Null Assertion
      this.book$ = this.bs.getSingle(isbn);
    });
  }

}
