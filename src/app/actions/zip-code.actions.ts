import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipCodes = '[ZipCode] Add ZipCodes',
  RemoveZipCodes = '[ZipCode] Remove ZipCodes',
}

export class AddZipCodes implements Action {
  readonly type = ZipCodeActionTypes.AddZipCodes;
  constructor(public zipcode: string) {}
}

export class RemoveZipCodes implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipCodes;
  constructor(public zipcode: string) {}
}

export type ZipCodeActions = AddZipCodes | RemoveZipCodes;
