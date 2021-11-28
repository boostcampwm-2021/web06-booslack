import React from 'react';
import MemberElement from '@organisms/MemberElement';
import { Container, GreyContainer, StyledLabel } from '../styles';
import { NoResultLabel } from './styles';

interface Props {
  matches: any[];
  index: number;
}

const MemberTemplate = ({ matches, index }: Props): JSX.Element => {
  const usersInChannel = matches.filter((user) => user.inChannel === '1');
  const usersNotInChannel = matches.filter((user) => user.inChannel === '0');

  return (
    <Container>
      <StyledLabel text="In this channel" />
      {usersInChannel.length > 0 ? (
        <div>
          {usersInChannel.map((user, idx) => (
            <div key={user.id}>
              <MemberElement userHasWorkspace={user} selected={index === idx} />
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
                userHasWorkspace={user}
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
