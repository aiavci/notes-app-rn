/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { getNotes, saveNote, deleteNote, saveLastId } from "../storage"

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';

let lastGeneratedNoteId = 0;

/**
 * Generate new note ID
 */
function generateNoteId() {
  return ++lastGeneratedNoteId;
}

export function startLoading() {
  return {
    type: FETCH_NOTES,
    isLoading: true
  }
}

export function performFetch(lastId: string, allNotes: Array<any>) {
  return {
    type: FETCH_NOTES,
    isLoading: false,
    lastId: lastId,
    allNotes: allNotes.map((note) => { return JSON.parse(note) })
  }
}

export function fetchNotes() {
  return (dispatch: any) => {
    dispatch(startLoading())
    return getNotes((lastId: string, allNotes: Array<any>) => {
      dispatch(performFetch(lastId, allNotes))
    })
  }
}

export function addNoteAction(note: any) {
  return {
    type: ADD_NOTE,
    id: note.id,
    title: note.title,
    content: note.content
  }
}

/**
 * Add new note
 * @param title Note title
 * @param content Note content
 */
export function addNote(title: string, content: string) {
  return (dispatch: any) => {
    const noteId = generateNoteId();
    const note = {id: noteId, title: title, content: content};
    
    return saveNote(note, () => {
      saveLastId(lastGeneratedNoteId)
      dispatch(addNoteAction(note))
    })
  }
}

export function updateNoteAction(note: any) {
  return {
    type: UPDATE_NOTE,
    id: note.id,
    title: note.title,
    content: note.content
  }
}

/**
 * Update existing note
 * @param id Note ID
 * @param title Note title
 * @param content Note content
 */
export function updateNote(id: string, title: string, content: string) {
  return (dispatch: any) => {
    const note = {id: id, title: title, content: content};

    return saveNote(note, () => {
      dispatch(updateNoteAction(note))
    })
  }
}

export function removeNoteAction(id: string) {
  return {
    type: REMOVE_NOTE,
    id: id
  }
}

/**
 * Remove note
 * @param id Note ID
 */
export function removeNote(id: string) {
  return (dispatch: any) => {
    return deleteNote(id, () => {
      dispatch(removeNoteAction(id))
    })
  }
}