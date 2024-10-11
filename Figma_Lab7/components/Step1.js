
import { Text, SafeAreaView, StyleSheet ,FlatList,View, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react'

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://67055186031fd46a830f85a3.mockapi.io/hgv/Product')
    .then(res => res.json())
    .then(json => setUser(json))
  }, []);

const add = () => { 
  // Hàm add để thêm người dùng mới
  const newUser = {
    name: 'Dao Tao Hieu',
    age: 25,
    email: 'newuser@example.com'
  }; 

  fetch('https://67055186031fd46a830f85a3.mockapi.io/hgv/Product', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }, 
    // Gửi yêu cầu POST với định dạng JSON

    body: JSON.stringify(newUser)
    // Chuyển đối tượng newUser thành chuỗi JSON để gửi đi
  })
  // .then(res => res.json()) 
  // // Chuyển phản hồi từ server thành JSON
  // .then(json => setUser([...user, json]));
  // // Cập nhật danh sách người dùng với người mới thêm vào
  
//  .then(() => {
//     // Sau khi thêm thành công, cập nhật lại trigger để render lại dữ liệu
//     setTrigger(true); // Gọi hàm setTrigger đúng cách
//   }) 
}

const delete_id = (id) => {
  fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/${id}`, {
    method: 'DELETE'
  })
}

// const edit = (id) => {
//   const updatedUser = {
//       name: 'hehe',
//       age: 19,
//       email: 'edituser@example.com'
//     }
//   fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/${id}`, {
//     method: "PUT", 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updatedUser) 
//   })
// }

const edit = () => {
  const updatedUser = {
      name: 'dao tao',
      age: 19,
      email: 'edituser@example.com'
    }
  fetch(`https://67055186031fd46a830f85a3.mockapi.io/hgv/Product/7`, {
    method: "PUT", 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser) 
  })
}

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>ID: {item.id}</Text>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text style={styles.itemText}>Age: {item.age}</Text>
        <Text style={styles.itemText}>Email: {item.email}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={add}> 
          <Text style={styles.text_button}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() => delete_id(3)}>
          <Text style={styles.text_button}>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {edit(1)}>
          <Text style={styles.text_button}>Chỉnh sửa</Text>
        </TouchableOpacity>
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
    width: '70%',
    backgroundColor: 'rgb(0,129,241)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  text_button: {
    fontSize: 20,
    color: 'white',
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
