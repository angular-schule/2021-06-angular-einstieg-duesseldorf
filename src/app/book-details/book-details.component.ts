import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn?: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn'); // :isbn
    // TODO: mit der ISBN => HTTP
    // BookStoreService: getSingle
    // Doku: https://api.angular.schule/swagger-ui
  }

}
