import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component<any> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Check repository list"
            onPress={() => this.props.navigation.navigate('Repositories')}
          />
        </View>
      );
    }  
  }