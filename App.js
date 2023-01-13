import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './Screens/Clock';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Weather from './Screens/Weather';
import ToDoList from './Screens/ToDoList';
import Calculator from './Screens/Calculator';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: "#8FD6E1",
          },
          headerTintColor: '#1B2430',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Clock" component={Clock} options={{
          title: 'Clock',
          headerStyle: {
            backgroundColor: "#8FD6E1",
          },
          headerTintColor: '#1B2430',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Calculator" component={Calculator} options={{
          title: 'Calculator',
          headerStyle: {
            backgroundColor: "#8FD6E1",
          },
          headerTintColor: '#1B2430',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Weather" component={Weather} options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: "#8FD6E1",
          },
          headerTintColor: '#1B2430',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Todolist" component={ToDoList} options={{
          title: 'To Do List',
          headerStyle: {
            backgroundColor: "#8FD6E1",
          },
          headerTintColor: '#1B2430',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
