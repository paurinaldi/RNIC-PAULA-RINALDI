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
  const [cardsData, setCardsData] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

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

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={isAndroid ? undefined : 'padding'}>
      <SafeAreaView style={styles.background}>
        <StatusBar
          barStyle={isAndroid ? 'light-content' : 'dark-content'}
          backgroundColor={styles.background.backgroundColor}
        />
        <Title />
        <List data={cardsData} />
        <TaskForm addData={data => addData(data)} data={cardsData} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;
