import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import ColorGenerator from './components/ColorGenerator';

export default function App() {
  return (
    <View >
      <ColorGenerator  />
      <StatusBar style="auto" />
    </View>
  );
}

