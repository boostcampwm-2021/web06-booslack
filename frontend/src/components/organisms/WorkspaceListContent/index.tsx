import Label from '@atoms/Label';
import React from 'react';
import { Container, StyledHeader } from './styles';

const WorkSpaceListContent = (): JSX.Element => {
  const NameLabel = <Label text={`${'ycp998'}의 워크스페이스`} />;

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      {new Array(2000).fill(null).map((ele) => 'www\n')}
    </Container>
  );
};

export default WorkSpaceListContent;
