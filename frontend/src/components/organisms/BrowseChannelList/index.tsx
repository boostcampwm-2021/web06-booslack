import Label from '@atoms/Label';
import BrowseMordalContainer from '@organisms/BrowseMordalContainer';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import ChatHeader from '@molecules/ChatHeader';
import AsyncBranch from '@molecules/AsyncBranch';

import { BrowserChannelListSize, CHANNELTYPE } from '@enum/index';
import useAsync from '@hook/useAsync';
import API from '@global/api';
import React from 'react';
import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
} from './styles';

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const BrowseChannelList = (): JSX.Element => {
  const { data, loading, error, setData } = useAsync(
    {
      params: {
        offsetStart: 0,
      },
    },
    API.get.channel.all,
    [],
  );

  const getListByGET = (): JSX.Element => {
    if (!data?.channels) return <></>;

    const { channels } = data;
    return (
      <>
        {channels.map(({ id, name, type, description }) => {
          return (
            <ChannelList
              firstLabelContent={`${CHANNELTYPE[type]} ${id} ${name}`}
              secondLabelContent={description}
              key={`BrowseChannelList${id}`}
            />
          );
        })}
      </>
    );
  };

  const ChannelLists = (
    <AsyncBranch
      data={data}
      loading={loading}
      error={error}
      success={getListByGET()}
    />
  );

  const channelCount = data?.count ?? 0;

  const Title: JSX.Element = (
    <Label color="grey" text={`channel ${channelCount}개`} />
  );

  const RightButton = <BrowseMordalContainer data={data} setData={setData} />;

  return (
    <Container width={ListWidth}>
      <SearchBar width={ListWidth} height={ListHeight} />
      <MarginBottomDiv />
      <CenterAlignedDiv>
        <ChatHeader width={ListWidth} title={Title} rightButton={RightButton} />
      </CenterAlignedDiv>
      <ChannelListBackground>
        <ScrollBox width={ListWidth}>
          {ChannelLists}
          <MarginBottomDiv margin={30} />
        </ScrollBox>
      </ChannelListBackground>
    </Container>
  );
};

export default BrowseChannelList;
