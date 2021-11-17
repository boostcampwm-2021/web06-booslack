/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useAsync from '@hook/useAsync';
import userState from '@state/user';
import { Workspace } from '@global/type';
import {
  StyledLabel,
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
      {workspaces?.map(({ id, name, count }: Workspace & { count: number }) => {
        return (
          <StyledDiv key={`workspacelist${id}`}>
            <StyledSelectWorkspace firstLabelContent={name} content={count} />
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
  const { nickname } = useRecoilValue(userState);
  const NameLabel = <StyledLabel text={`${nickname}의 워크스페이스`} />;

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
