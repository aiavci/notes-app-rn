export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES = 'GET_NOTES';

export function addNote(title: string, content: string) {
    return {
        type: ADD_NOTE,
        title: title,
        content: content
    }
}