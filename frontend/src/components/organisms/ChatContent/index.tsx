import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ThreadContent from '@molecules/ThreadContent';
import userState from '@state/user';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const ChatContent = ({ inputBar }: Props): JSX.Element => {
  const [threads, setThreads] = useState([]);
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();

  useEffect(() => {
    const getThreads = async () => {
      const res = await axios.get(`/api/threads?channelId=${channelId}`);
      setThreads(res.data.threads);
    };
    getThreads();
  }, [channelId]);

  return (
    <>
      <Container>
        {threads.map((thread) => (
          <ThreadContent
            key={thread.id}
            nickname={thread.userHasWorkspace.nickname}
            message={thread.message}
            createdTime={thread.createdAt}
          />
        ))}
      </Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
