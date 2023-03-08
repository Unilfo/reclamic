import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from "./src/pages/Main";
import {Login} from './src/pages/Login';
import {Registration} from "./src/pages/Registration";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Search} from "./src/pages/Search";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from "./src/const/colors";
import {Profile} from "./src/pages/Profile";
import AddPosts from "./src/components/AddPosts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomRouting() {
  return (
    <Tab.Navigator
      initialRouteName="BottomRouting"
      screenOptions={{
        activeTintColor: COLORS.blue,
      }}
    >
      <Tab.Screen name="Home" component={Main} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        ),
      }}/>
      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="search" color={color} size={size}/>
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size}/>
        ),
      }}/>
      <Tab.Screen name="AddPosts" component={AddPosts} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="camera-plus" color={color} size={size}/>
        ),
      }}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Main" component={BottomRouting} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Registration" component={Registration} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;