/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';

import { View, Button } from 'react-native';

type Props = {
  navigation: any
};

type State = {};

export default class AddNoteButton extends React.Component<Props, State> {
  render() {
    return (
      <View style = {{ marginBottom: 36 }}>
        <Button
          onPress={() => this.props.navigation.navigate('NewNote')}
          title="Add Note"
          accessibilityLabel="New Note"
        />
      </View>
    )
  }
}