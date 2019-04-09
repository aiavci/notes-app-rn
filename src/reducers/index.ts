/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { GET_NOTES, ADD_NOTE, FETCH_NOTES, UPDATE_NOTE, REMOVE_NOTE } from "../actions";

const INITIAL_STATE = { 
  isLoading: true, notes: Array()
}

export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        isLoading: action.isLoading,
        id: action.lastId,
        notes: action.allNotes || []
      };

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