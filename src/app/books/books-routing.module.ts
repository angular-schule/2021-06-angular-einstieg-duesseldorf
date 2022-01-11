import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from '../access.guard';
import { BookCreateComponent } from './book-create/book-create.component';

import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    // canActivateChild: [AccessGuard],
    // alle diese Kinder werden in das Outlet der EntryComponent geladen
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: DashboardComponent },
      {
        path: 'create',
        component: BookCreateComponent,
        canActivate: [AccessGuard],
        canDeactivate: [AccessGuard]
      },
      { path: 'details', redirectTo: 'details/9783864907791' },
      { path: 'details/:isbn', component: BookDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
