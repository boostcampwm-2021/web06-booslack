import ThreadContent from '@molecules/ThreadContent';
import userState from '@state/user';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const ChatContent = ({ inputBar }: Props): JSX.Element => {
  const [threads, setThreads] = useState([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const getThreads = async () => {
      const res = await axios.get(`/api/threads?channelId=${user.channelId}`);
      setThreads(res.data.threads);
    };
    getThreads();
  }, [user.channelId]);

  return (
    <>
      <Container>
        {threads.map((thread) => (
          <ThreadContent
            key={thread.id}
            firstLabelContent={`user ${thread.id}: ${thread.message} at ${thread.time}`}
          />
        ))}
      </Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
