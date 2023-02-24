import React, {useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {tasks} from './src/constants/tasks';
import Title from './src/components/title';
import TaskForm from './src/components/taskForm';
import {Tasks} from './src/types';
import {CustomStatusBar, KeyboardAvoidingWrapper, ViewWrapper} from './styles';
import List from './src/components/list';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';

const App = (): JSX.Element => {
  const [cardsData, setCardsData] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const addData = (data: Tasks) => {
    let cardsArray = [...cardsData];
    cardsArray.push(data);
    setCardsData(cardsArray);
  };

  const editData = (data: Tasks) => {
    if (data.isCompleted) {
      data.isCompleted = false;
    } else {
      data.isCompleted = true;
    }
    let cardsArray = [...cardsData];
    setCardsData(cardsArray);
  };

  useEffect(() => {
    RNBootSplash.hide({fade: true});
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
    <ThemeProvider theme={myTheme}>
      <ViewWrapper>
        <KeyboardAvoidingWrapper behavior={isAndroid ? undefined : 'padding'}>
          <CustomStatusBar
            barStyle={isAndroid ? 'dark-content' : 'light-content'}
            backgroundColor={
              isAndroid ? myTheme.colors.white : myTheme.colors.black
            }
          />
          <Title />
          <List data={cardsData} editData={data => editData(data)} />
          <TaskForm addData={data => addData(data)} data={cardsData} />
        </KeyboardAvoidingWrapper>
      </ViewWrapper>
    </ThemeProvider>
  );
};

export default App;
