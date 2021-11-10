import Label from '@atoms/Label';
import React from 'react';
import {
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
} from './styles';

const WorkSpaceLists = () => {
  return (
    <StyledDiv>
      <StyledSelectWorkspace firstLabelContent="부캠 1" content="21명" />
      <div>sad</div>
    </StyledDiv>
  );
};

const WorkSpaceListContent = (): JSX.Element => {
  const NameLabel = <Label text={`${'ycp998'}의 워크스페이스`} />;

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <WorkSpaceLists />
        <WorkSpaceLists />
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
