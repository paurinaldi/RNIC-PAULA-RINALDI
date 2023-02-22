import React, {useEffect, useState} from 'react';
import {
  AppState,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {tasks} from './src/constants/tasks';
import Title from './src/components/title';
import TaskForm from './src/components/taskForm';
import {Tasks} from './src/types';
import {styles} from './styles';
import List from './src/components/list';

const App = (): JSX.Element => {
  const isAndroid = Platform.OS === 'android';
  const [cardsData, setCardsData] = useState(tasks);

  const addData = (data: Tasks) => {
    let cardsArray = [...cardsData];
    cardsArray.push(data);
    setCardsData(cardsArray);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        setCardsData([]);
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const backgroundStyle = isAndroid
    ? styles.lighterBackground
    : styles.darkerBackground;

  return (
    <KeyboardAvoidingView
      style={backgroundStyle}
      behavior={isAndroid ? undefined : 'padding'}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isAndroid ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Title />
        <List data={cardsData} />
        <TaskForm addData={data => addData(data)} data={cardsData} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;
