import {View, Text, TouchableOpacity, StyleSheet,Image, FlatList} from 'react-native'
import {useState, useEffect} from 'react'

const Data = [
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/ant-design_heart-twotone.png'),
  },
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/heart.png')
  },
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/heart.png')
  },
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/heart.png')
  },
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/heart.png')
  },
  {
    id:1,
    title: 'Pinarello',
    price: 1800,
    decription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    category:'Road Bike',
    img: require('../assets/xe1.png'),
    icon: require('../assets/heart.png')
  },
]

const Render = ({item})=>{
  return(
    <View style={styles.render_item}>
      <View style={styles.box_img_icon}>
        <Image source={item.img} style={styles.img} />
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text style={styles.item_title}> {item.title} </Text>
      <Text style={styles.item_price}> 
        <Text style={{color:'#F7BA83'}}>$</Text>
        {item.price} 
      </Text>
    </View>
  )
}

export default function Screen1(){

  return(
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>
      <View style={styles.category}>
        <Text style={styles.category_text}>All</Text>
        <Text style={styles.category_text}>Roadbike</Text>
        <Text style={styles.category_text}>Mountain</Text>
      </View>
      <FlatList
              data={Data}
              renderItem={Render}
              keyExtractor={item => item.id.toString()}
              // vertical={true} // Hiển thị theo chiều dọc
              // horizontal={true}
              numColumns={2}  // Hiển thị 2 item trên mỗi dòng
              contentContainerStyle={{
                marginTop:20,
                marginLeft:10
              }} // Thêm style cho FlatList
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:375,
    height:812,
    borderWidth:1,
    
  },

  title:{
    fontFamily:'Ubuntu',
    fontSize:25,
    color:'#E94141',
    fontWeight:700,
    marginTop:30,
    marginLeft:20
  },
  category:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:30
  },
  category_text:{
    borderWidth:1,
    borderColor:'#E9414187',
    borderRadius:5,
    height:32,
    width:99,
    display: 'flex',
    justifyContent: 'center',   /* Căn giữa text theo chiều ngang */
    alignItems: 'center',       /* Căn giữa text theo chiều dọc */
    // textAlign: 'center',        /* Căn giữa text trong thẻ */
    // lineHeight: 100,          /* Căn giữa text theo chiều dọc */
  },
  render_item:{
    height:200,
    width:167,
    // borderWidth:1,
    backgroundColor:'#F7BA8326',
    borderRadius:10,
    alignItems:'center',
    flexDirection:'column',
    marginBottom:20,
    marginRight:20
  },
  box_img_icon:{
    height:127,
    width:135,
    // overflow:'hidden',  /* Đảm bảo phần bị đẩy ra ngoài bị cắt */
    overflow: 'visible',   /* Đảm bảo phần bị đẩy ra ngoài không bị cắt */
    position: 'relative',  /* Để icon có thể được định vị tuyệt đối */
    marginTop:10
  },
  img:{
    height:'100%',
    width:'100%'
    // resizeMode:'cover',
  },
  icon:{
    position: 'absolute', /* Đặt icon chồng lên ảnh */
    top: -8,              /* Điều chỉnh vị trí icon, ví dụ: nằm ở góc trên bên trái */
    left: -10,             /* Điều chỉnh vị trí icon */
    height: 25,          /* Cỡ icon */
    width: 25,           /* Cỡ icon */
    zIndex: 1,           /* Đảm bảo icon luôn hiển thị trên ảnh */
  },
  item_title:{
    fontFamily:'Voltaire',
    fontSize:20,
    fontWeight:400,
    color:'#00000099',
    marginTop:6
  },
  item_price:{
    fontFamily:'Voltaire',
    fontSize:20,
    fontWeight:400,
    // lineHeight:25  /* Khoảng cách giữa các dòn */
  }
  // button:{
  //   backgroundColor:'#E94141',
  //   width:340,
  //   height:61,
  //   borderRadius:30,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   marginTop:40
  // },
  // button_text:{
  // fontFamily: 'VT323',
  // fontSize:27,
  // fontWeight:400,
  // color:'white',
  // }
  //   decription:{
  //   fontSize:24,
  //   fontWeight:400,
  //   fontFamily:'VT323',
  //   textAlign:'center',
  //   width:315,
  //   marginTop:61
  // },
  // box_img:{
  //   width:359,
  //   height:388,
  //   // alignItems:'cetner',
  //   justifyContent:'center',
  //   // borderWidth:1,
  //   borderRadius:50,
  //   backgroundColor:'#E941411A',
  //   overflow: 'hidden',
  //   marginTop:40
  // },
  // img:{
  //   marginLeft:25,
  //   resizeMode: 'cover',
  // },
})