import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'books', redirectTo: 'books/list', pathMatch: 'full' },
  { path: 'books/list', component: DashboardComponent },
  { path: 'books/details', redirectTo: 'books/details/9783864907791' },
  { path: 'books/details/:isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
