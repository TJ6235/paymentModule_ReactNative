import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons'
// import CreditCard from './CreditCard';
// import Transactions from './Transactions';
// import LoanScreen from './LoanScreen';
import { colorschemes } from './Themes/colors'; 
import Paymenttoselfaccount from './Paymenttoselfaccount';
import Paymenttoupitransferpage from './Paymenttoupitransferpage';
import Paymenttoupiidpage from './Paymenttoupiidpage';
// import HomeInvestment from './HomeInvestment';
// import Statement from './Accounts/Statement';


const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route})=>({
          tabBarActiveTintColor:colorschemes.mainColor,
          tabBarLabel:route.state && route.state.index === 0 ? null : 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown :false,
        })}
      />
      <Tab.Screen
        name="paymenttoselfaccount"
        component={Paymenttoselfaccount}
        options={({route})=>({
          tabBarActiveTintColor:colorschemes.mainColor,        
          tabBarLabel: route.state && route.state.index === 1 ? 
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="pie-chart" color={color} size={size} />
          ),
          headerShown :false,
          drawerLabel : 'Hai',
        })}
      />
            <Tab.Screen
        name="paymentselftransterpage"
        component={Paymenttoupitransferpage}
        options={({route})=>({
          tabBarActiveTintColor:colorschemes.mainColor,
          tabBarLabel: route.state && route.state.index === 2 ?
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="credit-card" color={color} size={size} />
          ),
          headerShown :false,
        })}
      />
            <Tab.Screen
        name="paymenttoupiid"
        component={Paymenttoupiidpage}
        options={({route})=>({
          tabBarActiveTintColor:colorschemes.mainColor,
          tabBarLabel: route.state && route.state.index === 3 ? 
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="cash" color={color} size={size} />
          ),
          headerShown :false,
        })}
      />
            <Tab.Screen
        name="paymenttoupitranster"
        component={Paymenttoupitransferpage}
        options={({route})=>({
          tabBarActiveTintColor:colorschemes.mainColor,
          tabBarLabel: route.state && route.state.index === 4 ? 
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="arrow-redo" color={color} size={size} />
          ),
          headerShown :false,
        })}
      />
    </Tab.Navigator>
 
  )
}

export default Home