import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '.src/screens/HomeScreen.js';
import PerfilScreen from '.src/screens/PerfilScreen.js';
import ConfigScreen from '.src/screens/ConfigScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1e40af',
          tabBarInactiveTintColor: '#64748b',
          headerShown: false, // Esconde o cabeçalho padrão para usar o seu design
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Tab.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Perfil' }}
        />
        <Tab.Screen 
          name="Config" 
          component={ConfigScreen} 
          options={{ title: 'Ajustes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}