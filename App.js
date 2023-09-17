import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
SplashScreen.preventAutoHideAsync();
const Stack=createNativeStackNavigator();
export default function App() {
  const [loaded]=useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf"),

  });
  const onLayoutRootView=useCallback(async () =>{
    if(loaded){
        await SplashScreen.hideAsync();
    }
},[loaded])
if(!loaded) return null;
  return (
    <NavigationContainer  >
      <Stack.Navigator>
        <Stack.Screen
        name='bottom-navigation'
        component={BottomTabNavigation}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

