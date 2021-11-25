import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';
import { RecoilState, useRecoilState, useSetRecoilState } from 'recoil';
import Input from '@atoms/Input';
import DivLists from '@atoms/DivLists';
import { GreyLine } from '@organisms/WorkspaceHeader/WorkspaceHeaderMenuList/styles';
import useRefLocate from '@hook/useRefLocate';
import { SortOption } from '@global/type';
import { SortedOptionMordalState } from '@state/modal';
import Container, { StyledDiv } from './styles';

interface Props<T> {
  isSortOpened: boolean;
  usingAtom: RecoilState<T>;
  onClose: () => void;
  setPage: Dispatch<SetStateAction<number>>;
  customRef: RefObject<HTMLElement>;
}

const SortedOptionMordal = ({
  isSortOpened,
  usingAtom,
  setPage,
  onClose,
  customRef,
}: Props<SortOption>): JSX.Element => {
  const sortOption = useSetRecoilState<SortOption>(usingAtom);
  const [xWidth, yHeight] = useRefLocate(customRef, 50);
  const [checkedItems, setCheckedItems] = useRecoilState(
    SortedOptionMordalState,
  );

  const toggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const ToggledMap = checkedItems.map((ele, index) => {
      if (parseInt(value, 10) === index) return checked;
      return ele;
    });

    setPage(0);
    setCheckedItems(ToggledMap);
  };

  return (
    <Container
      x={xWidth}
      y={yHeight}
      customRef={customRef}
      isOpen={isSortOpened}
      onClose={onClose}
      zIndex={90}
    >
      <DivLists
        onClick={() => {
          sortOption('alpha');
        }}
        text="알파벳 순"
      />
      <DivLists
        onClick={() => {
          sortOption('rAlpha');
        }}
        text="알파벳 역순"
      />
      <GreyLine />
      <StyledDiv>
        <Input
          type="checkbox"
          value="0"
          checked={checkedItems[0]}
          onChange={(e) => toggle(e)}
        />
        private 채널 표시
      </StyledDiv>

      <StyledDiv>
        <Input
          type="checkbox"
          value="1"
          checked={checkedItems[1]}
          onChange={(e) => toggle(e)}
        />
        public 채널 표시
      </StyledDiv>

      <StyledDiv>
        <Input
          type="checkbox"
          value="2"
          checked={checkedItems[2]}
          onChange={(e) => toggle(e)}
        />
        참여한 채널 표시
      </StyledDiv>
    </Container>
  );
};

export default SortedOptionMordal;
