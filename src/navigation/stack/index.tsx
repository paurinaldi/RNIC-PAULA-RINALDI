import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsList} from '../../types/interfaces/navigation';
import {Routes} from '../../types/enums/routes';
import TabNavigation from '../tab';
import EditTask from '../../screens/editTask';

const Stack = createNativeStackNavigator<StackParamsList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.TAB_NAVIGATION} component={TabNavigation} />
      <Stack.Screen name={Routes.EDIT_TASK} component={EditTask} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
