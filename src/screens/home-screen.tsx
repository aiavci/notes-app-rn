/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { addNote } from '../actions';

import { AddNoteButton } from "../components"

import { NotesList } from "../containers"

import { getNotes } from '../storage'

class HomeScreen extends React.Component<any> {
  state = {
    isLoading: this.props.isLoading
  }

  componentDidMount() {
    getNotes((allNotes: any[]) => {
      allNotes.forEach((note) => {
        this.props.addNote(note.title, note.content)
      })
    })
  }

  static navigationOptions = {
    title: 'Notes',
  };

  render() {
    let displayedContent = null;
    if (this.state.isLoading) {
      displayedContent = (
        <View style={{padding: 10, alignItems: "center"}}>
          <ActivityIndicator/>
          <Text style = {{padding: 10}}>Loading Notes...</Text>
        </View>
      )
    } else {
      displayedContent = (
        <View>
          <NotesList navigation={this.props.navigation} />
          <AddNoteButton navigation = { this.props.navigation }/>
        </View>
      )
    }

    return (
      <View style = { styles.homeScreen }>
        {displayedContent}
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
  return {
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = {
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);