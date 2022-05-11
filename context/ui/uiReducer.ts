import { UIState } from './';

type UIActionType = {
  type: 'UI - Open Sidebar' | 'UI - Close Sidebar' | 'UI - Is adding entry';
  payload?: boolean;
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - Is adding entry':
      return {
        ...state,
        isAddingEntry: action.payload || false,
      };
    default:
      return state;
  }
};
