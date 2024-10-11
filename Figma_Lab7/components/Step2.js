
import { Text, SafeAreaView, StyleSheet ,FlatList,View, TouchableOpacity, TextInput} from 'react-native';
import {useState, useEffect} from 'react'

export default function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    fetch('https://67055186031fd46a830f85a3.mockapi.io/hgv/Product')
      .then(res => res.json())
      .then(json => setUser(json))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Name: {item.id}</Text>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text style={styles.itemText}>Age: {item.age}</Text>
        <Text style={styles.itemText}>Email: {item.email}</Text>
      </View>
    );
  }

  const them = () =>{
    const userNew = {
      name: name,
      age: age,
      email: email
    }
    fetch('https://67055186031fd46a830f85a3.mockapi.io/hgv/Product',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(userNew)
    })
  }

// Xoa bang id
  // const xoa =  (id) =>{
  //   fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/${id}`,{
  //     method: "DELETE",
  //   })
  // }

// xoa bang cach nhap ten
 const xoa =  (name) =>{
    fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product`)
    .then(res => res.json())
    .then(data=>{
      const userToDelete = data.find(user => user.name === name);
      // const userToDelete = data.find(user => 
      //   user.name === name && 
      //   user.age === age && 
      //   user.email === email
      // );
      fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/${userToDelete.id}`,{
        method: "DELETE",
      })
    })
  }

  const chinhSua = (id) =>{
    const  updateUser = {
      name: name,
      age: age,
      email: email
    }
    fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/1`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(updateUser)
    })
  }








  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.button}  onPress={them}>
          <Text style={styles.text_button}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.button}   
            // onPress ={()=> xoa(6)}
            onPress = {xoa(name)}
          >
          <Text style={styles.text_button}>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={chinhSua}>
          <Text style={styles.text_button}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text_input}>
        <Text style={styles.text}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.text_input}>
        <Text style={styles.text}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
        />
      </View>
      <View style={styles.text_input}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{ maxHeight: 500 }}  
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    height: 40,
    width: '30%',
    backgroundColor: 'rgb(0,129,241)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,

  },
  text_button: {
    fontSize: 20,
    color: 'white',
  },
  text_input:{
    flexDirection:'row',
    marginBottom:15,
    justifyContent:'space-between',
    paddingRight:40
  },
  text:{
    fontSize:20
  },

  input:{
    backgroundColor:'white',
    // width:'100%',
    // marginLeft:20,
    fontSize:20
  },
  itemContainer: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  }
});
