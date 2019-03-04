import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class NoteItem extends Component<any> {
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