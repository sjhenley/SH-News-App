import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkingConfiguration from './LinkingConfiguration';

import SplashPage from '../screens/SplashPage';
import NewsFeed from '../screens/NewsFeed';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <Stack.Navigator>
      <Stack.Screen name="SplashPage" component={SplashPage} />
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
