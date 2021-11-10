import React, { useEffect, useState } from 'react';
import QuestionForm from '@molecules/QuestionForm';
import { submitInput, changeFile } from '@global/util';
import Container from './style';

const finishedPage = (): JSX.Element => {
  return <></>;
};

const SetupTeamQuestions = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [channel, setChannel] = useState<string>('');
  const [selectedfile, setSelectedFile] = useState(null);

  useEffect(() => {
    return () => {
      setName('');
      setChannel('');
      setSelectedFile(null);
    };
  }, []);

  const askName = (
    <QuestionForm
      key="askName"
      text="워크스페이스를 생성합니다. 회사 또는 팀 이름이 어떻게 됩니까?"
      onSubmit={(e) => setName(submitInput(e))}
    />
  );

  const askChannel = (
    <QuestionForm
      key="askChannel"
      text="채널을 생성합니다. 처음 채널의 이름을 무엇으로 할까요?"
      onSubmit={(e) => setChannel(submitInput(e))}
    />
  );

  const askFile = (
    <QuestionForm
      key="askFile"
      type="file"
      text="워크스페이스 프로필을 넣어주세요!!"
      onChange={(e) => setSelectedFile(changeFile(e))}
    />
  );

  let nowPage = finishedPage();

  if (!selectedfile) nowPage = askFile;
  if (!channel) nowPage = askChannel;
  if (!name) nowPage = askName;

  return <Container>{nowPage}</Container>;
};

export default SetupTeamQuestions;
