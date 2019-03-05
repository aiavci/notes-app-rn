/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { getNotes } from "../storage"

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';

export function startLoading() {
  return {
    type: FETCH_NOTES,
    isLoading: true
  }
}

export function setNotes(allNotes: Array<any>) {
  console.log('check allNotes', JSON.stringify(allNotes, null, 2))
  return {
    type: FETCH_NOTES,
    isLoading: false,
    allNotes: allNotes
  }
}

export function fetchNotes() {
  return function (dispatch: any) {
    dispatch(startLoading())
    return getNotes((allNotes: Array<any>) => {
      dispatch(setNotes(allNotes))
    })
  }
}

/**
 * Add new note
 * @param title Note title
 * @param content Note content
 */
export function addNote(title: string, content: string) {
  return {
    type: ADD_NOTE,
    title: title,
    content: content
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