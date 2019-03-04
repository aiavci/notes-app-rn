import React from 'react';
import { View, Button, TextInput } from 'react-native';

import { connect } from 'react-redux';

import { addNote } from '../actions';

class NewNoteScreen extends React.Component<any> {
  state = {
    title: '',
    content: ''
  }
  static navigationOptions = {
    title: 'New Note',
  };
  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1, flexDirection: 'column'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Title"
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextInput
            style={{flexGrow: 1}}
            placeholder="Note"
            onChangeText={(content) => this.setState({content})}
            editable = {true}
            multiline = {true}
          />
        <View style={{marginBottom: 36}}>
          <Button
            title="Save Note"
            onPress={
              () => {
                this.props.addNote(this.state.title, this.state.content)
                this.props.navigation.navigate('Home')
              }
            }
          />
        </View>
      </View>
    );
  }  
}

const mapStateToProps = (state: any) => {
  return {}
};

const mapDispatchToProps = {
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteScreen);