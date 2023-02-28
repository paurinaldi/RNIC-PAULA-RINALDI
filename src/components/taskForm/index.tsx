import React, {useRef, useState} from 'react';
import {TextInput, Keyboard} from 'react-native';
import {Tasks} from '../../types';
import {
  ButtonLabel,
  ButtonWrapper,
  Container,
  Input,
  SubmitIcon,
  Title,
} from './styles';

export interface TaskFormProps {
  data: Tasks[];
  addData: (data: Tasks) => void;
}

const TaskForm = ({data, addData}: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = () => {
    if (description !== '' && title !== '') {
      addData({
        id: data.length + 1,
        title: title,
        description: description,
        isCompleted: false,
      });
      Keyboard.dismiss();
      setTitle('');
      setDescription('');
    }
  };

  const descriptionRef = useRef<TextInput>(null);
  return (
    <Container>
      <Title>New task</Title>
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
      <Input
        value={description}
        onChangeText={value => setDescription(value)}
        placeholder="Description"
        ref={descriptionRef}
      />
      <ButtonWrapper onPress={() => onSubmit()}>
        <ButtonLabel>Submit</ButtonLabel>
        <SubmitIcon />
      </ButtonWrapper>
    </Container>
  );
};

export default TaskForm;
