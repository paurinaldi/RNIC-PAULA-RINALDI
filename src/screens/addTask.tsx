import React, {useContext} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Routes} from '../types/enums/routes';
import {StackParamsList} from '../types/interfaces/navigation';
import {Tasks} from '../types/interfaces/tasks';
import TaskForm from '../components/taskForm';
import {TaskContext} from '../../App';

type AddTaskScreenProps = BottomTabScreenProps<
  StackParamsList,
  Routes.ADD_TASK
>;

const AddTask = ({navigation}: AddTaskScreenProps) => {
  const context = useContext(TaskContext);

  const addData = (data: Tasks) => {
    let cardsArray = [...context.cardsData];
    cardsArray.push(data);
    context.setCardsData(cardsArray);
  };

  return (
    <TaskForm
      navigation={navigation}
      data={context.cardsData}
      addData={data => addData(data)}
    />
  );
};

export default AddTask;
