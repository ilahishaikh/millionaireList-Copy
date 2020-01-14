import { asyncActionType } from "../../util";

export const UPLOADING_MEDIA = asyncActionType("UPLOADING_MEDIA");
export const RECIEVE_MESSAGES = asyncActionType("RECIEVE_MESSAGES");
export const DELETE_MESSAGE = asyncActionType("DELETE_MESSAGE");
export const SEND_MESSAGE = asyncActionType("SEND_MESSAGE");
export const SET_ACTIVE_CHAT_ID = "SET_ACTIVE_CHAT_ID";
export const MARK_AS_READ = "MARK_AS_READ";
export const CURRENT_CHAT = "CURRENT_CHAT";
export const CURRENT_CHAT_RESET = "CURRENT_CHAT_RESET";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
