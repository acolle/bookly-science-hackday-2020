import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {

  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      onPress={props.handleAddBook}
    />
  );
}
