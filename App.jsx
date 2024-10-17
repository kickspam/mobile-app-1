/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm';   

function App() {
  return (
    <SafeAreaView>
      <ToDoList />  
      <ToDoForm />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // You can keep global styles here if needed for the whole app
});

export default App;
