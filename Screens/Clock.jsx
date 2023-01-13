import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const today = time.toString('YYYY-MM-DD');

    return (

        <View style={styles.calBox}>

            <Calendar
                style={{
                    borderRadius: 10,
                    borderWidth: 10,
                    borderColor: '#1B2430',
                    height: 320,
                    backgroundColor: "#1B2430",
                    color: "#8FD6E1",
                }}

                initialDate={'2023-01-12'}
                markedDates={{
                    [today]: { selected: true, selectedColor: 'yellow' },
                }}
                markingType={'period'}
                dayComponent={({ date, state }) => {
                    return (
                        <View>
                            <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'green' }}>{date.day}</Text>
                        </View>
                    );

                }} />

            <Text style={styles.text}>{time.toLocaleString("en-US")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    calBox: {
        backgroundColor: "#1B2430",
        height: 800
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: 100,
        justifyContent: 'center',
    },
    calender: {
        backgroundColor: "red"
    },
    text: {
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        color: "#8FD6E1",
    },
});

export default Clock;
