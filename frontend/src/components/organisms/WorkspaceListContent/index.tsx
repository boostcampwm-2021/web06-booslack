import Label from '@atoms/Label';
import React from 'react';
import { Container, StyledHeader } from './styles';

const WorkSpaceListContent = (): JSX.Element => {
  const NameLabel = <Label text={`${'ycp998'}의 워크스페이스`} />;

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
    </Container>
  );
};

export default WorkSpaceListContent;
