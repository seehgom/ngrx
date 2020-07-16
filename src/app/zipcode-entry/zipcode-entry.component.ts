import { AddZipCodes } from './../actions/zip-code.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss'],
})
export class ZipcodeEntryComponent implements OnInit {
  zipcodes$: Observable<Array<string>>;

  constructor(private store: Store<State>) {
    this.zipcodes$ = this.store
      .select((state) => state.zipcodes)
      .pipe(
        tap((ev) => console.log(ev)),
        map((zips) => zips.zipcodes)
      );
    // .subscribe((zips) => (this.zipcodes = zips.zipcodes));
  }

  ngOnInit(): void {}
  addZipcode(zipcode: string): void {
    this.store.dispatch(new AddZipCodes(zipcode));
  }
}
