import { ADD_NOTE } from "../actions";

export const GET_NOTES = 'GET_NOTES';

const INITIAL_STATE = [
  { title: "sample note titlez", content: "Sample note content" }
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
    case GET_NOTES:
      return { ...state};
    default:
      return state;
  }
}