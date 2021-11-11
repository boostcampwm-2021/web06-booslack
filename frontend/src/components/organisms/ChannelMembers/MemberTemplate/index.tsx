import React from 'react';
import MemberElement from '../MemberElement';
import { Container, GreyContainer, StyledLabel } from '../styles';
import { NoResultLabel } from './styles';

const channelId = 1;

interface Props {
  matches: any[];
  index: number;
}

const MemberTemplate = ({ matches, index }: Props): JSX.Element => {
  const usersInChannel = matches.filter((user) => user.channelId === channelId);
  const usersNotInChannel = matches.filter(
    (user) => user.channelId !== channelId,
  );

  return (
    <Container>
      <StyledLabel text="In this channel" />
      {usersInChannel.length > 0 ? (
        <div>
          {usersInChannel.map((user, idx) => (
            <div key={user.id}>
              <MemberElement
                nickname={user.name}
                email={user.profile}
                selected={index === idx}
              />
            </div>
          ))}
        </div>
      ) : (
        <NoResultLabel text="No matches in this channel" />
      )}
      {usersNotInChannel.length > 0 && (
        <GreyContainer>
          <StyledLabel text="Not in this channel" />
          {usersNotInChannel.map((user, idx) => (
            <div key={user.id}>
              <MemberElement
                nickname={user.name}
                email={user.profile}
                selected={index === idx + usersInChannel.length}
              />
            </div>
          ))}
        </GreyContainer>
      )}
    </Container>
  );
};

export default MemberTemplate;
