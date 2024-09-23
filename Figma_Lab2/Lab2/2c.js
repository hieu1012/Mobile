// import {useState} from 'react'
// import {View,Text, StyleSheet,TextInput, CheckBox,TouchableOpacity} from 'react-native'

// function Figma2c(){
//   const [isChecked_Special, setIsChecked_Special] = useState(false)
//   const [isChecked_Lower, setIsChecked_Lower] = useState(false)
//   const [isChecked_Upcase, setIsChecked_Upcase] = useState(false)
//   const [isChecked_Num, setIsChecked_Num] = useState(false)

//   return (
//       <View style={{
//         backgroundColor: 'rgba(59, 59, 152, 0.6)', 
//         width: 360, 
//         height: 640, 
//         alignItems: 'center', 
//         justifyContent: 'center', }}>
//         <View style={styles.container}>
//           <Text style={{color:'white', fontWeight:'Bold', fontSize:25 , width:147}}>PASSWORD GENERATOR</Text>
//           <TextInput 
//             style={{
//               backgroundColor: 'rgba(21, 21, 55, 1)', 
//               width:297, 
//               height: 55,
//               marginTop: 40,
//               color: 'white', 
//               fontSize: 18,
//               fontWeight:'bold',
//               padding: 10,
//               marginBottom:20
//             }}
//           />
//           <View style={styles.box_text}>
//             <Text style={styles.text}>
//               Password length
//             </Text>
//             <TextInput
//               style={{width:118, backgroundColor: 'white', fontWeight:'bold', fontSize: 18, padding:10}}
//             />
//           </View>
//           <View style={styles.box_text}>
//             <Text style={styles.text}>
//               Include lower case letters
//             </Text>
//               <CheckBox
//                 style={styles.checkBox}
//                 checked={isChecked_Lower}
//                 value={isChecked_Lower}
//                 onValueChange={setIsChecked_Lower}
//               />
//           </View>
//           <View style={styles.box_text}>
//             <Text style={styles.text}>
//               Include upcase letters
//             </Text>
//               <CheckBox
//                 style={styles.checkBox}
//                 checked={isChecked_Upcase}
//                 value={isChecked_Upcase}
//                 onValueChange={setIsChecked_Upcase}
//               />
//           </View>
//           <View style={styles.box_text}>
//             <Text style={styles.text}>
//               Include number
//             </Text>
//               <CheckBox
//                 style={styles.checkBox}
//                 checked={isChecked_Num}
//                 value={isChecked_Num}
//                 onValueChange={setIsChecked_Num}
//               />
//           </View>
//           <View style={styles.box_text}>
//             <Text style={styles.text}>
//               Include special symbol
//             </Text>
//               <CheckBox
//                 style={styles.checkBox}
//                 checked={isChecked_Special}
//                 value={isChecked_Special}
//                 onValueChange={setIsChecked_Special}
//               />
//           </View>
//           <TouchableOpacity
//             style={{backgroundColor:'rgba(59, 59, 152, 1)', width:269, height: 55, alignItems:'center', justifyContent:'center', marginTop:30}}
//           >
//            <Text style={styles.text}>GENERATE PASSWORD  </Text>
//           </TouchableOpacity>
//         </View>

//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'rgba(35, 35, 91, 1)',
//      width: 322, 
//      height: 605,
//       borderRadius: 10, 
//     alignItems: 'center'
//     },
//     box_text:{
//       width:297,
//       height:33,
//       flexDirection: 'row',
//       justifyContent:'space-between',
//       marginTop:30
//     },
//     text:{
//       fontSize: 20,
//       color:'white',
//       fontWeight:'700'
//       },
//     checkBox:{
//       height:30,
//       width:30,
//     },


// })
// export default Figma2c


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, TouchableOpacity } from 'react-native';

function Figma2c() {
  const [isChecked_Special, setIsChecked_Special] = useState(false);
  const [isChecked_Lower, setIsChecked_Lower] = useState(false);
  const [isChecked_Upcase, setIsChecked_Upcase] = useState(false);
  const [isChecked_Num, setIsChecked_Num] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(''); 

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (isChecked_Lower) characters += lowerCaseLetters;
    if (isChecked_Upcase) characters += upperCaseLetters;
    if (isChecked_Num) characters += numbers;
    if (isChecked_Special) characters += specialSymbols;

    let generatedPassword = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <View style={{
      backgroundColor: 'rgba(59, 59, 152, 0.6)',
      width: 360,
      height: 640,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={styles.container}>
        <Text style={{ color: 'white', fontWeight: 'Bold', fontSize: 25, width: 147 }}>PASSWORD GENERATOR</Text>
        <TextInput
          style={{
            backgroundColor: 'rgba(21, 21, 55, 1)',
            width: 297,
            height: 55,
            marginTop: 40,
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
            marginBottom: 20
          }}
          value={password}
          editable={false} // Không cho phép chỉnh sửa trực tiếp
        />
        <View style={styles.box_text}>
          <Text style={styles.text}>
            Password length
          </Text>
          <TextInput
            style={{ width: 118, backgroundColor: 'white', fontWeight: 'bold', fontSize: 18, padding: 10 }}
            keyboardType="numeric"
            value={passwordLength}
            onChangeText={setPasswordLength}
          />
        </View>
        <View style={styles.box_text}>
          <Text style={styles.text}>
            Include lower case letters
          </Text>
          <CheckBox
            style={styles.checkBox}
            checked={isChecked_Lower}
            value={isChecked_Lower}
            onValueChange={setIsChecked_Lower}
          />
        </View>
        <View style={styles.box_text}>
          <Text style={styles.text}>
            Include upcase letters
          </Text>
          <CheckBox
            style={styles.checkBox}
            checked={isChecked_Upcase}
            value={isChecked_Upcase}
            onValueChange={setIsChecked_Upcase}
          />
        </View>
        <View style={styles.box_text}>
          <Text style={styles.text}>
            Include number
          </Text>
          <CheckBox
            style={styles.checkBox}
            checked={isChecked_Num}
            value={isChecked_Num}
            onValueChange={setIsChecked_Num}
          />
        </View>
        <View style={styles.box_text}>
          <Text style={styles.text}>
            Include special symbol
          </Text>
          <CheckBox
            style={styles.checkBox}
            checked={isChecked_Special}
            value={isChecked_Special}
            onValueChange={setIsChecked_Special}
          />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(59, 59, 152, 1)', width: 269, height: 55, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}
          onPress={generatePassword}
        >
          <Text style={styles.text}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(35, 35, 91, 1)',
    width: 322,
    height: 605,
    borderRadius: 10,
    alignItems: 'center'
  },
  box_text: {
    width: 297,
    height: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  },
  checkBox: {
    height: 30,
    width: 30,
  },
});

export default Figma2c;