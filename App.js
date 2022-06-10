import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Tarefas de Hoje */}
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Tarefas de hoje</Text>

        <View style={styles.items}>
          {/* Colocando as tarefas na tela */}
          <Task text={'Tarefa 1'} />
          <Task text={'Tarefa 2'} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    
  },
});
