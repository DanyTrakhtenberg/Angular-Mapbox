import { createReducer, on } from "@ngrx/store";
import { Feature } from "geojson";
import { DATA } from "src/assets/Data";

export let initialState: { [id: string]: Feature } = DATA;

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export function annotationsReducer(
  state: { [id: string]: Feature } = initialState,
  action
) {
  let mappings: { [id: string]: Feature } = {};
  switch (action.type) {
    case ADD_FEATURE:
      mappings = { ...state };
      mappings[action.payload.id] = action.payload;
      state = mappings;
      return mappings;
    case REMOVE_FEATURE:
      mappings = { ...state };
      delete mappings[action.payload];
      state = mappings;
      return state;
    default:
      return state;
  }
}
