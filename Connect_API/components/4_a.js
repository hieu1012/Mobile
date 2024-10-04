import { Text, View, StyleSheet, Image , TouchableOpacity,FlatList} from 'react-native';
import {useState, useEffect} from 'react'

const DATA = [
  {
    id: '1',
    title: 'Cá nấu lẩu, nấu mì mini... ',
    shop:'Shop Devang',
    img:require('../img_sp_4a/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop:'Shop TLD Food',
    img:require('../img_sp_4a/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng ',
    shop:'Shop Thế giới đồ chơi',
    img:require('../img_sp_4a/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình ',
    shop:'Shop Thế giới đồ chơi',
    img:require('../img_sp_4a/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop:'Shop Minh long Book',
    img:require('../img_sp_4a/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ ',
    shop:'Shop Minh Long Book',
    img:require('../img_sp_4a/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    title: 'Donal Trum Thiêu tài lãnh đạo ',
    shop:'Shop',
    img:require('../img_sp_4a/trump1.png'),
  },
  

];

const Item = ({obj}: ItemProps) => (
  <View style={styles.item}>
    <Image
      style={styles.img}
      source={obj.img}
    />
    <View style={styles.title_shop}>
      <Text style={styles.title}>{obj.title}</Text>
      <Text style={styles.shop}>{obj.shop}</Text>
    </View>

    <TouchableOpacity style={{
      height:38,
      width:88,
      backgroundColor:'#F31111',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    }}>
    <Text style={{color:'#FFFFFF', fontSize:15, fontWeight:'bold'}}>Chat</Text>
    </TouchableOpacity>
    
  </View>
);

export default function MH_4a(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={{marginLeft:10}}
          source={require('../assets/left.png')}
        />
        <Text style={{fontSize:15, color:'white'}}>Chat</Text>
        <Image
          style={{marginRight:10}}
          source={require('../assets/shop_check.png')}
        />
      </View>

      <View style={styles.review}>
        <Text style={{
          height:29,
          width:304,
          fontSize:13
        }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item obj={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      
      <View style={styles.footer}>
        <View style={{marginLeft:20}}>
          <Image
            style={styles.img_footer1}
            source={require('../assets/footer1.png')}
          />
          <Image
            style={styles.img_footer1}
            source={require('../assets/footer1.png')}
          />
          <Image
            style={styles.img_footer1}
            source={require('../assets/footer1.png')}
          />
        </View>
        
        <Image
          source={require('../assets/footer2.png')}
        />
        <Image
          style={{marginRight:20}}
          source={require('../assets/footer3.png')}
        />
      </View>

    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width:361,
    height:653,
  },
  header:{
    backgroundColor:'#1BA9FF',
    width:359,
    height:42,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  review:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(196, 196, 196, 0.5)',
    height:50,
    width:'100%',
  },
  flatList:{
    backgroundColor:'rgba(196, 196, 196, 0.5)',
    height:'78%'
  },
  item:{
    flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'space-between',
    height:76,
    width:'100%',
    borderTopWidth:1,
    marginTop:5 ,
    borderColor:'#C4C4C4',
  },
  img:{
    height:74,
    width:74,
  },
  title_shop:{
    alignItems:'flex-start',
    flexDirection:'column',
    // justifyContent:'space-between',
    width:'45%',
    marginLeft:10
  },
  title:{
    fontSize:13,
    marginTop:7,
    marginBottom:5
  },
  shop:{
    fontSize:13,
    color:'red',
  },
  footer:{
    height:51,
    width:359,
    backgroundColor:'#1BA9FF',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }, 
  img_footer1:{
    marginBottom:5
  },  
})