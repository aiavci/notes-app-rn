/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { AsyncStorage } from 'react-native'

export const saveNote = async (note: any, callback: CallableFunction) => {
    try {
      await AsyncStorage.setItem('note-' + note.id, JSON.stringify(note));
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

export const getNotes = async (callback: any) => {
    try {
      let allNotes: Array<any> = [];

      const allKeys = await AsyncStorage.getAllKeys();

      await asyncForEach(allKeys, async (key: string) => {
        await AsyncStorage.getItem(key).then((note: any) => {
           allNotes.push(note);
        })
      });

      callback(allNotes)
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

export const removeNote = async (note: any) => {
    try {
      await AsyncStorage.removeItem('note-' + note.id);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };


async function asyncForEach(array: Array<any>, callback: CallableFunction) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}