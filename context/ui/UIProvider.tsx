import { FC, useReducer, ReactNode } from 'react';
import { uiReducer, UIContext } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface Props {
  children?: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: 'UI - Is adding entry', payload: value });
  };

  const setStartDragging = () => {
    dispatch({ type: 'UI - Start Dragging' });
  };

  const setEndDragging = () => {
    dispatch({ type: 'UI - End Dragging' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setStartDragging,
        setEndDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
