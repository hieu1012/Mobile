import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,Modal} from 'react-native';

export default function App() {
 

  return (
    <View style={styles.container}>
      <Image
        style={{marginTop:67}}
        source={require('../assets/1b/Group.png')}
      />
      <View style={{alignItems:'center', marginTop:80}}>
        <Text
          style={{
            fontSize:25,
            fontWeight:700,
        }}>FORGET </Text>
        <Text
          style={{
            fontSize:25,
            fontWeight:700,
        }}>PASSWORD</Text>
      </View>
      <Text style={{
        fontSize:15,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:40
      }}
      >Provide your account’s email for which you want to reset your password</Text>

      <Text style={{
        fontSize:15,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:40,
        backgroundColor:'rgba(196, 196, 196, 1)',
        width:305,
        height:45,
        paddingTop:10
      }}

      >Email</Text>
      <Text style={{
        fontSize:15,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:40,
        backgroundColor:'rgba(227, 192, 0, 1)',
        width:305,
        height:45,
        paddingTop:10
      }}
      >NEXT</Text>
  
 
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

