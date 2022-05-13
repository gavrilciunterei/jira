import { FC, useReducer, ReactNode, useEffect } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer, EntriesContext } from './';
import { entriesApi } from '../../apis';

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

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });

    dispatch({ type: '[Entry] - Add New', payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: '[Entry] - Update', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] - Refresh', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
