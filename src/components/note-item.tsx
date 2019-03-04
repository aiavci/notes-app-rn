import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NoteItem extends Component<any> {
  render() {
    return (
      <View style={styles.item}>
        <Text>{this.props.title}</Text>
      </View>
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