import { ActionReducer, Action } from '@ngrx/store';
import { ItemI } from '../models/item.model';

export const INIT_ITEMS = 'INIT_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const itemsReducer: ActionReducer<any> = (state: ItemI[] = [], action: Action) => {
  switch (action.type) {
    case 'INIT_ITEMS':
      return action.payload;
    case 'ADD_ITEM':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_ITEM':
      return state.filter(item => item._id !== action.payload);
    case 'UPDATE_ITEM':
      return state.map((item: ItemI) => {
        if (item._id === action.payload._id) {
          return {
            _id: action.payload._id,
            title: action.payload.title,
            isDone: action.payload.isDone
          };
        }
        return item;
      });
      
    default:
      return state;
  }
}
