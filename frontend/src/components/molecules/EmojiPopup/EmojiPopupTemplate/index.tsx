import Label from '@atoms/Label';
import React, { useEffect, useRef } from 'react';
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
  index: number;
}

const EmojiPopupTemplate = ({ matches, index }: Props): JSX.Element => {
  const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.firstChild.focus();
  // }, [ref.current]);

  return (
    <Container ref={ref}>
      {matches.map((emoji, idx) => (
        <UserContainer
          key={idx}
          selected={idx === index}
          tabIndex={-1}
          onKeyDown={(e) => {
            // if (e.key === 'ArrowUp') {
            //   if (idx === 0) {
            //     ref.current.lastChild.focus();
            //   } else {
            //     e.currentTarget.previousSibling.focus();
            //   }
            // } else if (e.key === 'ArrowDown') {
            //   if (idx === matches.length - 1) {
            //     ref.current.firstChild.focus();
            //   } else {
            //     e.currentTarget.nextSibling.focus();
            //   }
            // }
          }}
        >
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
