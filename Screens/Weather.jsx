import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
const Weather = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

    const getWeather = async () => {
        if (location.length === 0)
            return alert("Location can't be empty");
        try {
            const response = await axios.get(
                url
            );
            setWeather(response.data);
            setLocation('');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Location...."
                value={location}
                onChangeText={text => setLocation(text)}
            />

            <TouchableOpacity onPress={getWeather} style={styles.searchBtn}><Text style={styles.searchText}>Get Weather</Text></TouchableOpacity>
            {weather ? (
                <View>
                    <Text style={styles.info} >Temperature: {weather.main.temp}</Text>
                    <Text style={styles.info} >Humidity: {weather.main.humidity}</Text>
                    <Text style={styles.info} >Description: {weather.weather[0].description}</Text>
                </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1B2430",
    },
    input: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#8FD6E1",
        borderRadius: 10,
        borderBottomWidth: 4,
        borderTopWidth: 4,
        borderBottomColor: "black",
        borderTopColor: "black",
        height: 40
    },
    searchBtn: {
        backgroundColor: "#8FD6E1",
        padding: 10,
        width: 100,
        marginTop: 10,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderBottomColor: "black"
    },
    searchText: {
        textAlign: "center"
    },
    info: {
        color: "azure",
        marginTop: 10,
        fontSize: 20
    }
});

export default Weather