/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';

import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';

import { removeNote } from '../actions';

import { NoteItem } from '../components';

type Props = {
  id: number,
  title: string,
  onPress: any,
  removeNote: CallableFunction,
};

type State = {};

class SwipeButton extends React.Component<Props, State> {
  swipeButtonConfigurations = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => { this.props.removeNote(this.props.id)}
    }
  ];

  render() {
    return (
      <Swipeout
        right = { this.swipeButtonConfigurations }
        autoClose
        backgroundColor = 'transparent'
      >
        <NoteItem {...this.props} onPress = { this.props.onPress }/>
      </Swipeout>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = {
  removeNote
};

export default connect(mapStateToProps, mapDispatchToProps)(SwipeButton);