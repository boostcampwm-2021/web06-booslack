import React from 'react';
import { useHistory } from 'react-router-dom';
import SubmitCodeForm from '@molecules/SubmitCodeForm';
import CodeTemplate from '@templates/Code';
import { Container } from './style';

interface Props {
  history: any;
}

const InvitedCode = ({ history }: Props): JSX.Element => {
  return (
    <CodeTemplate
      text="코드을 입력해주세요!"
      onClick={() => history.push('workspacelist')}
    >
      <Container>
        <SubmitCodeForm />
      </Container>
    </CodeTemplate>
  );
};

export default InvitedCode;
