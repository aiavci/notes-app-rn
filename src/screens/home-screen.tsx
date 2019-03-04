import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { addNote } from '../actions';

import { AddNoteButton } from "../components"

import { NotesList } from "../containers"

import {getNotes} from '../storage'

class HomeScreen extends React.Component<any> {
  
  componentDidMount() {
    getNotes((allNotes: any[]) => {
      console.log('allNotes', allNotes.length)
      allNotes.forEach((note) => {
        console.log('note', note)
        this.props.addNote(note.title, note.content)
      })
    })
  }

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

const mapStateToProps = (state: any, props: any) => {
  return {}
};

const mapDispatchToProps = {
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);