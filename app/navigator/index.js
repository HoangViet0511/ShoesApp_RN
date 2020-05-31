import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import FavoriteScreen from '../screens/Favorites';
import CartScreen from '../screens/Cart';
import StoreScreen from '../screens/Stores';
import ProfileScreen from '../screens/Profile';
import SigninScreen from '../screens/Signin';
import ProductDetailScreen from '../screens/ProductDetail';
import CategoryScreen from '../screens/Category';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator screenOptions={{title: ''}}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} />,
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => <Icon name="hearto" size={25} />,
        }}
      />
      <Tabs.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: () => <Icon name="shoppingcart" size={25} />,
        }}/>
      <Tabs.Screen name="Store" component={StoreScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" component={BottomTab} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;