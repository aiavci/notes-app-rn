/*
 * Copyright (c) 2019 Ali I. Avci
 */
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';

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