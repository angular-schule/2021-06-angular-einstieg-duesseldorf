import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs';
import { Book } from './shared/book';
import { BookStoreService } from './shared/book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService implements Resolve<Book> {

  constructor(private bs: BookStoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isbn = route.paramMap.get('isbn')!;
    return this.bs.getSingle(isbn)// .pipe(delay(3000));
  }
}
