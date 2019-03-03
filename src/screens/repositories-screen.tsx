import React from 'react';
import { View, Text } from 'react-native';

import { RepoList } from "../containers"

export default class RepositoriesScreen extends React.Component<any> {
    render() {
      return (
        <View>
          <Text>Repositories Screen</Text>
          <RepoList />
        </View>
      );
    }  
  }