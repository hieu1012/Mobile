// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator  } from '@react-navigation/stack';

// import EnterName from './components/EnterName'
// import ToDoList from './components/TodoList'
// import AddToDo from './components/AddTodo'
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen  name="Home" component={EnterName} options={{headerShown: false}} />
//         <Stack.Screen  name="TodoList" component={ToDoList} options={{headerShown: false}}/>
//         <Stack.Screen  name="AddTodo" component={AddToDo} options={{headerShown: false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

import React from 'react';
import { Provider } from 'react-redux';
import Store from './Saga_Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterName from './components/EnterName'
import ToDoList from './components/TodoList'
import AddToDo from './components/AddTodo'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider Store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EnterName">
          <Stack.Screen name="EnterName" component={EnterName} />
          <Stack.Screen name="AddToDo" component={AddToDo} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;