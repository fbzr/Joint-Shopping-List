import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

export const addList = createAsyncThunk(
  'collection/addList',
  async ({title}, thunkAPI) => {
    // make req to api using await
    // const newList = await listController.add(list);
    // return newList;
    return {
      title,
      id: nanoid(),
    };
  },
);

export const removeList = createAsyncThunk(
  'collection/removeList',
  async ({id}, thunkAPI) => {
    return id;
  },
);

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {lists: []},
  reducers: {},
  extraReducers: {
    [addList.fulfilled]: (state, action) => {
      state.lists.push(action.payload);
    },
    [removeList.fulfilled]: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

// export const {addList, removeList} = listsSlice.actions;
export default collectionSlice.reducer;
