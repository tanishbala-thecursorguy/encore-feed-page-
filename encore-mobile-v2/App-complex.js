import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Encore Home</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Home', 'Home button pressed!')}
      >
        <Text style={styles.buttonText}>Test Button</Text>
      </TouchableOpacity>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Search</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Search', 'Search button pressed!')}
      >
        <Text style={styles.buttonText}>Test Search</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Profile', 'Profile button pressed!')}
      >
        <Text style={styles.buttonText}>Test Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#10b981',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: '#10b981',
            borderTopWidth: 2,
            height: 90,
            paddingBottom: 30,
            paddingTop: 10,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#10b981',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});