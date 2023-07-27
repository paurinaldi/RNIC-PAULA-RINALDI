import React, {useEffect, useRef, useState} from 'react';
import {
  TextInput,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import TrashIcon from '../../assets/icons/trash';
import {Routes} from '../../types/enums/routes';
import {Tasks} from '../../types/interfaces/tasks';
import {
  ButtonLabel,
  ButtonsContainer,
  ButtonWrapper,
  DatePickerWrapper,
  Input,
  InputTitle,
  SubmitIcon,
  Title,
} from './styles';
import DatePicker from 'react-native-date-picker';

export interface TaskFormProps {
  data: Tasks[];
  addData?: (data: Tasks) => void;
  id?: number;
  editData?: (
    data: Tasks,
    title: string,
    description: string,
    date: Date,
  ) => void;
  navigation?: any;
  deleteTask?: (data: Tasks) => void;
}

const TaskForm = ({
  deleteTask,
  data,
  addData,
  id,
  editData,
  navigation,
}: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const selectedTask = data.filter(item => item.id === id)[0];
  const isEditing = !!(selectedTask && id);

  const onSubmit = () => {
    isEditing
      ? editData?.(selectedTask, title, description, date)
      : addData?.({
          id: data.length + 1,
          title: title,
          description: description,
          isCompleted: false,
          date: date,
        });
    Keyboard.dismiss();
    setTitle('');
    setDescription('');
    navigation.navigate(Routes.LIST);
  };

  const onDelete = () => {
    deleteTask?.(selectedTask);
    setTitle('');
    setDescription('');
    navigation.navigate(Routes.LIST);
  };

  useEffect(() => {
    if (selectedTask && id) {
      setTitle(selectedTask?.title);
      setDescription(selectedTask?.description);
      if (selectedTask.date) {
        setDate(selectedTask?.date);
      }
    }
  }, [selectedTask, id]);

  const descriptionRef = useRef<TextInput>(null);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Title>{selectedTask ? 'Edit Task' : 'New Task'}</Title>
        <InputTitle> Title </InputTitle>
        <Input
          value={title}
          onChangeText={value => setTitle(value)}
          placeholder="Title"
          returnKeyType="next"
          onSubmitEditing={() => {
            descriptionRef.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <InputTitle> Description </InputTitle>
        <Input
          value={description}
          onChangeText={value => setDescription(value)}
          placeholder="Description"
          ref={descriptionRef}
        />
        <InputTitle> Due date </InputTitle>
        <DatePickerWrapper>
          <DatePicker
            mode="date"
            androidVariant="nativeAndroid"
            date={date}
            onDateChange={date => setDate(new Date(date))}
          />
        </DatePickerWrapper>
        <ButtonsContainer>
          <ButtonWrapper disabled={!title || !description} onPress={onSubmit}>
            <ButtonLabel>{isEditing ? 'Edit' : 'Submit'}</ButtonLabel>
            <SubmitIcon />
          </ButtonWrapper>
          {isEditing && (
            <ButtonWrapper disabled={!title || !description} onPress={onDelete}>
              <ButtonLabel>Delete</ButtonLabel>
              <TrashIcon />
            </ButtonWrapper>
          )}
        </ButtonsContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskForm;
