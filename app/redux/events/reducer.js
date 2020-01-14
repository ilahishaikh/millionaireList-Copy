import { LOGOUT } from "../auth/types";
import {
  CREATE_EVENT,
  GET_EVENTS,
  DELETE_EVENT,
  EDIT_EVENT,
  ADD_MEMBER,
  EXIT_EVENT_GROUP
} from "./types";

const INITIAL_STATE = {
  loading: false,
  events: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MEMBER.REQUEST:
    case EDIT_EVENT.REQUEST:
    case CREATE_EVENT.REQUEST:
    case DELETE_EVENT.REQUEST:
    case GET_EVENTS.REQUEST:
    case EXIT_EVENT_GROUP.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_MEMBER.ERROR:
    case EDIT_EVENT.ERROR:
    case CREATE_EVENT.ERROR:
    case DELETE_EVENT.ERROR:
    case GET_EVENTS.ERROR:
    case EXIT_EVENT_GROUP.ERROR: {
      return {
        ...state,
        loading: false,
        error: payload
      };
    }
    case GET_EVENTS.SUCCESS: {
      return {
        ...state,
        loading: false,
        events: payload
      };
    }
    case EDIT_EVENT.SUCCESS:
    case CREATE_EVENT.SUCCESS: {
      return {
        ...state,
        events: {
          ...state.events,
          [payload.id]: payload
        },
        loading: false
      };
    }
    case ADD_MEMBER.SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case EXIT_EVENT_GROUP.SUCCESS: {
      const { memberList, eventId } = payload;
      return {
        ...state,
        loading: false,
        events: {
          ...state.events,
          [eventId]: {
            ...state.events[eventId],
            members: memberList
          }
        }
      };
    }
    case DELETE_EVENT.SUCCESS: {
      const { [payload.id]: value, ...newEventList } = state.events;
      return {
        ...state,
        loading: false,
        events: newEventList
      };
    }
    case LOGOUT.SUCCESS: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
