import { FC, useReducer, ReactNode } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer, EntriesContext } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children?: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
  };

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    };

    dispatch({ type: '[Entry] - Add New', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Update', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
