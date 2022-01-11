import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, EMPTY, map, Observable, switchAll, switchMap } from 'rxjs';
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
    // Synchroner Weg (PULL)
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // /books/details/:isbn
    // console.log('ISBN', isbn);

    console.log('BOOK DETAILS');
    console.log(this.route.snapshot.data);

    // Asynchroner Weg (PUSH)
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bs.getSingle(isbn).pipe(
        // delay(3000)
      ))
    );







  }

}
