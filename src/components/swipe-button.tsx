import React from 'react';

import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';

import { removeNote } from '../actions';

import { NoteItem } from '.'

class AddNoteButton extends React.Component<any> {
  swipeBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => { this.props.removeNote(this.props.title)}
    }
  ];
  render() {
    return (
      <Swipeout
        right={this.swipeBtns}
        autoClose
        backgroundColor = 'transparent'
      >
        <NoteItem title = { this.props.title } onPress = { this.props.onPress }/>
      </Swipeout>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {}
};

const mapDispatchToProps = {
  removeNote
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteButton);