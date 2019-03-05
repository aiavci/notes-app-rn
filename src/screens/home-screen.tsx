/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';

import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { AddNoteButton } from "../components"

import { NotesList } from "../containers"

import { fetchNotes } from "../actions"

class HomeScreen extends React.Component<any> {
  state = {
    isLoading: this.props.isLoading,
  }

  static navigationOptions = {
    title: 'Notes',
  };

  componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    let displayedContent = null;
    if (this.props.isLoading) {
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

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);