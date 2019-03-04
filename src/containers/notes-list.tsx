import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { NoteItem } from "../components";

class NotesList extends Component<any> {
  renderItem = (listItem: any) => (
    <NoteItem title={listItem.item.title}/>
  );

  render() {
    const { notes } = this.props;
    return (
      <FlatList
        data={notes}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  let storedNotes = state.notes.map((note: any) => ({ key: "" + note.title, ...note }));

  return {
    notes: storedNotes
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);