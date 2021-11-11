import styled from 'styled-components';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';

export const LoginInput = styled(Input)`
  width: 500px;
  height: 65px;
  border-radius: 12px;
  border: 0.5px solid;
`;

export const RouterLabeledButton = styled(LabeledButton)`
  width: 240px;
  height: 60px;
  background-color: #ecdeec;
  border-radius: 12px;
`;

export const LabelColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 500px;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 360px;
`;

export const NoticeDiv = styled.div`
  width: 500px;
  font-weight: 500;
  color: blue;
`;
