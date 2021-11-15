import React, { useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';
import { browseCursor } from '@state/Channel';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Redirect } from 'react-router-dom';

const BrowseChannel = (): JSX.Element => {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <WorkspaceTemplate>
      <BrowseContent />
    </WorkspaceTemplate>
  );
=======
=======
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

>>>>>>> 80e0f89 (feat: 로그인 여부 확인 함수 구현 및 모든 페이지 로그인별 페이지 경고 및 라우터 구현)
  const Content: JSX.Element = <BrowseContent />;

  const resetCursor = useResetRecoilState(browseCursor);
  useEffect(() => {
    return () => {
      resetCursor();
    };
  }, []);

  return <WorkspaceTemplate Content={Content} />;
>>>>>>> 0b1db23 (fix: browserchannel과 client에 대한 오류 수정)
};

export default BrowseChannel;
