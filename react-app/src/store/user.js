const GET_USERS = 'users/GET_USERS';
const GET_USER_CATCHES = 'users/GET_USER_CATCHES';

const getAll = (users) => ({
    type: GET_USERS,
    users
});

const getCatches = (catches) => ({
    type: GET_USER_CATCHES,
    catches
});

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getAll(data));
    }
}

// export const getUserCatches = (id) => async (dispatch) => {
//     const response = await fetch(`/api/users/${id}/catches`);
//     if (response.ok) {
//       const data = await response.json();
//       if (data.errors) {
//         return data.errors;
//       }

//       dispatch(getCatches(data));
//     }
//   }

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            const users = action.users
            return {...state, ...users}
        default:
            return state;
    }
}