import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AddNoteButton } from "../components"

import { NotesList } from "../containers"

export default class HomeScreen extends React.Component<any> {
    static navigationOptions = {
      title: 'Notes',
    };

    render() {
      return (
        <View style = { styles.homeScreen }>
          <NotesList navigation={this.props.navigation} />
          <AddNoteButton navigation = { this.props.navigation }/>
        </View>
      );
    }  
  }

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'space-between'
  }
});