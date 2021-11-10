import React, { useEffect, useState } from 'react';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import QuestionForm from '@molecules/QuestionForm';
import { submitInput, changeFile } from '@global/util';
import Container from './style';

const finishedPage = (): JSX.Element => {
  return <LabeledDefaultButton text="제출" />;
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
      count="1/3"
      key="askName"
      title="워크스페이스를 생성합니다."
      content="회사 또는 팀 이름이 어떻게 됩니까?"
      onSubmit={(e) => setName(submitInput(e))}
      onSet={({ value }: { value: string }) => setName(value)}
    />
  );

  const askChannel = (
    <QuestionForm
      count="2/3"
      key="askChannel"
      title="채널을 생성합니다."
      content="처음 채널의 이름을 무엇으로 할까요?"
      onSubmit={(e) => setChannel(submitInput(e))}
      onSet={({ value }: { value: string }) => setChannel(value)}
    />
  );

  const askFile = (
    <QuestionForm
      count="3/3"
      key="askFile"
      type="file"
      title="초기 워크스페이스 사진을 설정합니다."
      content="초기 워크스페이스의 프로필이 될 이미지 파일을 넣어주세요."
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
