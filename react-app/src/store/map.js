//Thunk Descriptor
const LOAD_KEY = 'map/LOAD_KEY'

// Thunk Action
const loadKey = (key) => {
    return {
        type: LOAD_KEY,
        payload: key
    }
}

// Thunk Action Creator
export const getMapAPIKey = () => async (dispatch) => {
    const res = await fetch('/api/map/key');

    if (res.ok) {
        const data = await res.json()
        dispatch(loadKey(data.googleMapsAPIKey))
    }

}

const initialState = {mapAPIKey: null}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case LOAD_KEY:
            return {mapAPIKey: action.payload}
        default:
            return state
    }
}
