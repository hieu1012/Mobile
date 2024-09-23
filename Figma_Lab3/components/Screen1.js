// import { Text, View, StyleSheet, Image , TouchableOpacity} from 'react-native';
// import {useState, useEffect} from 'react'
// // import { NavigationContainer } from '@react-navigation/native';

// export default function AssetExample({navigation}) {
//   const defaultPhone = {
//     color: 'xanh',
//     provide: 'Lazada',
//     img: require('../assets/vs_blue.png'),
//   };

//   const [currentPhone, setCurrentPhone] = useState(defaultPhone);

//   useEffect(() => {
//     if (route.params?.selectedPhone) {
//       setCurrentPhone(route.params.selectedPhone);
//     }
//   }, [route.params?.selectedPhone]);

//   return (
//     <View style={styles.container}>
//       <Image
//         style={{
//           height: 361,
//           width:301,
//           marginTop: 10,
//           marginBottom:20,
//           }}
//         source={require(currentPhone.img)}
//       />
//       <Text style={{fontSize:15, fontWeight: 400}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      
//       <View style={styles.view_row}> 
//         <Image
//           style={styles.img_star}
//           source={require('../assets/star.png')}
//         />
//         <Image
//           style={styles.img_star}
//           source={require('../assets/star.png')}
//         />
//         <Image
//           style={styles.img_star}
//           source={require('../assets/star.png')}
//         />
//         <Image
//           style={styles.img_star}
//           source={require('../assets/star.png')}
//         />
//         <Image
//           style={styles.img_star}
//           source={require('../assets/star.png')}
//         />
//         <Text style={{fontSize:15, fontWeight: 400, marginLeft:25}}>(Xem 828 đánh giá)</Text>
//       </View>

//       <View style={styles.view_row}>
//         <Text style={{
//           fontSize:18,
//            fontWeight: 700,
//           marginRight:50
//           }}>1.790.000 đ</Text>

//         <Text style={{
//           fontSize:15,
//           fontWeight:700,
//           color: '#00000094',
//           textDecorationLine: 'line-through', 
//           textDecorationColor: 'black'
//         }}>1.790.000 đ</Text>
//       </View>
      
//       <View style={styles.view_row}>
//         <Text style={{fontSize:12, color:'red', marginRight: 20}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
//         <Image
//           source={require('../assets/Group1.png')}
//         />
//       </View>

//       <TouchableOpacity
//         style={{
//           height:34,
//           width:332,
//           backgroundColor: '#C4C4C400',
//           borderRadius: 6,
//           borderWidth: 1, // Độ dày viền
//           borderColor: '#00000075',
//           alignItems:'center',
//           justifyContent:'center',
//           flexDirection:'row',
//           marginTop:15,
//         }}
//         onPress={() => navigation.navigate('ManHinh2')}
//       >

//         <Text style={{
//           fontSize:15, 
//           marginRight:1, 
//           flex:1, 
//           textAlign:'center',
          
//           }}>4 MÀU-CHỌN MÀU</Text>
//         <Image
//           source={require('../assets/Vector.png')}
//           style={{marginRight: 10,}}
//         />

//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           height:44,
//           width:326,
//           backgroundColor:'red',
//           borderRadius:10,
//           borderWidth:1,
//           borderColor:'rgba(202, 21, 54, 1)',
//           marginTop: 20,
//           alignItems:'center',
//           justifyContent:'center'

//         }}
//       >
//       <Text
//         style={{
//           fontSize:20,
//           fontWeight:700,
//           color: 'white'
//         }}
//       >
//         CHỌN MUA
//       </Text>

//       </TouchableOpacity> 

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // alignContent:'center',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     height: 640,
//     width: 360,
//     borderWidth:1,
//   },
//   view_row:{
//     // flexDirection:'row',
//     //  alignItems:'center',
//     //   marginTop:10,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',  // Align items to the start of the container
//         width: '100%',  // Ensure container takes full width
//         marginTop: 10,
//         marginLeft: 70,
//         alignItems:'center'
//   },
//   img_star:{
//     height:25,
//     width:24,
//     marginHorizontal:2
//   },


// });

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const defaultPhone = {
  color: 'xanh',
  provide: 'Lazada',
  img: require('../assets/vs_blue.png'),
};

export default function Screen1({ navigation, route }) {
  
  const [currentPhone, setCurrentPhone] = useState(defaultPhone);

  useEffect(() => {
    if (route.params?.selectedPhone) {
      setCurrentPhone(route.params.selectedPhone);
    }
  }, [route.params?.selectedPhone]);

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 361,
          width: 301,
          marginTop: 10,
          marginBottom: 20,
        }}
        source={currentPhone.img}
      />
      <Text style={{ fontSize: 15, fontWeight: '400' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={styles.view_row}>
        <Image
          style={styles.img_star}
          source={require('../assets/star.png')}
        />
        <Image
          style={styles.img_star}
          source={require('../assets/star.png')}
        />
        <Image
          style={styles.img_star}
          source={require('../assets/star.png')}
        />
        <Image
          style={styles.img_star}
          source={require('../assets/star.png')}
        />
        <Image
          style={styles.img_star}
          source={require('../assets/star.png')}
        />
        <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 25 }}>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.view_row}>
        <Text style={{
          fontSize: 18,
          fontWeight: '700',
          marginRight: 50
        }}>1.790.000 đ</Text>

        <Text style={{
          fontSize: 15,
          fontWeight: '700',
          color: '#00000094',
          textDecorationLine: 'line-through',
          textDecorationColor: 'black'
        }}>1.790.000 đ</Text>
      </View>

      <View style={styles.view_row}>
        <Text style={{ fontSize: 12, color: 'red', marginRight: 20 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          source={require('../assets/Group1.png')}
        />
      </View>

      <TouchableOpacity
        style={{
          height: 34,
          width: 332,
          backgroundColor: '#C4C4C400',
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#00000075',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 15,
        }}
        onPress={() => navigation.navigate('ManHinh2')}
      >
        <Text style={{
          fontSize: 15,
          marginRight: 1,
          flex: 1,
          textAlign: 'center',
        }}>4 MÀU-CHỌN MÀU</Text>
        <Image
          source={require('../assets/Vector.png')}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 44,
          width: 326,
          backgroundColor: 'red',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(202, 21, 54, 1)',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'white'
          }}
        >
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 640,
    width: 360,
    // borderWidth: 1,
  },
  view_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    marginLeft: 70,
    alignItems: 'center'
  },
  img_star: {
    height: 25,
    width: 24,
    marginHorizontal: 2
  },
});