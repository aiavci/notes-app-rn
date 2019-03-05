/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { SwipeButton } from "../components";

class NotesList extends Component<any> {
  renderItem = (listItem: any) => (
    <SwipeButton id = { listItem.item.id } title = { listItem.item.title } onPress = {() => this.props.navigation.navigate('NewNote', { title: listItem.item.title })}/>
  );

  render() {
    const { notes } = this.props;
    return (
      <FlatList
        data={notes}
        renderItem = { this.renderItem }
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  let storedNotes = state.notes.map((note: any) => ({ key: "note-" + note.id, ...note }));

  return {
    notes: storedNotes
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);