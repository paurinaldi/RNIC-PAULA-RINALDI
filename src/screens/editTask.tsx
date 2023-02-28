import React, {useContext} from 'react';
import {Routes} from '../types/enums/routes';
import TaskForm from '../components/taskForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamsList} from '../types/interfaces/navigation';
import {Tasks} from '../types/interfaces/tasks';
import {TaskContext} from '../../App';

type EditTaskScreenProps = NativeStackScreenProps<
  StackParamsList,
  Routes.EDIT_TASK
>;

const EditTask = ({route, navigation}: EditTaskScreenProps) => {
  const context = useContext(TaskContext);

  const editData = (
    task: Tasks,
    title: string,
    description: string,
    date: Date,
  ) => {
    if (task?.title !== title) {
      task.title = title;
    }
    if (task?.description !== description) {
      task.description = description;
    }
    if (task?.date !== date) {
      task.date = date;
    }
    context.setCardsData([...context.cardsData]);
  };

  const deleteTask = (task: Tasks) => {
    const filteredTask = context.cardsData.filter(item => item.id === task.id);
    const index = context.cardsData.indexOf(filteredTask[0]);
    context.cardsData.splice(index, 1);
  };

  return (
    <TaskForm
      data={context.cardsData}
      id={route.params.id}
      editData={editData}
      navigation={navigation}
      deleteTask={deleteTask}
    />
  );
};

export default EditTask;
