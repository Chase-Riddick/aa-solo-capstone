// Thunk Descriptors
const GET_CATCHES = 'catches/GET_CATCHES'
const CREATE_CATCH = 'catches/CREATE_CATCH'
const UPDATE_CATCH = 'catches/UPDATE_CATCH'
const DELETE_CATCH = 'catches/DELETE_CATCH'

// Thunk Actions
const creation = (indivCatch) => ({
  type: CREATE_CATCH,
  indivCatch
});

const getAll = (catches) => ({
    type: GET_CATCHES,
    catches
  });

const modification = (indivCatch) => ({
  type: UPDATE_CATCH,
  indivCatch
});

const deletion = (catchId) => ({
  type: DELETE_CATCH,
  catchId
})



// ****** CATCHES THUNK ACTION CREATORS ******

export const getAllCatches = () => async (dispatch) => {
const response = await fetch('/api/catches');

if (response.ok) {
    const data = await response.json();
    if (data.errors) {
    return data.errors;
    }
    dispatch(getAll(data));
    return null
}
}

export const updateCatch = (payload) => async (dispatch) => {
  console.log("**********************A***********************")
  console.log(payload)
  const {
    id,
    img,
    fish,
    description,
    length,
    weight,
    bait,
    lure,
    long,
    lat
  } = payload

  const form = new FormData();
  console.log("***********************B**********************")
  console.log(img)

  form.append('id', id);
  if (img !== null) {form.append('img', img)};
  form.append('fish', fish);
  form.append('description', description);
  form.append('length', length);
  form.append('weight', weight);
  form.append('bait', bait);
  form.append('lure', lure);
  form.append('long', long);
  form.append('lat', lat);

  console.log("***********************C**********************")
  console.log(form)
  console.log(form.img)

  const response = await fetch('/api/catches', {
    method: "PUT",
    body: form
  });


if (response.ok) {
  const data = await response.json();
  if (data.errors) {
    return data;
  }

  dispatch(modification(data));
  return null
}
}

export const createCatch = (payload) => async (dispatch) => {

  const {
    catch_time,
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

  const form = new FormData();
  form.append('catch_time', catch_time);
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

  if (response.ok) {
  const data = await response.json();
    if (data.errors) {
      return data;
    }
    dispatch(creation(data));
    return null
}
}

export const deleteCatch = (catchId) => async dispatch => {
  const response = await fetch(`/api/catches/${catchId}`, {
    method: "DELETE"
  })
  if (response.ok) {
    const data = await response.json()
    console.log(data)
    if(data.errors){
      return data;
    } else {
      dispatch(deletion(data['id']))
      return null
    }
  }
}

// ****** SUBPOSTS THUNK ACTION CREATORS ******

export const addSubpostToCatch = (payload) => async (dispatch) => {
  const {
    catch_id,
    content,
    user_id,
  } = payload

  const form = new FormData();
  form.append('catch_id', catch_id);
  form.append('content', content);
  form.append('user_id', user_id);

  const response = await fetch('/api/subposts', {
    method: "POST",
    body: form
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }

    dispatch(modification(data));
    return null
  }
}

export const updateSubpostOnCatch = (payload) => async (dispatch) => {
  const {
    id,
    user_id,
    catch_id,
    content,
  } = payload

  const form = new FormData();
  form.append('id', id);
  form.append('user_id', user_id);
  form.append('catch_id', catch_id);
  form.append('content', content);


  const response = await fetch('/api/subposts', {
    method: "PUT",
    body: form
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }

    dispatch(modification(data));
    return null
  }
}

export const deleteSubpostOnCatch  = (subpostId) => async dispatch => {
  const response = await fetch(`/api/subposts/${subpostId}`, {
    method: "DELETE"
  })
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }

    dispatch(modification(data));
    return null
  }
}


// Reducer
const initialState = { };

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_CATCHES:
        const catches = action.catches
        return {...state, ...catches}
      case CREATE_CATCH:
        return {...state, [action.indivCatch.id] : action.indivCatch }
      case UPDATE_CATCH:
        return {...state, [action.indivCatch.id] : action.indivCatch }
      case DELETE_CATCH:
        let newState = {...state}
        delete newState[action.catchId]
        return newState
      default:
        return state;
    }

  }