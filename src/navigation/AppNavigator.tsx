import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/stack';

export type MainStackParams = {
  Splash: undefined;
  Home: undefined;
  PostDetails: {
    postId: number;
    postTitle: string;
    postBody: string;
  };
};

const Stack = createNativeStackNavigator<MainStackParams>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: 'Social App'}}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetailsScreen}
          options={{headerTitle: 'Post Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
