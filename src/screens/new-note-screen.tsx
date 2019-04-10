/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';
import { View, Button, TextInput } from 'react-native';

import { connect } from 'react-redux';

import { addNote, updateNote } from '../actions';


type Props = {
  id?: number,
  title?: string,
  content?: string,
  updateNote: CallableFunction,
  addNote: CallableFunction,
  navigation: any
};

type State = {
  title: string,
  content: string
};
class NewNoteScreen extends React.Component<Props, State> {
  state = {
    title: this.props.title || '',
    content: this.props.content || '',
  }

  static navigationOptions = {
    title: 'New Note',
  };

  handleSave() {
    const title = this.state.title || "New Note - " + new Date().toDateString();

    if(this.props.title || this.props.content) {
      // If title or content are passed in to this component, update it
      this.props.updateNote(this.props.id, title, this.state.content)
    } else {
      this.props.addNote(title, this.state.content)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1, flexDirection: 'column'}}>
        <TextInput
          style={{height: 60, borderColor: 'gray', borderWidth: 1, fontSize: 24}}
          placeholder="Title"
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextInput
            style = {{flexGrow: 1, textAlignVertical: 'top'}}
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