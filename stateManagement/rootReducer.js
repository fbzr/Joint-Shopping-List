import {combineReducers} from '@reduxjs/toolkit';
import listsReducer from './slices/lists';

const rootReducer = combineReducers({
  lists: listsReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
