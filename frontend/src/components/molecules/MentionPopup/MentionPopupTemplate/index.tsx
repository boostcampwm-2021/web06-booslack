import React from 'react';
import Label from '@atoms/Label';
import useKeyboardNavigator from '@hook/useKeyboardNavigator';
import defaultImage from '@global/image/default_account.png';
import {
  Container,
  PrimaryContent,
  SecondaryContent,
  StyledImageBox,
  UserContainer,
  UserElement,
} from './styles';

interface Props {
  matches: [];
  setValue: React.Dispatch<any>;
}

const MentionPopupTemplate = ({ matches, setValue }: Props): JSX.Element => {
  const index = useKeyboardNavigator(matches, setValue);
  return (
    <Container>
      {matches.map((user, idx) => (
        <UserContainer key={user.id} selected={idx === index}>
          <UserElement>
            <PrimaryContent>
              <StyledImageBox
                image={
                  user.fileUrl === null || user.fileUrl === 1
                    ? defaultImage
                    : user.fileUrl
                }
              />
              <Label text={user.nickname} />
            </PrimaryContent>
            <SecondaryContent>
              {user.inChannel === '0' && <Label text="Not in channel" />}
            </SecondaryContent>
          </UserElement>
        </UserContainer>
      ))}
    </Container>
  );
};

export default MentionPopupTemplate;
