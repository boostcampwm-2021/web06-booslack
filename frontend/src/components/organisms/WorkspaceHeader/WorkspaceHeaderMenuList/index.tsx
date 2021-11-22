import React from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory, useParams } from 'react-router-dom';

import DivLists from '@atoms/DivLists';
import ImageButton from '@atoms/ImageButton';
import Label from '@atoms/Label';
import defaultProfile from '@global/image/default_account.png';
import { logout } from '@global/util/auth';
import userState from '@state/user';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import Container, { RedDivLists, GreyLine } from './styles';

interface Props {
  Profile: () => JSX.Element;
}

const WorkspaceHeaderMenuList = (): JSX.Element => {
  const history = useHistory();
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();
  const { data } = useWorkspaceQuery(workspaceId);

  const showCode = () => {
    const code = data?.code;

    if (code) {
      history.push({
        pathname: '/generatecode',
        state: {
          data: { code, nextPage: `client/${workspaceId}/browse-channels` },
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
      <DivLists text="프로필" onClick={() => {}} />
      <DivLists text="환경 설정" onClick={() => {}} />
      <GreyLine />
      <RedDivLists text="로그아웃" onClick={logout} />
      <RedDivLists
        text="나가기"
        onClick={() => {
          history.push({
            pathname: '/workspacelist',
          });
        }}
      />
    </Container>
  );
};

export default WorkspaceHeaderMenuList;
