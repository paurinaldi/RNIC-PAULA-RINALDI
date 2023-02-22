import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: isAndroid ? Colors.lighter : Colors.darker,
    flex: 1,
  },
});
