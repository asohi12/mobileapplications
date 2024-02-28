import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = () => {
  return (
    <View>
      <TextInput placeholder="Add a new task..." />
      <Button title="Add Task" onPress={() => { /* Handle adding task */ }} />
    </View>
  );
};

export default ToDoForm;
