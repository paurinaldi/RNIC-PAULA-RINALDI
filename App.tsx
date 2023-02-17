/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Card from './src/components/card';
import {tasks} from './src/constants/tasks';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Title from './src/components/title';
import TaskForm from './src/components/taskForm';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Title />
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <Card title={item.title} description={item.description} />
        )}
      />
      <TaskForm />
    </SafeAreaView>
  );
};

export default App;
