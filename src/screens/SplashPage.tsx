import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import ContainerStyle from '../styles/ContainerStyle';
import SplashPageStyle from '../styles/SplashPageStyle';

const SplashPage: React.FC = () => {
  const navigation = useNavigation();

  const quote = 'The press is not only free; it is powerful. That power is ours. It is the ' +
    'proudest that man can enjoy. It was not granted by monarchs, it was not gained for us' +
    'by aristocracies; but it sprang from the people, and, with an immortal instinct,' +
    'it has always worked for the people.';

  return (
    <View style={ContainerStyle.container}>
      <FontAwesome name="newspaper-o" size={100} />
      <Text style={SplashPageStyle.quote}>{quote}</Text>
      <Text style={SplashPageStyle.quotedPerson}>- Benjamin Disraeli</Text>
      <Button
        title="Show News"
        onPress={(): void => navigation.navigate('NewsFeed')}
      />
    </View>
  );
};

export default SplashPage;
