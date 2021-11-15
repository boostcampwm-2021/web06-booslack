import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SubmitCodeForm from '@molecules/SubmitCodeForm';
import CodeTemplate from '@templates/Code';
import { Container } from './style';

interface Props {
  name: undefined | string;
  channel: undefined | string;
  selectedFile: undefined | File;
}

const GeneratedCode = (): JSX.Element => {
  const history = useHistory();

  const [code, setCode] = useState<string>('');

  return (
    <CodeTemplate
      text="코드를 확인하세요!"
      onClick={() => history.push('workspacelist')}
    >
      <Container>
        <SubmitCodeForm setCode={setCode} readOnly />
      </Container>
    </CodeTemplate>
  );
};

export default GeneratedCode;
