import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CodeModal from '@organisms/CodeModal';
import CodeTemplate from '@templates/Code';
import SubmitCodeForm from '@molecules/SubmitCodeForm';
import { Container } from './style';

const InvitedCode = ({ name, channel, selectedFile }): JSX.Element => {
  const history = useHistory();
  const [code, setCode] = useState<string>('');

  return (
    <>
      <CodeTemplate
        text="코드를 입력해주세요!"
        onClick={() => history.push('workspacelist')}
      >
        <Container>
          <SubmitCodeForm setCode={setCode} />
        </Container>
      </CodeTemplate>
      <CodeModal Content="잘못된 코드입니다." />
    </>
  );
};

export default InvitedCode;
