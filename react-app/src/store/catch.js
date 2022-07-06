// Thunk Descriptors
const GET_CATCHES = 'catches/GET_CATCHES'
const CREATE_CATCH = 'catches/CREATE_CATCH'

// Thunk Actions

const create = (indivCatch) => ({
  type: CREATE_CATCH,
  indivCatch
});

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

export const createCatch = (payload) => async (dispatch) => {
  const {
    img,
    fish,
    description,
    length,
    weight,
    bait,
    lure,
    long,
    lat,
    user_id
  } = payload
  console.log("*******************************************")
  console.log(img)

  const form = new FormData();

  form.append('img', img);
  form.append('fish', fish);
  form.append('description', description);
  form.append('length', length);
  form.append('weight', weight);
  form.append('bait', bait);
  form.append('lure', lure);
  form.append('long', long);
  form.append('lat', lat);
  form.append('user_id', user_id);



  const response = await fetch('/api/catches', {
    method: "POST",
    body: form
  });

  // const data = await response.json();
  // console.log(data)
if (response.ok) {
  const data = await response.json();
  if (data.errors) {
    return data;
  }

  dispatch(create(data));
  return data
}
}


// Reducer
const initialState = {  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_CATCH:
        return {...state, [action.catch.id] : action.catch }
      case GET_CATCHES:
        const catches = action.catches
        return {...state, ...catches}
      default:
        return state;
    }

  }