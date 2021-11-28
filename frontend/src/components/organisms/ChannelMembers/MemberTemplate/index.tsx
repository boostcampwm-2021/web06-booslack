import React from 'react';
import MemberElement from '@organisms/MemberElement';
import useKeyboardNavigator from '@hook/useKeyboardNavigator';
import { NoResultLabel, Container, GreyContainer, StyledLabel } from './styles';

interface Props {
  matches: any[];
  setValue: React.Dispatch<any>;
}

export const AllMemberTemplate = ({
  matches,
  setValue,
}: Props): JSX.Element => {
  const usersInChannel = matches.filter((user) => user.inChannel === '1');
  const usersNotInChannel = matches.filter((user) => user.inChannel === '0');
  const index = useKeyboardNavigator(matches, setValue);

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

export const ChannelMemberTemplate = ({
  matches,
  setValue,
}: Props): JSX.Element => {
  const index = useKeyboardNavigator(matches, setValue);
  return (
    <Container>
      {matches.map((user, idx) => (
        <MemberElement
          key={user.id}
          userHasWorkspace={user}
          selected={index === idx}
        />
      ))}
    </Container>
  );
};
