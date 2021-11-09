import React from 'react';
import { Container, StyledLabeledButton, StyledHeader } from './styles';

interface Props {}

const WorkspaceListTemplate = ({}: Props): JSX.Element => {
  const Title: JSX.Element = <div>122</div>;
  const RightButtonDiv: JSX.Element = (
    <div>
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
    </div>
  );

  return (
    <Container>
      <StyledHeader title={Title} rightButton={RightButtonDiv} />

      <main>asdas</main>

      <footer>footer</footer>
    </Container>
  );
};

export default WorkspaceListTemplate;
