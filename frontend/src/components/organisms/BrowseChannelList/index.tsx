import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import ChatHeader from '@molecules/ChatHeader';
import { BrowserChannelListSize } from '@enum/index';
import React from 'react';

import {
  Container,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
  MarginedDiv,
} from './styles';

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const BrowseChannelList = (): JSX.Element => {
  const ChannelLists = new Array(100).fill(null).map((value, index) => {
    return <ChannelList firstLabelContent={`# channel ${index}`} key={index} />; //key 나중 반드시 바꾸세요.
  });

  const Title: JSX.Element = <Label color="grey" text=" channel 개수" />;
  const RightButton = (
    <MarginedDiv>
      <LabeledDefaultButton text="정렬" />
      <LabeledDefaultButton text="@ 필터" />
    </MarginedDiv>
  );

  return (
    <>
      <SearchBar width={ListWidth} height={ListHeight} />
      <MarginBottomDiv />
      <CenterAlignedDiv>
        <ChatHeader width={ListWidth} title={Title} rightButton={RightButton} />
      </CenterAlignedDiv>
      <ChannelListBackground>
        <Container width={ListWidth}>
          {ChannelLists}
          <MarginBottomDiv margin={30} />
        </Container>
      </ChannelListBackground>
    </>
  );
};

export default BrowseChannelList;
