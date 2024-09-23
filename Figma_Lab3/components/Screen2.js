import { Text, View, StyleSheet, Image , TouchableOpacity, Button} from 'react-native';
import {useState} from 'react'


    const silverPhone={
    color: 'bạc',
    provide: 'Shoppe',
    img: require('../assets/vs_silver.png')
  }


export default function Screen2({navigation}){


  
  const redPhone={
    color: 'đỏ',
    provide: 'Tiki Tradding',
    img: require('../assets/vs_red.png')
  }

  const bluePhone={
    color: 'xanh',
    provide: 'Lazada',
    img: require('../assets/vs_blue.png')
  }

  const blackPhone={
    color: 'đen',
    provide: 'Cell Phone S',
    img: require('../assets/vs_black.png')
  }
  const [currentPhone, setCurrentPhone] = useState(bluePhone)

  const handColor = (phone) =>{
    setCurrentPhone(phone)
  }

  const handleDone = () => {
    navigation.navigate('ManHinh1', { selectedPhone: currentPhone });
  };


  return(
    
    <View style={styles.container}>
      <View style={styles.view_img}> 
        <Image
          style={styles.img}
          source={currentPhone.img}
        />
        <View style={{marginTop: 10, width:190, marginLeft: 25}}>
          <Text style={styles.text}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.text}>
            Màu: <Text style={{fontWeight:'bold'}}>{currentPhone.color}</Text>
          </Text>
          <Text style={styles.text}>
            Cung cấp bởi <Text style={{fontWeight:'bold'}}>{currentPhone.provide}</Text>
          </Text>
          <Text style={{fontSize:18, fontWeight:700}}>
            1.790.000 đ
          </Text>
        </View>
      </View>

      <View style={styles.view_color}>
        <Text style={{width:'100%',fontSize:18, fontWeight:400}}>Chọn một màu bên dưới:</Text> 
        
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.button_color, {backgroundColor:'rgba(197, 241, 251, 1)'}]}
            onPress = {()=> handColor(silverPhone)}
          />
          <TouchableOpacity
            style={[styles.button_color, {backgroundColor:'rgba(243, 13, 13, 1)'}]}
            onPress = {()=> handColor(redPhone)}
          />
          <TouchableOpacity
            style={[styles.button_color, {backgroundColor:'rgba(0, 0, 0, 1)'}]}
            onPress = {()=> handColor(blackPhone)}
          />
          <TouchableOpacity
            style={[styles.button_color, {backgroundColor:'rgba(35, 72, 150, 1)'}]}
            onPress = {()=> handColor(bluePhone)}
          />

          <TouchableOpacity
            style={[
              styles.button_color, 
              {backgroundColor:'rgba(25, 82, 226, 0.58)',
                height:44,
                width:326,
                borderWidth:1,
                borderColor:'rgba(202, 21, 54, 1)',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                marginTop:20,
              }]}
            onPress={handleDone}
            // onPress = {()=>handleDone}
          >
            <Text style={{color:'rgba(249, 242, 242, 1)', fontSize:20, fontWeight:700}}>Xong</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(196, 196, 196, 1)',
    height: 640,
    width:360,
    // alignItems:'center',
  },
  view_img:{
    flexDirection:'row', 
    justifyContent: 'flex-start', // Thêm thuộc tính này để căn chỉnh nội dung theo chiều ngang
    width: '100%', // Đảm bảo view_img chiếm toàn bộ chiều rộng của container
    height: 'auto', 
    backgroundColor:'rgba(255, 255, 255, 1)',
    paddingHorizontal:10,
    paddingTop:10,
    paddingBottom:10
  },
  img:{
    width: 118,
    height: 148
  },
  text:{
    fontSize:15, fontWeight:400, 
    marginBottom:5
  },
  view_color:{
    margin:10,
    
  },
  button:{
    alignItems:'center',
    marginTop:5,
  },
  button_color:{
    height:80,
    width:85,
    marginTop:10,
  },
})
