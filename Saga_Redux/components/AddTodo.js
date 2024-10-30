import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from "react-native"

export default function AddToDo({navigation, route}){
  const [job, setJob] = useState('');
  const { userName} = route.params || {};

  return(
    <View style={styles.container}>
      <View style={[styles.navigate, {alignItems:'center'}]}>
        <View style={styles.userInfo}>
          <Image style={styles.avatar} source={require('../assets/Avatar.png')}></Image>
          <View style={styles.message}>
            <Text style={styles.h1}>Hi {userName}</Text>
            <Text style={styles.h2}>Have agrate day a head</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ToDoList', { userName })}>
          <Image source={require('../assets/Back.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.textAddJob}>ADD YOUR JOB</Text>
      <View style={styles.input}>
        <TextInput style={styles.inputName} placeholder="Input your job" value={job}
          onChangeText={text => setJob(text)} />
        <Image style={styles.iconInput} source={require('../assets/Job.png')}></Image>
      </View>  
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList', { job, userName})}>
        <Text style={styles.buttonText}>FINISH -></Text>
      </TouchableOpacity>
      <Image source={require('../assets/Image95.png')}></Image>
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
  textAddJob:{
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 48,
    color: '#171A1F'
  }
});


