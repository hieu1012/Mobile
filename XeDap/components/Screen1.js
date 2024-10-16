import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native'
import {useState, useEffect} from 'react'

const Data = [
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png')
  }
]

export default function Screen1(){
  return(
    <View style={styles.container}>
      <Text style={styles.decription}>A premium online store for sporter and their stylish choice</Text>
      <View style={styles.box_img}>
        <Image
          source={require('../assets/xe1.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:375,
    height:812,
    borderWidth:1,
    // backgroundColor:'red',
    // flex:1,
    // justifyContent:'center',
    alignItems:'center',
  },
  decription:{
    fontSize:24,
    fontWeight:400,
    fontFamily:'VT323',
    textAlign:'center',
    width:315,
    marginTop:61
  },
  box_img:{
    width:359,
    height:388,
    // alignItems:'cetner',
    justifyContent:'center',
    // borderWidth:1,
    borderRadius:50,
    backgroundColor:'#E941411A',
    overflow: 'hidden',
    marginTop:40
  },
  img:{
    marginLeft:25,
    resizeMode: 'cover',
  },
  title:{
    fontFamily:'Ubuntu',
    fontSize:26,
    textAlign:'center',
    width:200,
    fontWeight:700,
    marginTop:40
  },
  button:{
    backgroundColor:'#E94141',
    width:340,
    height:61,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },
  button_text:{
  fontFamily: 'VT323',
  fontSize:27,
  fontWeight:400,
  color:'white',
  
  }
})