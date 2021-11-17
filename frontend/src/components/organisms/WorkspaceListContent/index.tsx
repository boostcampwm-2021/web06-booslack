/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useAsync from '@hook/useAsync';
import usePagenation from '@hook/usePagenation';
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

async function fetchProjects(page = 0) {
  try {
    const { data } = await axios.get(API.get.workspace.user, {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    return Error;
  }
}

const WorkSpaceListContent = (): JSX.Element => {
  const { nickname } = useRecoilValue(userState);
  const NameLabel = <StyledLabel text={`${nickname ?? ''}의 워크스페이스`} />;

  const { page, isLoading, data, error, isFetching, isPreviousData } =
    usePagenation('workspacelists', fetchProjects);

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <AsyncBranch data={data} loading={isLoading} error={error}>
          <WorkSpaceLists workspaces={data?.workspaces as Workspace[]} />
        </AsyncBranch>
        <LabeledDefaultButton text="더보기" />
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
