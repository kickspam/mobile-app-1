/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm';   

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym', 
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />  
      <ToDoForm addTask={addTask} />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // You can keep global styles here if needed for the whole app
});

export default App;
