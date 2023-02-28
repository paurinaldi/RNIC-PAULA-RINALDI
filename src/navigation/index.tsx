import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Navigation = () => {
  const [initialState, setInitialState] = useState();
  const [isReady, setIsReady] = React.useState(false);

  const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

  const restoreState = async () => {
    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
    const state = savedStateString ? JSON.parse(savedStateString) : undefined;

    if (state !== undefined) {
      setInitialState(state);
    }
    setIsReady(true);
  };

  useEffect(() => {
    !isReady && restoreState();
  }, [isReady]);

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
