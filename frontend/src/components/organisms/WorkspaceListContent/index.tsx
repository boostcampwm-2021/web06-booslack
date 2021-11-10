import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import React from 'react';
import {
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
  StyledLabeledButton,
} from './styles';

const WorkSpaceLists = () => {
  return (
    <StyledDiv>
      <StyledSelectWorkspace firstLabelContent="부캠 1" content="21명" />
      <StyledLabeledButton text="실행" />
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
        <LabeledDefaultButton text="더보기" />
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
