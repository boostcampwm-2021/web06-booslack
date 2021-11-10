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
      title="워크스페이스를 생성합니다."
      content="회사 또는 팀 이름이 어떻게 됩니까?"
      onSubmit={(e) => setName(submitInput(e))}
      onSet={({ value }: { value: string }) => setName(value)}
    />
  );

  const askChannel = (
    <QuestionForm
      key="askChannel"
      title="채널을 생성합니다."
      content="처음 채널의 이름을 무엇으로 할까요?"
      onSubmit={(e) => setChannel(submitInput(e))}
      onSet={({ value }: { value: string }) => setChannel(value)}
    />
  );

  const askFile = (
    <QuestionForm
      key="askFile"
      type="file"
      title="채널을 생성합니다."
      content=""
      onSubmit={(e) => setSelectedFile(changeFile(e))}
      onSet={({ files }: { files: File }) => setSelectedFile(files[0])}
    />
  );

  let nowPage = finishedPage();

  if (!selectedfile) nowPage = askFile;
  if (!channel) nowPage = askChannel;
  if (!name) nowPage = askName;

  return <Container>{nowPage}</Container>;
};

export default SetupTeamQuestions;
