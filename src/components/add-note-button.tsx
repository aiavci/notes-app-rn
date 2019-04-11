/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { useEffect, useRef } from 'react';

import { View, Button, Animated } from 'react-native';

type Props = {
  navigation: any
};

type State = {};

const AnimatedButton = ({ onPress }: any) => {
  const scale = runAnimatedScale();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Button
        onPress={onPress}
        title="Add Note"
        accessibilityLabel="New Note"
      />
    </Animated.View>
  );
};

const runAnimatedScale = () => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, { toValue: 1 }).start();
  });

  return scale;
};

export default class AddNoteButton extends React.Component<Props, State> {

  render() {
    return (
      <View style={{ marginBottom: 36 }}>
        <AnimatedButton onPress={() => this.props.navigation.navigate('NewNote')} />
      </View>
    )
  }
}