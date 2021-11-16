import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SubmitCodeForm from '@organisms/SubmitCodeForm';
import CodeModal from '@organisms/CodeModal';
import CodeTemplate from '@templates/Code';
import { Container } from './style';

const GeneratedCode = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const {
    data: { code },
  } = location.state as { data: { code: string } };

  return (
    <>
      <CodeTemplate
        text="코드를 확인하세요!"
        onClick={() => history.push('workspacelist')}
        code={code}
      >
        <Container>
          <SubmitCodeForm
            code={code}
            setCode={null}
            highOrderFunction={null}
            readOnly
          />
        </Container>
      </CodeTemplate>
      <CodeModal Content="잘못된 코드입니다." />
    </>
  );
};

export default GeneratedCode;
