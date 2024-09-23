import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Tiki() {
  const [soTien, setSoTien] = useState('141.800');
  const [soLuong, setSoLuong] = useState('1')

  return (
    <View style={styles.container}>
      <View style={styles.nentrang}>
        <View style={styles.nentrang1}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Tiki_Ok/book.png')} />
            <View style={{ flexDirection: 'column', marginLeft: 25 }}>
              <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'red',
                  marginBottom: 5,
                }}>
                {soTien} đ
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'rgba(128, 128, 128, 1)',
                  textDecorationLine: 'line-through',
                  textDecorationColor: 'rgba(128, 128, 128, 1)',
                  marginBottom: 15
                }}>
                {soTien} đ
              </Text>
              <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                <Image
                  style={{marginRight: 15}}
                  source={require('../Tiki_Ok/btnminus.png')}
                />
                <Text style={{fontSize:15, fontWeight: 700,}}>
                  {soLuong}
                </Text>
                <Image
                  style={{marginRight: 90, marginLeft: 15}}
                  source={require('../Tiki_Ok/btnadd.png')}
                />
                <Text style={styles.text2}>Mua sau</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row' , marginTop: 20}}>
            <Text style={styles.text1}>Mã giảm giá đã lưu</Text>
            <Text style={styles.text2}>Xem tại đây</Text>
          </View>

        </View>
      </View>

      <View style={styles.nentrang}>
          <View style={styles.nentrang1}>

            <View style={{flexDirection: 'row' }}>
              <Text style={styles.text1}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
              <Text style={styles.text2}>Nhập tại đây?</Text>
            </View>

          </View>
      </View>

      <View style={styles.nentrang}>
          <View style={styles.nentrang1}>

            <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <Text style={{    fontSize: 18,fontWeight: 700}}>Tạm tính</Text>
              <Text style={styles.text4}>{soTien} đ</Text>
            </View>

          </View>
      </View>

      <View style={[styles.nentrang, {height: 160, marginTop: 154}]}>
          <View style={styles.nentrang1}>

            <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <Text style={{    fontSize: 18,fontWeight: 700 , color:'rgba(128, 128, 128, 1)'}}>Thành tiền</Text>
              <Text style={styles.text4}>{soTien} đ</Text>
            </View>
            <TouchableOpacity style={{
              height:45,
              width:331,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent:'center',
              marginTop: 30
            }}>
              <Text style={{fontSize:20, fontWeight: 700, color: 'white'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>

          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    alignContent: 'center',
    
  },
  nentrang: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: 15
  },
  nentrang1: {
    margin: 10,
  },
  text1: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 8,
    marginRight: 20
  },
  text2:{
    fontSize: 12,
    fontWeight: 700,
    color: 'rgba(19, 79, 236, 1)'
  },
  text4:{
    fontSize: 18,
    fontWeight: 700,
    color: 'red', 
    paddingRight: 15
  }
});
