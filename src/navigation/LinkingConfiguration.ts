import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SplashPage: 'SplashPage',
      NewsFeed: 'NewsFeed',
    },
  },
};
