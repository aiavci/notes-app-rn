import React from 'react';
import { View, Text } from 'react-native';

import { RepoList } from "../containers"

export default class RepositoriesScreen extends React.Component<any> {
    static navigationOptions = {
      title: 'Repositories',
    };
    render() {
      return (
        <View>
          <Text>Repositories Screen</Text>
          <RepoList />
        </View>
      );
    }  
  }