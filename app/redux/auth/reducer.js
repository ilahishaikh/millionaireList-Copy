import {
  LOGIN,
  LOGOUT,
  SET_FCM_TOKEN,
  SET_EMPLOYEE_ID,
  SET_LOCATION,
  GET_PROFILE_DETAILS,
  SET_PROFILE_DETAILS,
  DELETE_PROFILE_DETAILS,
  UPLOADING_PROFILE_PHOTO,
  PROFILE_UPDATED_SUCCESSFULLY
} from "./types";

const INITIAL_STATE = {
  loading: false,
  isAuthorised: false,
  isAccountDeleted: false,
  uploadingMedia: false,
  updatingProfile: false,
  profileUpdatedSuccessfully: false
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
 // console.log("type in reducer : " + type);
  switch (type) {
    case PROFILE_UPDATED_SUCCESSFULLY.SUCCESS: {
      return {
        ...state,
        profileUpdatedSuccessfully: false
      };
    }
    case UPLOADING_PROFILE_PHOTO.SUCCESS: {
      return {
        ...state,
        uploadingMedia: false
      };
    }
    case UPLOADING_PROFILE_PHOTO.ERROR: {
      return {
        ...state,
        uploadingMedia: false
      };
    }
    case UPLOADING_PROFILE_PHOTO.REQUEST: {
      return {
        ...state,
        uploadingMedia: true
      };
    }
    case SET_FCM_TOKEN.REQUEST:
    case SET_EMPLOYEE_ID.REQUEST:
    case SET_LOCATION.REQUEST:
    case LOGIN.REQUEST:
    case LOGOUT.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_FCM_TOKEN.ERROR:
    case SET_EMPLOYEE_ID.ERROR:
    case SET_LOCATION.ERROR:
    case LOGIN.ERROR:
    case LOGOUT.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case SET_FCM_TOKEN.SUCCESS:
    case SET_EMPLOYEE_ID.SUCCESS:
    case SET_LOCATION.SUCCESS:
    case LOGIN.SUCCESS: {
      return {
        ...state,
        isAuthorised: true,
        loading: false,
        ...payload
      };
    }
    case LOGOUT.SUCCESS: {
      return INITIAL_STATE;
    }
    case GET_PROFILE_DETAILS.SUCCESS: {
      return {
        ...state,
        ...payload
      };
    }
    case SET_PROFILE_DETAILS.REQUEST: {
      return {
        ...state,
        updatingProfile: true,
        profileUpdatedSuccessfully: false
      };
    }
    case SET_PROFILE_DETAILS.SUCCESS: {
      return {
        ...state,
        ...payload,
        updatingProfile: false,
        profileUpdatedSuccessfully: true
      };
    }
    case SET_PROFILE_DETAILS.ERROR: {
      return {
        ...state,
        updatingProfile: false,
        profileUpdatedSuccessfully: false

      };
    }
    case DELETE_PROFILE_DETAILS.SUCCESS: {
      return {
        isAccountDeleted: true
      };
    }
    default:
      return state;
  }
};

export default reducer;
