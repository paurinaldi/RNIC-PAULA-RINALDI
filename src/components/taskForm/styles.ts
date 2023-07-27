import styled from 'styled-components/native';
import TickIcon from '../../assets/icons/tick';

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  padding-top: 10px;
  margin: 30px 0px;
  color: ${({theme}) => theme.colors.greyishGreen};
`;

export const Input = styled.TextInput`
  font-size: 18px;
  background-color: ${({theme}) => theme.colors.grey};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 30px 30px;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.pink};
  border-radius: 50px;
  height: 60px;
  width: 150px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => theme.colors.greyishGreen};
`;

export const SubmitIcon = styled(TickIcon)`
  height: 24px;
  width: 24px;
`;

export const DatePickerWrapper = styled.View`
  align-items: center;
`;

export const InputTitle = styled.Text`
  font-size: 20px;
  /* padding: 10px 20px; */
  margin: 15px 20px 5px 20px;
  font-weight: 600;
  text-align: left;
  color: ${({theme}) => theme.colors.greyishGreen};
`;
