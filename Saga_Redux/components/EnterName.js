import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from "react-native"

// export default function EnterName({navigation}){
//   const [name, setName] = useState('');

//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/Image95.png')}></Image>
//       <Text style={styles.textManager}>MANAGE YOUR{'\n'}TASK</Text>
//       <View style={styles.input}>
//         <TextInput style={styles.inputName} placeholder="Enter your name" value={name} 
//           onChangeText={text => setName(text)}/>
//         <Image style={styles.iconInput} source={require('../assets/Frame.png')}></Image>
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText} onPress={() => navigation.navigate('TodoList', { userName: name })}>GET STARTED</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

import { useDispatch } from 'react-redux';
export default function EnterName({navigation}){
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch({ type: 'SET_USER_NAME', payload: name });
    navigation.navigate('ToDoList');
  };
  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/Image95.png')}></Image>
      <Text style={styles.textManager}>MANAGE YOUR{'\n'}TASK</Text>
      <View style={styles.input}>
        <TextInput style={styles.inputName} placeholder="Enter your name" value={name} 
          onChangeText={text => setName(text)}/>
        <Image style={styles.iconInput} source={require('../assets/Frame.png')}></Image>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('TodoList', { userName: name })}>GET STARTED</Text>
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
  textManager:{
    fontFamily: 'Epilogue',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 36,
    color: '#8353E2',
    textAlign: 'center'
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
  button:{
    height: 44,
    width: '50%',
    backgroundColor: '#00BDD6',
    borderRadius: 12,
    justifyContent: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 26,
    fontWeight: 400
  },
  
})