// Thunk Descriptors
const GET_CATCHES = 'brews/GET_CATCHES'

// Thunk Actions
const getAll = (catches) => ({
    type: GET_CATCHES,
    catches
  });

// Thunk Action Creators
export const getAllCatches = () => async (dispatch) => {
const response = await fetch('/api/catches');

if (response.ok) {
    const data = await response.json();
    if (data.errors) {
    return data.errors;
    }
    dispatch(getAll(data));
}
}


// Reducer
const initialState = {  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_CATCHES:
        const catches = action.catches
        return {...state, ...catches}
      default:
        return state;
    }

  }