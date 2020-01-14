import SET_STATUS_BAR from "./types"

const INITIAL_STATE = {
  status: false,
  type: "",
  title: "",
  message: "",
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_STATUS_BAR: {
      return payload
    }
    default:
      return state
  }
}

export default reducer
