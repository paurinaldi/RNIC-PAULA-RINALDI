import React, {useContext} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Routes} from '../types/enums/routes';
import {StackParamsList} from '../types/interfaces/navigation';
import TaskList from '../components/list';
import {Tasks} from '../types/interfaces/tasks';
import {TaskContext} from '../../App';

type ListScreenProps = BottomTabScreenProps<StackParamsList, Routes.LIST>;

const List = ({navigation}: ListScreenProps) => {
  const context = useContext(TaskContext);

  const taskCompleted = (data: Tasks) => {
    if (!context) {
      return;
    }
    data.isCompleted = !data.isCompleted;
    context.setCardsData([...context.cardsData]);
  };

  return (
    <TaskList
      navigation={navigation}
      data={context?.cardsData || []}
      taskCompleted={taskCompleted}
    />
  );
};

export default List;
