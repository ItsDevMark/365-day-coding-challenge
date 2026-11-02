<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/HomeScreen';
import ScreenTwo from './src/ScreenTwo';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator intialRouteName= "Home">
                <Stack.Screen name="Home" component={HomeScreen}/>      
                <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>        
            </Stack.Navigator>
        </NavigationContainer>
    )
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 9be0acd (Initialize evironment for my ToDo-List-App)
