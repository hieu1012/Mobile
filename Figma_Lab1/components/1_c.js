import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,Modal} from 'react-native';

export default function App() {
 

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:60,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:113
      }}
      >CODE</Text>

      <Text style={{
        fontSize:20,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:50
      }}
      >VERIFICATION</Text>

      <Text style={{
        fontSize:15,
        fontWeight:700,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        marginTop:40
      }}
      >Enter ontime password sent on ++849092605798</Text>

      <View style={{flexDirection:'row', marginTop:40}}>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        <View style={{
          height:50,
          width:50,
          borderWidth:1
        }}></View>
        
      </View>

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
      >VERIFY CODE</Text>
  
 
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

