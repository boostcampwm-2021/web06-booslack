import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import ChatHeader from '@molecules/ChatHeader';
import AsyncBranch from '@molecules/AsyncBranch';

import { BrowserChannelListSize, CHANNELTYPE } from '@enum/index';
import useAsync from '@hook/useAsync';
import API from '@global/api';
import { sorted } from '@global/util';

import React, { useState } from 'react';
import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
  MarginedDiv,
  SortedPopup,
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

  const [sortedModal, setsortedModal] = useState<boolean>(false);

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

  const RightButton = (
    <MarginedDiv>
      <SortedPopup isOpen={sortedModal}>
        <LabeledDefaultButton
          onClick={() => setData({ channels: sorted(data?.channels, 'name') })}
          text="알파벳 순"
        />
        <LabeledDefaultButton
          onClick={() => {
            setData({
              channels: sorted(data?.channels, 'name', { reverse: true }),
            });
          }}
          text="알파벳 역순"
        />
      </SortedPopup>

      <LabeledDefaultButton
        onClick={() => {
          setsortedModal(!sortedModal);
        }}
        text="정렬"
      />
      <LabeledDefaultButton text="@ 필터" />
    </MarginedDiv>
  );

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
