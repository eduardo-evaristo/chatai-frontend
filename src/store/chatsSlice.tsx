import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatMessage } from "../types";

interface ChatsState {
  chats: Chat[];
  selectedChat: null | string;
  currentChat: null | string;
  chatInteraction: ChatMessage[];
}

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (selectedChatId: string) => {
    console.log(selectedChatId);
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/chats/${selectedChatId}`,
      {
        method: "DELETE",
        headers: [
          ["authorization", `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`],
        ],
      }
    );
    //if (!res.ok) //reject
    const data = await res.json();

    const resChats = await fetch(`${import.meta.env.VITE_API_BASE_URL}/chats`, {
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    const dataChats = await resChats.json();

    return { data, dataChats };
  }
);

export const sendQuestion = createAsyncThunk(
  "chats/sendQuestion",
  async (args: ChatMessage, { getState, dispatch }) => {
    //Getting state to get current chat
    const state = getState() as { chats: ChatsState };

    //Immediately show balloon so user knows his action has been recorded
    dispatch(newUserBallon(args));

    //Sendind question to API
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/chats/${
        state.chats.currentChat
      }/questions`,
      {
        method: "POST",
        headers: [
          ["authorization", `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`],
        ],
        body: JSON.stringify({ prompt: args.content }),
      }
    );

    const data = await res.json();
    console.log(data);
    return data;
  }
);

const initialState: ChatsState = {
  selectedChat: null,
  chats: [],
  chatInteraction: [],
  currentChat: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    selectChat(state, action: PayloadAction<string>) {
      state.selectedChat =
        state.selectedChat === action.payload ? null : action.payload;
    },
    load(state, action: PayloadAction<Chat[]>) {
      state.chats = action.payload;
    },
    newUserBallon(state, action: PayloadAction<ChatMessage>) {
      state.chatInteraction.push(action.payload);
    },
    setCurrentChat(state, action: PayloadAction<string | null>) {
      state.currentChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteChat.fulfilled, (state, action) => {
      state.chats = action.payload.dataChats;
    });
    builder.addCase(sendQuestion.fulfilled, (state, action) => {
      state.chatInteraction.push({
        content: action.payload.answer,
        isFromUser: false,
      });
    });
  },
});

//Reducer
export default chatsSlice.reducer;
//Actions
export const { selectChat, load, newUserBallon, setCurrentChat } =
  chatsSlice.actions;
