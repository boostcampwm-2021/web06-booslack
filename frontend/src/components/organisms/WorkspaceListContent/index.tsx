/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';

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

  const [dataList, setDataList] = useState<unknown[]>([]);

  const { setPage, isLoading, data, error, isPreviousData } = usePagenation(
    'workspacelists',
    fetchProjects,
  );

  useEffect(() => {
    if (data) setDataList([...dataList, ...data?.workspaces]);
  }, [data]);

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <AsyncBranch data={dataList} loading={isLoading} error={error}>
          <WorkSpaceLists workspaces={dataList as Workspace[]} />
        </AsyncBranch>
        <LabeledDefaultButton
          text="더보기"
          disabled={isPreviousData || !data?.hasMore}
          onClick={() => setPage((old) => (data?.hasMore ? old + 1 : old))}
        />
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
