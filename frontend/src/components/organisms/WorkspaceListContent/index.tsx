import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import {
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
  StyledLabeledButton,
} from './styles';

interface Props {
  name?: string;
  content?: number;
}

const WorkSpaceLists = ({ name, content }: Props): JSX.Element => {
  const history = useHistory();

  return (
    <StyledDiv>
      <StyledSelectWorkspace firstLabelContent={name} content={content} />
      <StyledLabeledButton
        text="실행"
        onClick={() => history.push('client/1')}
      />
    </StyledDiv>
  );
};

WorkSpaceLists.defaultProps = {
  name: '부캠',
  content: 0,
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
