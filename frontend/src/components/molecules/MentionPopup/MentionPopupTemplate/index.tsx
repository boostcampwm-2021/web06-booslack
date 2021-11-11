import Label from '@atoms/Label';
import React from 'react';
import {
  Container,
  PrimaryContent,
  SecondaryContent,
  StyledBoldLabel,
  UserContainer,
  UserElement,
} from './styles';

const channelId = 1;

interface Props {
  matches: [];
  index: number;
}

const MentionPopupTemplate = ({ matches, index }: Props): JSX.Element => {
  return (
    <Container>
      {matches.map((user, idx) => (
        <UserContainer key={user.id} selected={idx === index}>
          <UserElement>
            <PrimaryContent>
              <StyledBoldLabel text={user.name} />
              <Label text={user.id} />
            </PrimaryContent>
            <SecondaryContent>
              {user.channelId !== channelId && <Label text="Not in channel" />}
            </SecondaryContent>
          </UserElement>
        </UserContainer>
      ))}
    </Container>
  );
};

export default MentionPopupTemplate;
