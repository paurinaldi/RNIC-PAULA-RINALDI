import {Platform, StyleSheet} from 'react-native';
const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: isAndroid ? '#EBDEF0' : '#7A7A7A',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5,
  },

  text: {
    fontSize: 15,
    color: isAndroid ? '#7A7A7A' : '#000',
  },

  status: {
    margin: 10,
    alignSelf: 'flex-end',
    fontWeight: '600',
    color: '#88B478',
  },
});
