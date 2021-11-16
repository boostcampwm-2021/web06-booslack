/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useAsync from '@hook/useAsync';
import { Workspace } from '@global/type';
import {
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
  StyledLabeledButton,
} from './styles';

const WorkSpaceLists = ({
  workspaces,
}: {
  workspaces: Workspace[];
}): JSX.Element => {
  const history = useHistory();

  return (
    <>
      {workspaces?.map(({ id, name }: Workspace) => {
        return (
          <StyledDiv key={`workspacelist${id}`}>
            <StyledSelectWorkspace firstLabelContent={name} content={123} />
            <StyledLabeledButton
              text="실행"
              onClick={() => history.push(`client/${id}/1`)}
            />
          </StyledDiv>
        );
      })}
    </>
  );
};

const WorkSpaceListContent = (): JSX.Element => {
  const NameLabel = <Label text={`${'ycp998'}의 워크스페이스`} />;

  const { data, loading, error } = useAsync(null, API.get.workspace.user, []);

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <AsyncBranch data={data} loading={loading} error={error}>
          <WorkSpaceLists workspaces={data?.workspaces as Workspace[]} />
        </AsyncBranch>
        <LabeledDefaultButton text="더보기" />
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
