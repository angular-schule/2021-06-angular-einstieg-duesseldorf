import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    CartDisplayComponent,
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookCreateComponent,
    EntryComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
