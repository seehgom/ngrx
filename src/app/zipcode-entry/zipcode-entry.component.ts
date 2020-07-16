import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent implements OnInit {
    zipcodes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
