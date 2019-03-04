import { string } from "prop-types";

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';

export function addNote(title: string, content: string) {
    return {
        type: ADD_NOTE,
        title: title,
        content: content
    }
}

export function updateNote(id: any, title: string, content: string) {
    return {
        type: UPDATE_NOTE,
        id: id,
        title: title,
        content: content
    }
}

export function removeNote(title: string) {
    return {
        type: REMOVE_NOTE,
        title: title
    }
}