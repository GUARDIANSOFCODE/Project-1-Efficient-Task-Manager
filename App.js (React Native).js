import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Efficient Task Manager</Text>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
