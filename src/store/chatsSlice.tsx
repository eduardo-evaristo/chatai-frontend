import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../types";

interface ChatsState {
  chats: Chat[];
  selectedChat: null | string;
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

const initialState: ChatsState = { selectedChat: null, chats: [] };

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
  },
  extraReducers: (builder) => {
    builder.addCase(deleteChat.fulfilled, (state, action) => {
      state.chats = action.payload.dataChats;
    });
  },
});

//Reducer
export default chatsSlice.reducer;
//Actions
export const { selectChat, load } = chatsSlice.actions;
