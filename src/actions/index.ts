/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { getNotes, saveNote } from "../storage"

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';

let nextNoteId = 0;

function generateNoteId() {
  return ++nextNoteId;
}

export function startLoading() {
  return {
    type: FETCH_NOTES,
    isLoading: true
  }
}

export function performFetch(allNotes: Array<any>) {
  return {
    type: FETCH_NOTES,
    isLoading: false,
    allNotes: allNotes.map((note) => { return JSON.parse(note) })
  }
}

export function fetchNotes() {
  return function (dispatch: any) {
    dispatch(startLoading())
    return getNotes((allNotes: Array<any>) => {
      dispatch(performFetch(allNotes))
    })
  }
}

export function performUpdateNote(id: any, title: string, content: string) {
  return {
    type: UPDATE_NOTE,
    id: id,
    title: title,
    content: content
  }
}

export function performSaveNote(id: any, title: string, content: string) {
  return {
    type: ADD_NOTE,
    id: id,
    title: title,
    content: content
  }
}

/**
 * Add new note
 * @param title Note title
 * @param content Note content
 */
export function addNote(title: string, content: string) {
  return function (dispatch: any) {
    const noteId = generateNoteId();
    const note = {id: noteId, title: title, content: content};

    return saveNote(note, () => {
      dispatch(performSaveNote(noteId, title, content))
    })
  }
}

/**
 * Update existing note
 * @param id Note ID
 * @param title Note title
 * @param content Note content
 */
export function updateNote(id: any, title: string, content: string) {
  return {
    type: UPDATE_NOTE,
    id: id,
    title: title,
    content: content
  }
}

/**
 * Remove note
 * @param id Note ID
 */
export function removeNote(id: string) {
  return {
    type: REMOVE_NOTE,
    id: id
  }
}