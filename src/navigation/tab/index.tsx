import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Routes} from '../../types/enums/routes';
import {StackParamsList} from '../../types/interfaces/navigation';
import List from '../../screens/list';
import AddTask from '../../screens/addTask';
import ListIcon from '../../assets/icons/list';
import AddIcon from '../../assets/icons/add';

const Tab = createBottomTabNavigator<StackParamsList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <ListIcon color={color} />,
        }}
        name={Routes.LIST}
        component={List}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <AddIcon color={color} />,
        }}
        name={Routes.ADD_TASK}
        component={AddTask}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
