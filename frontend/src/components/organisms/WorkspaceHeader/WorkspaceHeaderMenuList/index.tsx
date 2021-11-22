import React from 'react';
import { useRecoilValue } from 'recoil';
import DivLists from '@atoms/DivLists';
import ImageButton from '@atoms/ImageButton';
import defaultProfile from '@global/image/default_account.png';
import userState from '@state/user';
import Container from './styles';
import Label from '@atoms/Label';

interface Props {
  Profile: () => JSX.Element;
}

const WorkspaceHeaderMenuList = (): JSX.Element => {
  const user = useRecoilValue(userState);

  console.log(user);

  return (
    <Container>
      <ImageButton
        width={38}
        height={38}
        image={defaultProfile}
        onClick={() => {}}
      />
      <Label text={user?.account} />
      <DivLists text="코드 확인" />
      <DivLists text="프로필" />
      <DivLists text="환경 설정" />
      <DivLists text="로그아웃" />
      <DivLists text="워크스페이스 탈퇴" />
    </Container>
  );
};

export default WorkspaceHeaderMenuList;
