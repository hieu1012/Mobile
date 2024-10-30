import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from "react-native"



const API_URL = 'https://67055186031fd46a830f85a3.mockapi.io/hgv/ToDoList';


export default function ToDoList({navigation, route}){
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoTitle, setEditTodoTitle] = useState('');

  const { userName} = route.params || {};
  const { job } = route.params || {};

  const fetchTodos = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setTodos(json);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const addTodo = async (jobTitle) => {
    if (!jobTitle) return;
    try{
      const response = await fetch(API_URL,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: todos.length + 1, title: jobTitle, completed: false }),
      });
      const newTodo = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }catch (error) {
      Alert.alert('Error', 'Failed to fetch todos');
    }
  };

  const editTodo = async (id, newTitle) => {
    if (!newTitle) return;
    try{
      const response = await fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/ToDoList/${id}`,{
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: newTitle}),
      });
      const updatedTodo  = await response.json();
      setTodos((prevTodos) => prevTodos.map(todo => 
      todo.id === id ? updatedTodo : todo
      ));
      setEditTodoId(null);
      setEditTodoTitle('');
    }catch (error) {
      Alert.alert('Error', 'Failed to fetch todos');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/ToDoList/${id}`, {
        method: 'DELETE',
      });

    setTodos(todos.filter(todo => todo.id !== id));

  } catch (error) {
    Alert.alert('Error', 'Failed to delete todo');
  }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    if (job) {
      addTodo(job); 
    }
  }, [job]);

  return (
    <View style={styles.container}>
      <View style={styles.navigate}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/Back.png')}></Image>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image style={styles.avatar} source={require('../assets/Avatar.png')}></Image>
          <View style={styles.message}>
            <Text style={styles.h1}>Hi {userName}</Text>
            <Text style={styles.h2}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputName} placeholder="Search"/>
        <Image style={styles.iconInput} source={require('../assets/Search.png')}></Image>
      </View>
      <FlatList style={styles.listToDo}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.toDo}>
            <View style={styles.toDoItem}>
              <Image style={styles.check} source={require('../assets/Check.png')} ></Image>
              <Text style={styles.toDoText}>{item.title}</Text>
            </View>
            
            <TouchableOpacity onPress={() => {
              setEditTodoId(item.id);
              setEditTodoTitle(item.title);
            }}>
              <Image source={require('../assets/Edit.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              deleteTodo(item.id)
            }}>
              <Image source={require('../assets/Trash.png')}></Image>
            </TouchableOpacity>
          </View>
        )}
      />
      {editTodoId && (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.inputEdit}
            placeholder="Edit todo"
            value={editTodoTitle}
            onChangeText={setEditTodoTitle}
          />
          <TouchableOpacity style={styles.buttonSave} onPress={() => editTodo(editTodoId, editTodoTitle)}> 
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('AddTodo', { userName })}> 
          <Image source={require('../assets/Add.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input:{
    height: 43,
    width: '80%',
    justifyContent: 'center',
  },
  inputName:{
    borderColor: '#9095A0',
    borderWidth: 1,
    height: '100%',
    borderRadius: 12,
    paddingLeft: 40,
    fontSize: 16,
    lineHeight: 26,
  },
  iconInput:{
    position: 'absolute',
    marginLeft: 10
  },

  navigate:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%'
  },
  avatar:{
    backgroundColor: '#D9CBF6',
    borderRadius: 25
  },
  userInfo: {
    flexDirection: 'row'
  },
  h1:{
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#171A1F'
  },
  h2:{
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: '#A1A1A1'
  },
  listToDo:{
    width: "85%",
    maxHeight: 350
  },
  toDo:{
    flexDirection: 'row',
    backgroundColor: '#DEE1E678',
    width: '100%',
    height: 48,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10
  },
  toDoItem:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },
  toDoText:{
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 26,
    color: '#171A1F',
    height: 30,
    marginLeft: 20
  },
  check:{
    width: 25,
    height: 25,
  },
  editContainer:{
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between'
  },
  inputEdit:{
    borderColor: '#9095A0',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 16,
    lineHeight: 26,
    paddingLeft: 20,
    width: '80%'
  },
  buttonSave:{
    backgroundColor: '#00BDD6',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonAdd:{
    height: 70,
    width: 70,
    backgroundColor: '#00BDD6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

});