import { FC, useReducer, ReactNode, useId } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer, EntriesContext } from './';

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
        _id: useId(),
        description:
          'Pendiente: Amet quis aliqua sint pariatur ex irure cupidatat sit cupidatat ut. Dolor anim consequat ipsum ut cillum cillum officia veniam deserunt. Excepteur dolor in cillum amet ut amet proident reprehenderit anim.',
        status: 'pending',
        createdAt: Date.now(),
      },
      {
        _id: useId(),
        description:
          'Progress: Eu laborum ullamco ut in ea sunt officia ipsum do consectetur consectetur qui. Eiusmod ea laboris magna ipsum ullamco esse adipisicing quis exercitation consequat elit proident commodo pariatur. Non esse sunt voluptate commodo duis duis in est velit ullamco consequat magna aliqua. Duis sit cupidatat commodo nostrud eu incididunt consectetur ad sit reprehenderit deserunt. Ea ad quis ullamco aliqua eiusmod officia Lorem dolore exercitation velit ut.',
        status: 'in-progress',
        createdAt: Date.now() - 100000,
      },
      {
        _id: useId(),
        description:
          'Finished: Est minim cupidatat nulla laboris nisi officia ea eu id enim est ea tempor. Exercitation commodo tempor elit deserunt eu cillum nostrud exercitation ea ut ad excepteur. Occaecat laborum aliqua nisi non nisi ullamco voluptate anim.',
        status: 'finished',
        createdAt: Date.now() - 10000000,
      },
    ],
  };

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
