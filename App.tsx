import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation'
import SplashPage from './src/screens/SplashPage';

const App: React.FC = () => (
  <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>
);

export default App;
