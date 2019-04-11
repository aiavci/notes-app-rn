/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const NoteItemWrapper = styled.TouchableHighlight`
  padding: 16px;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
`;

type Props = {
  onPress: any,
  title: string
};

const NoteItem = ({title = '', onPress = ''}: Props) => (
  <NoteItemWrapper onPress = { onPress }>
    <Text>{title}</Text>
  </NoteItemWrapper>
)

export default NoteItem;