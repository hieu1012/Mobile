import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,Modal} from 'react-native';

export default function App() {
 const [login, setLogin] = useState({ userName: '', passWord: '' });
 const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handLogin = () => {
    // setLogin ({userName:username, passWord: password})
    if(login.userName != '' && login.passWord !=0)
      setModalVisible(true);
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../icon_2a/avatar_user.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          // onChangeText={setUsername}
          onChangeText = {(text) => setLogin({...login, userName:text})}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../icon_2a/lock.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // secureTextEntry
          secureTextEntry={!showPassword}
          // onChangeText={setPassword}
          onChangeText = {(text) => setLogin({...login, passWord:text})}

        />
       <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconeye}>
          <Image
            source={require('../icon_2a/eye.png')}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPass}>
        Forgot your password?
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Username: {login.userName}</Text>
          <Text style={styles.modalText}>Password: {login.passWord}</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
    </Modal>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FBCB00',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 75,
    textAlign: 'left',
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
    // marginLeft: 10,
    // marginRight: 10,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 5,
    width: 30,
    height: 30,
  },
  iconeye:{
    position: 'absolute',
    left:'85%',
    top: 5,
    width: 30,
    height: 30,

  },
  input: {
    height: 40,
    fontSize: 18,
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 50, // Thêm khoảng cách để tạo không gian cho hình ảnh
    backgroundColor: '#D8BA3B',
    // width: '100%'
    
  },
  button: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPass: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 50,
    fontSize: 20,
  },  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

