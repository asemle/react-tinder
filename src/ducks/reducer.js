import profileService from '../services/profileService';


let initialState = {
    user: {pictures:[]},
    loading: false,
    name: '',
    description: '',
    NAME: '',
    AGE: '',
    stateA: '',
    WORK: '',
    SCHOOL: '',
    GENDER: 0,
    mortgage: 0,
    desiredRent: 0,
    properties: [],
}

// const UPDATE_USER = "UPDATE_USER";
// const LOGOUT = "LOGOUT";

// const RESET = "RESET";

const GET_USER = "GET_USER";
const GET_USER_PENDING = "GET_USER_PENDING";
const GET_USER_FULFILLED = "GET_USER_FULFILLED";

const UPDATE_USER = "UPDATE_USER"

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_ABOUT = "UPDATE_ABOUT";
const UPDATE_WORK = "UPDATE_WORK";
const UPDATE_SCHOOL = "UPDATE_SCHOOL";
const UPDATE_GENDER = "UPDATE_GENDER";






export default function (state = initialState, action) {
    let { payload } = action;
    switch (action.type) {

        // case UPDATE_USER:
        //     return Object.assign({}, state, { user: Object.assign({}, payload) });
        // case LOGOUT:
        //     return Object.assign({}, state, { user: {} });
        // case RESET:
        //     return Object.assign({}, payload);
        // case UPDATE_NAME:
        //     return Object.assign({}, state, { name: payload });
        // case UPDATE_DESCRIPTION:
        //     return Object.assign({}, state, { description: payload })
        case GET_USER_PENDING:
            return Object.assign({}, state, {loading:true})
        case GET_USER_FULFILLED:
            return Object.assign({}, state, {loading: false, user:action.payload})
        case UPDATE_USER:
            return Object.assign({}, state, { user: payload })

        case UPDATE_NAME:
            return Object.assign({}, state, { name: payload })
        case UPDATE_AGE:
            return Object.assign({}, state, { AGE: payload })
        case UPDATE_ABOUT:
            return Object.assign({}, state, { stateA: payload })
        case UPDATE_WORK:
            return Object.assign({}, state, { WORK: payload })
        case UPDATE_SCHOOL:
            return Object.assign({}, state, { SCHOOL: payload })
        case UPDATE_GENDER:
            return Object.assign({}, state, { GENDER: payload })
        // case UPDATE_MORTGAGE:
        //     return Object.assign({}, state, { mortgage: payload })
        // case UPDATE_DESIRED_RENT:
        //     return Object.assign({}, state, { desiredRent: payload })
        // case UPDATE_PROPERTIES:
        //     return Object.assign({}, state, { properties: payload })
        default: return state;
    }
}


// export function updateUser(user) {
//     return {
//         type: UPDATE_USER,
//         payload: user
//     }
// }

// export function logout() {
//     return {
//         type: LOGOUT,
//         payload: {}
//     }
// }

// export function reset(user) {
//     return {
//         type: RESET,
//         payload: {
//             user: user,
//             name: '',
//             description: '',
//             NAME: '',
//             AGE: '',
//             state: '',
//             WORK: '',
//             SCHOOL: '',
//             GENDER: 0,
//             mortgage: 0,
//             desiredRent: 0,
//             properties: []

//         }
//     }
// }
export function getUser() {
    return {
        type: GET_USER,
        payload: profileService.getUser()
    }
}

export function updateUser(user) {
    profileService.updateSwipes(user)
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAge(age) {
    return {
        type: UPDATE_AGE,
        payload: age
    }
}
export function updateAbout(about) {
    return {
        type: UPDATE_ABOUT,
        payload: about
    }
}

export function updateWork(work) {
    return {
        type: UPDATE_WORK,
        payload: work
    }
}

export function updateSchool(school) {
    return {
        type: UPDATE_SCHOOL,
        payload: school
    }
}

export function updateGender(gender) {
    return {
        type: UPDATE_ABOUT,
        payload: gender
    }
}
