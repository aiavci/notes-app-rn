/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';
import { View, Button, TextInput } from 'react-native';

import { connect } from 'react-redux';

import { addNote, updateNote } from '../actions';

class NewNoteScreen extends React.Component<any> {
  state = {
    title: this.props.title || '',
    content: this.props.content || '',
  }
  static navigationOptions = {
    title: 'New Note',
  };

  handleSave() {
    if(this.props.title) {
      this.props.updateNote(this.props.id, this.state.title, this.state.content)
    } else {
      this.props.addNote(this.state.title, this.state.content)
    }
  }

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
            style = {{flexGrow: 1}}
            placeholder = "Note"
            onChangeText = {(content) => this.setState({content})}
            multiline
            value={this.state.content}
          />
        <View style={{marginBottom: 36}}>
          <Button
            title = "Save Note"
            onPress = {
              () => {
                this.handleSave();
                this.props.navigation.navigate('Home')
              }
            }
          />
        </View>
      </View>
    );
  }  
}

const mapStateToProps = (state: any, props: any) => {
  const title = props.navigation.getParam('title');
  
  const note = state.notes.find((elem1: any) => { return elem1.title == title});

  if (note == null) {
    return {}
  }

  return {
    id: note.id,
    title: note.title,
    content: note.content
  }
};

const mapDispatchToProps = {
  addNote,
  updateNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteScreen);