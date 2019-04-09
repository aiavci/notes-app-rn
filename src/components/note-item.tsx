/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: any,
  title: string
};

type State = {};

class NoteItem extends Component<Props, State> {
  render() {
    return (
      <TouchableHighlight style = { styles.item } onPress = { this.props.onPress }>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

export default NoteItem;