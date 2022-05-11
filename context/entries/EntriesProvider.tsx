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
    entries: [
      {
        _id: uuidv4(),
        description:
          'Pendiente: Amet quis aliqua sint pariatur ex irure cupidatat sit cupidatat ut. Dolor anim consequat ipsum ut cillum cillum officia veniam deserunt. Excepteur dolor in cillum amet ut amet proident reprehenderit anim.',
        status: 'pending',
        createdAt: Date.now(),
      },
      {
        _id: uuidv4(),
        description:
          'Progress: Eu laborum ullamco ut in ea sunt officia ipsum do consectetur consectetur qui. Eiusmod ea laboris magna ipsum ullamco esse adipisicing quis exercitation consequat elit proident commodo pariatur. Non esse sunt voluptate commodo duis duis in est velit ullamco consequat magna aliqua. Duis sit cupidatat commodo nostrud eu incididunt consectetur ad sit reprehenderit deserunt. Ea ad quis ullamco aliqua eiusmod officia Lorem dolore exercitation velit ut.',
        status: 'in-progress',
        createdAt: Date.now() - 100000,
      },
      {
        _id: uuidv4(),
        description:
          'Finished: Est minim cupidatat nulla laboris nisi officia ea eu id enim est ea tempor. Exercitation commodo tempor elit deserunt eu cillum nostrud exercitation ea ut ad excepteur. Occaecat laborum aliqua nisi non nisi ullamco voluptate anim.',
        status: 'finished',
        createdAt: Date.now() - 10000000,
      },
    ],
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

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
