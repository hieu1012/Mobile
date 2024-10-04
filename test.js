import { Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Screen1({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Section */}
            <View style={styles.section}>

            </View>

            {/* Footer */}
            <View style={styles.footer}></View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        height: 750,
        width: 392,
        borderWidth: 1,
    },
    section: {
        height: '92%',
        width: '100%',
        backgroundColor: 'red'
    },
    footer: {
        height: '8%',
        width: '100%',
        backgroundColor: 'blue'
    }
})

