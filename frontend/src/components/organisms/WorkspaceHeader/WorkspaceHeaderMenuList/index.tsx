import React from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import DivLists from '@atoms/DivLists';
import ImageButton from '@atoms/ImageButton';
import Label from '@atoms/Label';
import defaultProfile from '@global/image/default_account.png';
import { getCode } from '@global/util';
import API from '@global/api';
import userState from '@state/user';
import Container from './styles';

interface Props {
  Profile: () => JSX.Element;
}

const WorkspaceHeaderMenuList = (): JSX.Element => {
  const history = useHistory();
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();

  const getCodeAxios = async () => {
    return axios({
      method: 'get',
      url: API.get.workspace.getCode,
      data: {
        params: {
          workspaceId,
        },
      },
    });
  };

  const showCode = async () => {
    const code = await getCode(getCodeAxios, () => {});
    if (code) {
      history.push({
        pathname: '/generatecode',
        state: {
          data: { code, nextPage: `${workspaceId}/browse-channels` },
        },
      });
    }
  };

  return (
    <Container>
      <ImageButton
        width={38}
        height={38}
        image={defaultProfile}
        onClick={() => {}}
      />
      <Label text={user?.account} />
      <DivLists text="코드 확인" onClick={showCode} />
      <DivLists text="프로필" />
      <DivLists text="환경 설정" />
      <DivLists text="로그아웃" />
      <DivLists text="워크스페이스 탈퇴" />
    </Container>
  );
};

export default WorkspaceHeaderMenuList;
