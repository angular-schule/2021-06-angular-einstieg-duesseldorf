import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  hasChanges = false;

  constructor() {
    // DEMO
    setTimeout(() => {
      this.hasChanges = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  reset() {
    this.hasChanges = false;
  }

}
