import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestoService) {}
  //this collection object
  collection = {}; //  I think error was starting here

  ngOnInit(): void {
    // then add subscibe on it
    this.resto.getList().subscribe((result) => {
      console.warn(result);

      //pass object
      this.collection = result;
    });
  }
}
