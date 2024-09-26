

import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useState } from 'react';

const DATA = [
  {
    id: '1',
    img: require('../img_sp_4b/giacchuyen1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '2',
    img: require('../img_sp_4b/daynguon1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '3',
    img: require('../img_sp_4b/dauchuyendoipsps21.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '3',
    img: require('../img_sp_4b/dauchuyendoi1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '3',
    img: require('../img_sp_4b/carbusbtops21.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '3',
    img: require('../img_sp_4b/daucam1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
];

const Item = ({ obj }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={obj.img} />
    <View style={{ width: 130, }}>
      <Text style={styles.title}>{obj.title}</Text>
      <Image source={require('../img_sp_4b/Star.png')} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 14, fontWeight: '700', marginRight: 15 }}>69.900 đ</Text>
        <Text style={{ color: 'rgba(150, 157, 170, 1)' }}>-39%</Text>
      </View>
    </View>
  </View>
);

export default function MH_4b() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ marginLeft: 10 }} source={require('../assets/left.png')} />
        <View style={{ position: 'relative', width: 192, height: 30 }}>
          {!isFocused && (
            <Text style={{ position: 'absolute', marginLeft: 33, marginTop: 4 }}>
              Dây cáp usb
            </Text>
          )}
          <TextInput
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              width: '100%',
              height: '100%',
              paddingLeft: 35,
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Image style={{ position: 'absolute', marginLeft: 5, marginTop: 3 }} source={require('../assets/search.png')} />
        </View>
        <View style={{ position: 'relative' }}>
          <Image source={require('../assets/shop_check.png')} />
          <Image style={{ position: 'absolute', marginLeft: 13, top: -5 }} source={require('../assets/Ellipse_red.png')} />
        </View>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image source={require('../assets/Ellipse_white.png')} />
          <Image source={require('../assets/Ellipse_white.png')} />
          <Image source={require('../assets/Ellipse_white.png')} />
        </View>
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2} // Đặt thành 2 để hiển thị 2 mục trên mỗi hàng
          columnWrapperStyle={styles.row} // Style for each row
        />
      </View>

      <View style={styles.footer}>
        <View style={{ marginLeft: 20 }}>
          <Image style={styles.img_footer1} source={require('../assets/footer1.png')} />
          <Image style={styles.img_footer1} source={require('../assets/footer1.png')} />
          <Image style={styles.img_footer1} source={require('../assets/footer1.png')} />
        </View>
        <Image source={require('../assets/footer2.png')} />
        <Image style={{ marginRight: 20 }} source={require('../assets/footer3.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 361,
    height: 653,
  },
  header: {
    backgroundColor: '#1BA9FF',
    width: 361,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    height: '86%',
    paddingTop: 10,
    paddingHorizontal:10
  },
  row: {
    justifyContent: 'space-between', // Ensures space between items in a row
  },
  item: {
    width: '48%', // Đặt chiều rộng để chiếm không gian cho hai mục liên tiếp
    marginBottom: 10,
    alignItems:'center'
  },
  img: {
    width: '100%',
    height:93
  },
  title: {
    fontSize: 13,
    marginTop: 7,
    marginBottom: 5,
  },
  footer: {
    height: 51,
    width: 361,
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img_footer1: {
    marginBottom: 5,
  },
});
