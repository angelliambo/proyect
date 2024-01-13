import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ItemDto, ItemDescriptionDto, GetOneItemOutDto, GetAllItemsOutDto, GetOneItemDescriptionOutDto } from '../../types/item.dto'
import services from '../../services';

const states = {
  data: null,
  loading: false,
  error: false,
  success: false
}

type InitialState = {
  one: {
    data: ItemDto | null,
    loading: boolean,
    success: boolean
    error: any,
  },
  all: {
    data: ItemDto[] | null,
    loading: boolean,
    success: boolean
    error: any,
  }
  description: {
    data: ItemDescriptionDto | null,
    loading: boolean,
    success: boolean
    error: any,
  }
}

// Define initial state
const initialState: InitialState = {
  one: states,
  all: states,
  description: states,
};

// Async action to get one item
const getOne = createAsyncThunk(
  'item/getOne',
  async (payload: GetOneItemOutDto) => {
    console.log('get one - item by id - action', payload)
    const { response, error } = await services.items.getOne(payload);
    if (error) {
      throw new Error(error);
    }
    return response;
  }
);

// Async action to get all items
const getAll = createAsyncThunk(
  'item/getAll',
  async (payload: GetAllItemsOutDto) => {
    console.log('get all - items by keyword - action', payload)
    const { response, error } = await services.items.getAll(payload);
    if (error) {
      throw new Error(error);
    }
    return response;
  }
);

// Async action to update a item
const getDescription = createAsyncThunk(
  'item/getDescription',
  async (payload: GetOneItemDescriptionOutDto) => {
    console.log('get one - item description - action', payload)
    const { response, error } = await services.items.getItemDescription(payload);
    if (error) {
      throw new Error(error);
    }
    return response;
  }
);

// Create a item slice
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOne.pending, (state) => {
        state.one.data = null;
        state.one.loading = true;
        state.one.success = false;
        state.one.error = false;
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.one.data = action.payload;
        state.one.loading = false;
        state.one.success = true;
        state.one.error = false;
      })
      .addCase(getOne.rejected, (state, action) => {
        state.one.data = null;
        state.one.loading = false;
        state.one.success = false;
        state.one.error = action.error;
      })
      .addCase(getAll.pending, (state) => {
        state.all.data = null;
        state.all.loading = true;
        state.all.success = false;
        state.all.error = false;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.all.data = action.payload;
        state.all.loading = false;
        state.all.success = true;
        state.all.error = false;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.all.data = null;
        state.all.loading = false;
        state.all.success = false;
        state.all.error = action.error.message;
      })
      .addCase(getDescription.pending, (state) => {
        state.description.data = null;
        state.description.loading = true;
        state.description.success = false;
        state.description.error = false;
      })
      .addCase(getDescription.fulfilled, (state, action) => {
        state.description.data = action.payload;
        state.description.loading = false;
        state.description.success = true;
        state.description.error = false;
      })
      .addCase(getDescription.rejected, (state, action) => {
        state.description.data = null;
        state.description.loading = false;
        state.description.success = false;
        state.description.error = action.error.message;
      });
  },
});

// Export the async actions and the reducer
export { getOne, getAll, getDescription };
export default itemSlice.reducer;