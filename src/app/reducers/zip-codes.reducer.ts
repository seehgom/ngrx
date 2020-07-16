import {
  ZipCodeActions,
  AddZipCodes,
  ZipCodeActionTypes,
} from './../actions/zip-code.actions';
import { Action } from '@ngrx/store';

export const zipCodesFeatureKey = 'zipCodes';

export interface ZipCodeState {
  zipcodes: Array<string>;
}

export const initialState: ZipCodeState = {
  zipcodes: [],
};

export function zipcodeReducer(
  state = initialState,
  action: ZipCodeActions
): ZipCodeState {
  switch (action.type) {
    case ZipCodeActionTypes.AddZipCodes:
      return { ...state, zipcodes: [...state.zipcodes, action.zipcode] };
    case ZipCodeActionTypes.RemoveZipCodes:
      return {
        ...state,
        zipcodes: state.zipcodes.filter((item) => item !== action.zipcode),
      };

    default:
      return state;
  }
}
