import Label from '@atoms/Label';
import React, { FunctionComponent } from 'react';
import {
  Container,
  StyledBoldLabel,
  StyledEditLabel,
  StyledLightLabel,
  StyledRedLabel,
} from './styles';

interface Props {
  light?: boolean;
  edit?: boolean;
  red?: boolean;
  title: string;
  description: string;
  onClick?: () => void;
}

const AboutElement: FunctionComponent<Props> = ({
  light,
  edit,
  red,
  title,
  description,
  onClick,
}: Props): JSX.Element => {
  return (
    <Container border={!red} onClick={onClick}>
      {red || <StyledBoldLabel text={title} />}
      {light ? (
        <StyledLightLabel text={description} />
      ) : (
        <Label text={description} />
      )}
      {edit && <StyledEditLabel text="Edit" />}
      {red && <StyledRedLabel text={title} />}
    </Container>
  );
};

AboutElement.defaultProps = {
  light: false,
  edit: false,
  red: false,
  onClick: () => {},
};

export default AboutElement;
