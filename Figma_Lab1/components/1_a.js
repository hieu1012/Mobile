import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,Modal} from 'react-native';

export default function App() {
 

  return (
    <View style={styles.container}>
      <Image
        style={{marginTop:67}}
        source={require('../assets/FistScreen/Ellipse8.png')}
      />
      <View style={{alignItems:'center', marginTop:80}}>
        <Text
          style={{
            fontSize:25,
            fontWeight:700,
        }}>GROW</Text>
        <Text
          style={{
            fontSize:25,
            fontWeight:700,
        }}>YOUR BUSINESS</Text>
      </View>
      <Text style={{
        fontSize:15,
        fontWeight:700,
        paddingLeft:10,
        textAlign:'center',
        marginTop:60
      }}
      >We will help you to grow your business using online server</Text>

      <View style={{flexDirection:'row', marginTop:60}}>
        <Image style={{marginRight:60}} source={require('../assets/FistScreen/Group12.png')}/>
        <Image source={require('../assets/FistScreen/Group13.png')}/>
      </View>
      <Text style={{
        fontSize:18,
        fontWeight:700,
        paddingLeft:10,
        textAlign:'center',
        marginTop:30
      }}
      >HOW WE WORK?</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(199, 244, 246, 1)',
    width: 360,
    height:640,
    alignItems:'center',
  },


});

