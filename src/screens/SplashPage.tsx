import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ContainerStyle from '../styles/ContainerStyle';

const SplashPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={ContainerStyle.container}>
      <Text>Splash Page</Text>
      <Button
        title="Navigate"
        onPress={(): void => navigation.navigate('NewsFeed')}
      />
    </View>
  );
};

export default SplashPage;
