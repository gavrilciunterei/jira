import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType = { type: '[Entry] - Add New'; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add New':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
