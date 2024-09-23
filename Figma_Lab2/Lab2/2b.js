// import {useState} from 'react'
// import {View,StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native'
// function Figma2b (){
//   const [sent, setSent] = useState('')
//   const [texinput, setTextinput] = useState('')
//   return(
//     <View style={styles.container}>
//        <View style={styles.usb}> 
//         <Image
//           style={styles.img_usb}
//           source={require('../icon_2b/usb.png')}
//         />
//         <Text style={styles.text}>
//           USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa bluetooth
//         </Text>
//        </View>
//        <View style={styles.star}>
//         <Text style={{fontSize: 18, fontWeight: 'Bold', marginBottom:20,}}>
//           Cực kỳ hài lòng
//         </Text>
//         <View style={{flexDirection: 'row'}}>
//           <Image style={styles.img_star} source= {require('../icon_2b/Star 1.png')}/>
//           <Image style={styles.img_star} source= {require('../icon_2b/Star 1.png')}/>
//           <Image style={styles.img_star} source= {require('../icon_2b/Star 1.png')}/>
//           <Image style={styles.img_star} source= {require('../icon_2b/Star 1.png')}/>
//           <Image style={styles.img_star} source= {require('../icon_2b/Star 1.png')}/>
//         </View>
//        </View>
//        <View style={{flexDirection:'row',justifyContent: 'center', borderColor:'blue', borderWidth:1, borderRadius:5,paddingHorizontal:53, paddingVertical: 20 }}>
//         <Image source={require('../icon_2b/camera.png')}/>
//         <Text style={{fontSize: 18, fontWeight: 'Bold', marginTop:4, marginLeft:20 }}>Thêm hình ảnh</Text>
//        </View>
//        <View>
//         <TextInput
//           style={{
//             borderWidth:1,
//             borderRadius:5,
//             borderColor: 'rgba(0, 0, 0, 0.3)',
//             width: 300, // Đặt chiều rộng của ô nhập
//             height: 150, // Đặt chiều cao của ô nhập
//             padding: 10, // Khoảng cách bên trong giữa viền và nội dung
//             marginTop: 15, // Khoảng cách bên ngoài giữa các phần tử
//             textAlignVertical: 'top', // Đặt con trỏ ở trên cùng
//             fontSize: 18,
//             fontWeight: 'Bold',
//           }}
//           placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm"
//           multiline={true} // Cho phép nhập nhiều dòng
//           placeholderTextColor="gray" 
//         />
//        </View>
//       <TouchableOpacity
//         style={{
//           marginTop: 20,
//           paddingHorizontal: 136, 
//           paddingVertical: 15,
//           backgroundColor:'#0D5DB6',
//           borderColor: '#1511EB',
//           borderRadius:5
//         }}
//       >
//         <Text style={{fontSize: 18, fontWeight: 'Bold', color: 'white'}}>Gửi</Text>
//       </TouchableOpacity>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//   margin: 20,
//   alignItems:'center'
//   },
//   usb:{
//     flexDirection: 'row',
//   },
//   img_usb:{
//     marginRight: 5
//   },
//   text:{
//     fontSize: 16,
//      fontWeight: 'Bold'
//   },
//   star:{
//     alignItems:'center',
//     marginTop: 30,
    
//   },
//   img_star:{
//     marginLeft:15,
//     marginBottom: 30
//   },
// })

// export default Figma2b

import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

function Figma2b() {
  const [textInput, setTextInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSend = () => {
    if (textInput.trim() !== '') {
      setModalMessage('Gửi thành công!');
    } else {
      setModalMessage('Vui lòng nhập chữ vào ô input!');
    }
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.usb}>
        <Image
          style={styles.img_usb}
          source={require('../icon_2b/usb.png')}
        />
        <Text style={styles.text}>
          USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa bluetooth
        </Text>
      </View>
      <View style={styles.star}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          Cực kỳ hài lòng
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.img_star} source={require('../icon_2b/Star 1.png')} />
          <Image style={styles.img_star} source={require('../icon_2b/Star 1.png')} />
          <Image style={styles.img_star} source={require('../icon_2b/Star 1.png')} />
          <Image style={styles.img_star} source={require('../icon_2b/Star 1.png')} />
          <Image style={styles.img_star} source={require('../icon_2b/Star 1.png')} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', borderColor: 'blue', borderWidth: 1, borderRadius: 5, paddingHorizontal: 53, paddingVertical: 20 }}>
        <Image source={require('../icon_2b/camera.png')} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 4, marginLeft: 20 }}>Thêm hình ảnh</Text>
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'rgba(0, 0, 0, 0.3)',
            width: 300, // Đặt chiều rộng của ô nhập
            height: 150, // Đặt chiều cao của ô nhập
            padding: 10, // Khoảng cách bên trong giữa viền và nội dung
            marginTop: 15, // Khoảng cách bên ngoài giữa các phần tử
            textAlignVertical: 'top', // Đặt con trỏ ở trên cùng
            fontSize: 18,
            fontWeight: 'bold',
          }}
          placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm"
          multiline={true} // Cho phép nhập nhiều dòng
          placeholderTextColor="gray"
          value={textInput}
          onChangeText={setTextInput}
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          paddingHorizontal: 136,
          paddingVertical: 15,
          backgroundColor: '#0D5DB6',
          borderColor: '#1511EB',
          borderRadius: 5
        }}
        onPress={handleSend}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Gửi</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View 
            //style={styles.modalView}
            style={{backgroundColor:'white', padding:20 , alignItems:'center', borderRadius:5}}
          >
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center'
  },
  usb: {
    flexDirection: 'row',
  },
  img_usb: {
    marginRight: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  star: {
    alignItems: 'center',
    marginTop: 30,
  },
  img_star: {
    marginLeft: 15,
    marginBottom: 30
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền mờ
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
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
    fontSize: 18,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Figma2b;