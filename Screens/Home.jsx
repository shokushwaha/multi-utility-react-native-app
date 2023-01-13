import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
const Home = ({ navigation }) => {
    const goToClock = () => {
        navigation.navigate('Clock');
    }
    const goToCalculator = () => {
        navigation.navigate('Calculator');
    }
    const goToWeather = () => {
        navigation.navigate('Weather');
    }
    const goToTodo = () => {
        navigation.navigate('Todolist');
    }
    return (
        <View style={styles.homeBox}>

            <Text style={styles.headText}>Functions we provide....</Text>
            <TouchableOpacity onPress={goToTodo} style={styles.btn}><Text style={styles.btnText} >ToDoList</Text></TouchableOpacity>

            <TouchableOpacity onPress={goToWeather} style={styles.btn}><Text style={styles.btnText} >Weather</Text></TouchableOpacity>
            <TouchableOpacity onPress={goToCalculator} style={styles.btn}><Text style={styles.btnText} >Calculator</Text></TouchableOpacity>
            <TouchableOpacity onPress={goToClock} style={styles.btn}><Text style={styles.btnText} >Clock</Text></TouchableOpacity>




        </View>
    )
}

const styles = StyleSheet.create({
    homeBox: {

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B2430",
        height: 800
    },
    headText: {
        color: "#8FD6E1",
        fontSize: 20,
        marginBottom: 10,
        fontFamily: "monospace"
    },
    btn: {
        backgroundColor: "#8FD6E1",
        padding: 10,
        width: 100,
        marginTop: 10,
        textAlign: "center",
        borderRadius: 10,
        borderBottomWidth: 4,
        borderBottomColor: "black"
    },
    btnText: {
        textAlign: "center",
        color: "#150E56D",
        fontWeight: "800"
    }
})
export default Home