import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import ChatHeader from '@molecules/ChatHeader';
import { BrowserChannelListSize } from '@enum/index';
import useAsync from '@hook/useAsync';
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
  const [data, loading, error] = useAsync(null, '/api/channel/all', []);

  const getListByGET = () => {
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return '';

    return data?.channels.map(({ id, type, description }) => {
      return (
        <ChannelList
          firstLabelContent={`${type}`}
          secondLabelContent={description}
          key={`BrowseChannelList${id}`}
        />
      );
    });
  };

  const ChannelLists = getListByGET();

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
