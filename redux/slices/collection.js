import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

export const addList = createAsyncThunk(
  'collection/addList',
  async ({title}, thunkAPI) => {
    // make req to api using await
    // const newList = await listController.add(list);
    // return newList;
    return {
      id: nanoid(),
      title: title || Date.now(),
      createdAt: Date.now(),
      items: [],
    };
  },
);

export const removeList = createAsyncThunk(
  'collection/removeList',
  async ({id}, thunkAPI) => {
    // TODO: backend request
    return id;
  },
);

export const addItem = createAsyncThunk(
  'collection/addItemToList',
  async ({listId, title}, thunkAPI) => {
    // TODO: backend request
    return {
      id: nanoid(),
      title,
      listId,
      createdAt,
    };
  },
);

export const removeItem = createAsyncThunk(
  'collection/removeItemFromList',
  async ({listId, itemId}, thunkAPI) => {
    // TODO: backend request
    return {
      id: itemId,
      listId,
    };
  },
);

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    lists: {}, 
    loading: 'idle'
  },
  reducers: {},
  extraReducers: {
    // RTK allows DIRECT STATE MUTATION because it uses immer under the hood

    [addList.fulfilled]: (state, action) => {
      state.lists[action.id] = action.payload;
    },

    [removeList.fulfilled]: (state, action) => {
      const id = action.payload;
      delete state.lists[id];
    },

    [addItem.fulfilled]: (state, action) => {
      const {listId} = action.payload;
      state.lists[listId].items.push(action.payload);
    },

    [removeItem.fulfilled]: (state, action) => {
      const {listId, id} = action.payload;
      state.lists[listId].items = state.lists[listId].items.filter(
        (item) => item.id !== id,
      );
    },
  },
});

// export const {addList, removeList} = listsSlice.actions;
export default collectionSlice.reducer;
