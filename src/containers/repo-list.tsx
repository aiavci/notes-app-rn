import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from '../reducer';

class RepoList extends Component<any> {
  componentDidMount() {
    this.props.listRepos('aiavci');
  }
  renderItem = (listItem: any) => (
    <View style={styles.item}>
      <Text>{listItem.item.name}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = (state: any) => {
  let storedRepositories = state.repos.map((repo: any) => ({ key: "" + repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);