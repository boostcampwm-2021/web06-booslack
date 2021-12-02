import styled from 'styled-components';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';

export const LoginInput = styled(Input)`
  width: 500px;
  height: 60px;
  border-radius: 12px;
  border: 0.5px solid;
`;

export const LabelColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 500px;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 220px;
`;

const LoginLabeledButton = styled(LabeledButton)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 60px;
  border-radius: 12px;
`;

export const GitLabeledButton = styled(LoginLabeledButton)`
  background-color: #c8c7ef;
`;

export const EmailLabeledButton = styled(LoginLabeledButton)`
  background-color: #ecdeec;
`;

export const RouterLabeledButton = styled(LoginLabeledButton)`
  width: 240px;
  height: 60px;
  background-color: #ecdeec;
`;
