import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {myTheme} from './src/constants/theme';

const isAndroid = Platform.OS === 'android';
const backgroundColor = ({theme}: {theme: typeof myTheme}) =>
  isAndroid ? theme.colors.white : theme.colors.black;

export const KeyboardAvoidingWrapper = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${backgroundColor};
`;

export const ViewWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`;

export const CustomStatusBar = styled.StatusBar`
  background-color: ${backgroundColor};
`;
