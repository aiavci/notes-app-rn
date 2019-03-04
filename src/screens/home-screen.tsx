import React from 'react';
import { View, Text, Button } from 'react-native';

import { AddNoteButton } from "../components"

import { NotesList } from "../containers"

export default class HomeScreen extends React.Component<any> {
    static navigationOptions = {
      title: 'Notes',
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <NotesList/>
          <AddNoteButton navigation = {this.props.navigation}/>
        </View>
      );
    }  
  }