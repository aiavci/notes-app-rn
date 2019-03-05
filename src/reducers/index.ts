/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { GET_NOTES, ADD_NOTE, FETCH_NOTES, UPDATE_NOTE, REMOVE_NOTE } from "../actions";

const INITIAL_STATE = [
  { id: 0, title: "sample note title", content: "Sample note content" }
]

export default function reducer(state = { isLoading: true, notes: INITIAL_STATE }, action: any) {
  switch (action.type) {
    case FETCH_NOTES:
      state.isLoading = action.isLoading;
      if (action.allNotes) {
        state.notes = action.allNotes;
      }

    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat({
          id: action.id,
          title: action.title,
          content: action.content
        })
      };

    case UPDATE_NOTE:
      const note = state.notes.find(note => note.id == action.id)
      
      if (note) {
        note.title = action.title;
        note.content = action.content;
      }

      return {
        ...state
      };

    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.id)
      }

    case GET_NOTES:
      return { ...state};

    default:
      return state;
  }
}