import { GET_NOTES, ADD_NOTE, REMOVE_NOTE } from "../actions";

const INITIAL_STATE = [
  { title: "sample note title", content: "Sample note content" }
]

export default function reducer(state = { notes: INITIAL_STATE }, action: any) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat({
          title: action.title,
          content: action.content
        })
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.title !== action.title)
      }
    case GET_NOTES:
      return { ...state};
    default:
      return state;
  }
}