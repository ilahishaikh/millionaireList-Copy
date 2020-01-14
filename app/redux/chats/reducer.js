import { LOGOUT } from "../auth/types";
import {
  RECIEVE_MESSAGES,
  SEND_MESSAGE,
  SET_ACTIVE_CHAT_ID,
  UPLOADING_MEDIA,
  DELETE_MESSAGE,
  MARK_AS_READ,
  CURRENT_CHAT,
  CURRENT_CHAT_RESET,
  UPDATE_MESSAGE
} from "./types";

const INITIAL_STATE = {
  activeChatId: null,
  uploadingMedia: false,
  loading: false,
  chats: {},
  unreadCount: {},
  currentChat: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPLOADING_MEDIA.REQUEST: {
      return {
        ...state,
        uploadingMedia: true
      };
    }
    case CURRENT_CHAT:
      return { ...state, currentChat: payload.item };
    case CURRENT_CHAT_RESET:
      return { ...state, currentChat: {} };
    case UPLOADING_MEDIA.SUCCESS: {
      return {
        ...state,
        uploadingMedia: false
      };
    }
    case UPLOADING_MEDIA.ERROR: {
      return {
        ...state,
        uploadingMedia: false
      };
    }
    case SET_ACTIVE_CHAT_ID: {
      return {
        ...state,
        activeChatId: payload.chatWithId
      };
    }
    case RECIEVE_MESSAGES.REQUEST: {
      return state;
    }
    case RECIEVE_MESSAGES.SUCCESS: {
      let newChatsState = Object.assign({}, state.chats);
      let newChatUnreadState = Object.assign({}, state.unreadCount);

      payload.map(chat => {
        if (newChatsState?.[chat.chatWithId]) {
          newChatsState = {
            ...newChatsState,
            [chat.chatWithId]: {
              ...newChatsState[chat.chatWithId],
              [chat.mid]: chat
            }
          };
          if (state.activeChatId !== chat.chatWithId) {
            newChatUnreadState = {
              ...newChatUnreadState,
              [chat.chatWithId]: newChatUnreadState[chat.chatWithId]
                ? newChatUnreadState[chat.chatWithId] + 1
                : 1
            };
          }
        } else {
          newChatsState = {
            ...newChatsState,
            [chat.chatWithId]: {
              [chat.mid]: chat
            }
          };
          if (state.activeChatId !== chat.chatWithId) {
            newChatUnreadState = {
              ...newChatUnreadState,
              [chat.chatWithId]: 1
            };
          }
        }
      });

      return {
        ...state,
        chats: newChatsState,
        unreadCount: newChatUnreadState
      };
    }
    case UPDATE_MESSAGE: {
      const { mid, chatWithId } = payload;
      return {
        ...state,
        chats: {
          ...state.chats,
          [chatWithId]: {
            ...state.chats[chatWithId],
            [mid]: payload
          }
        }
      };
    }
    case SEND_MESSAGE.SUCCESS: {
      let chatList = {};

      const chatWithId =
        payload.chatType === "individual"
          ? payload.reciverId
          : payload.chatWithId;

      if (state.chats?.[chatWithId]) {
        chatList = { ...state.chats[chatWithId], [payload.mid]: payload };
      } else {
        chatList = { [payload.mid]: payload };
      }

      return {
        ...state,
        chats: {
          ...state.chats,
          [chatWithId]: chatList
        }
      };
    }
    case DELETE_MESSAGE.SUCCESS: {
      const { activeChatId, updatedChat } = payload;
      return {
        ...state,
        chats: {
          ...state.chats,
          [activeChatId]: updatedChat
        }
      };
    }
    case MARK_AS_READ: {
      return {
        ...state,
        unreadCount: {
          ...state.unreadCount,
          [payload]: 0
        }
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
