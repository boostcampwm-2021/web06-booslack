import React from 'react';
import useKeyboardNavigator from '@hook/useKeyboardNavigator';
import {
  Container,
  PrimaryContent,
  SecondaryContent,
  StyledBoldLabel,
  UserContainer,
  UserElement,
} from './styles';

interface Props {
  matches: [];
  setValue: React.Dispatch<any>;
}

const EmojiPopupTemplate = ({ matches, setValue }: Props): JSX.Element => {
  const index = useKeyboardNavigator(matches, setValue);

  return (
    <Container>
      {matches.map((emoji, idx) => (
        <UserContainer key={idx} selected={idx === index}>
          <UserElement>
            <PrimaryContent>
              <StyledBoldLabel text={emoji.emoji} />
            </PrimaryContent>
            <SecondaryContent>
              <StyledBoldLabel text={emoji.description} />
            </SecondaryContent>
          </UserElement>
        </UserContainer>
      ))}
    </Container>
  );
};

export default EmojiPopupTemplate;
