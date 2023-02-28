import React, {createContext, useEffect, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import {CustomStatusBar, KeyboardAvoidingWrapper, ViewWrapper} from './styles';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import Navigation from './src/navigation';
import {tasks} from './src/constants/tasks';
import {Tasks} from './src/types/interfaces/tasks';

type taskContextType = {
  cardsData: Tasks[];
  setCardsData: (data: Tasks[]) => void;
};

export const TaskContext = createContext<taskContextType>({
  cardsData: tasks,
  setCardsData: () => undefined,
});

const App = (): JSX.Element => {
  const [cardsData, setCardsData] = useState(tasks);
  const isAndroid = Platform.OS === 'android';

  const value = useMemo(() => ({cardsData, setCardsData}), [cardsData]);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <TaskContext.Provider value={value}>
      <ThemeProvider theme={myTheme}>
        <ViewWrapper>
          <KeyboardAvoidingWrapper behavior={isAndroid ? undefined : 'padding'}>
            <CustomStatusBar
              barStyle={isAndroid ? 'dark-content' : 'light-content'}
              backgroundColor={
                isAndroid ? myTheme.colors.white : myTheme.colors.black
              }
            />
            <Navigation />
          </KeyboardAvoidingWrapper>
        </ViewWrapper>
      </ThemeProvider>
    </TaskContext.Provider>
  );
};

export default App;
