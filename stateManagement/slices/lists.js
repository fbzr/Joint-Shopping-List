import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

export const addList = createAsyncThunk(
  'lists/add',
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
  'lists/remove',
  async ({id}, thunkAPI) => {
    return id;
  },
);

const listsSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {},
  extraReducers: {
    [addList.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [removeList.fulfilled]: (state, action) => {
      state = state.filter((list) => list.id !== action.payload);
    },
  },
});

// export const {addList, removeList} = listsSlice.actions;
export default listsSlice.reducer;
