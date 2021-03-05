import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  @Input() books;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
