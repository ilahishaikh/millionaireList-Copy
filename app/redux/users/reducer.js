import {LOGOUT} from "../auth/types";
import {GET_USER_CHAT_USERS, GET_USERS} from "./types";

const INITIAL_STATE = {
    loading: false,
    users: {},
    chatUserList: []
};

const reducer = (state = INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch (type) {
        case GET_USERS.REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case GET_USERS.ERROR: {
            return {
                ...state,
                loading: false,
                error: payload
            };
        }
        case GET_USERS.SUCCESS: {
            return {
                ...state,
                loading: false,
                users: payload
            };
        }
        case LOGOUT.SUCCESS: {
            return INITIAL_STATE;
        }
        case GET_USER_CHAT_USERS.SUCCESS: {
            return {
                ...state,
                loading: false,
                chatUserList: payload
            };
        }
        default:
            return state;
    }
};

export default reducer;
