import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import MapIcon from 'react-native-vector-icons/FontAwesome'

import { RestaurantsScreen } from './src/screens/Restaurants';
import {MapScreen} from './src/screens/Map'
import { RestaurantDetailScreen } from './src/screens/RestaurantDetail';
import { RestaurantContextProvider } from './src/contexts/RestaurantContext';
import { navigationRef } from './src/components/Root-Navigation';

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()


export default function App() {

const createScreenOptions = ({route}) => {

}

  const RestaurantsStack = () => {
    return (
      <Stack.Navigator  
        screenOptions =   {{
        headerShown : false,
        }}>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name = "RestaurantDetail" component = {RestaurantDetailScreen} />
      </Stack.Navigator>
    )
  }


  return (
    <TailwindProvider>
      <NavigationContainer ref = {navigationRef}>
        <RestaurantContextProvider>
       <BottomTab.Navigator
        screenOptions =   {{
          headerShown : false,
          }} >

        <BottomTab.Screen 
          name = "RestaurantsStack"
          options = {{
            tabBarIcon : ({color, focused})=>(
              <Icon 
                name = 'restaurant' 
                size = {25} 
                color = {focused ? '#2b2a2b' : '#999396'}/>
            ),
            tabBarLabel : ({focused,color}) => (
              <Text 
                style = {{ color : focused ? '#2b2a2b' : '#999396'}}>
                  Restaurants
              </Text>
            )
          }}
          component = {RestaurantsStack} />
        <BottomTab.Screen 
          name = "Map"
          component = {MapScreen}
          options = {{
            tabBarIcon : ({color, focused})=>(
              <MapIcon 
                name = 'map-marker' 
                size = {25} 
                color = {focused ? '#2b2a2b' : '#999396'}/>
            ),
            tabBarLabel : ({focused,color}) => (
              <Text 
                style = {{ color : focused ? '#2b2a2b' : '#999396'}}>
                  Map
              </Text>
            )
          }} />

       </BottomTab.Navigator>
        <StatusBar style="auto" />
        </RestaurantContextProvider>
      </NavigationContainer>
   </TailwindProvider>
  );
}


const TailButton = ()=>{
  return (
    <Button className = "bg-blue-600" title = "Testing Button" />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
