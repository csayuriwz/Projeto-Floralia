import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/navegacao/navegacao';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts,
  Exo2_400Regular,
  Exo2_600SemiBold,
  Exo2_700Bold, } from '@expo-google-fonts/exo-2';
  import { Login } from './src/screens/login/login';
import { Profile } from './src/screens/profile/profile';

const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    Exo2_400Regular,
    Exo2_600SemiBold,
    Exo2_700Bold,
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{title: "Navegação"}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: "Profile"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
