/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { GET_NOTES, ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE } from "../actions";

import {saveNote} from '../storage'

let nextNoteId = 0;

const INITIAL_STATE = [
  { id: nextNoteId, title: "sample note title", content: "Sample note content" }
]

export default function reducer(state = { isLoading: true, notes: INITIAL_STATE }, action: any) {
  switch (action.type) {
    case ADD_NOTE:
      const newId = ++nextNoteId
      saveNote({id: newId, title: action.title, content: action.content})
      return {
        ...state,
        notes: state.notes.concat({
          id: newId,
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