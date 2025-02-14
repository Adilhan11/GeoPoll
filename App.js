import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen"; // HomeScreen'iniz
import LoginScreen from "./LoginScreen"; // LoginScreen'iniz
import PollutionMapScreen from "./PollutionMapScreen"; // PollutionMapScreen'iniz
import RegisterScreen from "./RegisterScreen"; // RegisterScreen'iniz
import ChatbotScreen from "./ChatbotScreen"; // RegisterScreen'iniz
import PollutionMap from './pollutionMap'; // PollutionMap'iniz

// Stack Navigator'ı oluştur
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#28a745',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Login ekranı */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        {/* Home ekranı */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        
        {/* PollutionMap ekranı */}
        <Stack.Screen name="PollutionMapScreen" component={PollutionMapScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Chatbot" 
          component={ChatbotScreen}
          options={{ 
            title: 'Chatbot Asistan',
            headerBackTitle: 'Geri',
            headerShown: false
          }}
        />
        
        {/* Register ekranı */}
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="PollutionMap" 
          component={PollutionMap}
          options={{ 
            title: 'Kirlilik Haritası',
            headerBackTitle: 'Geri'
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
