/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';

import { View, Button } from 'react-native';

export default class AddNoteButton extends React.Component<any> {
  render() {
    return (
      <View style = {{ marginBottom: 36 }}>
        <Button
          onPress={() => this.props.navigation.navigate('NewNote')}
          title="Add Note"
          color="blue"
          accessibilityLabel="New Note"
        />
      </View>
    )
  }
}