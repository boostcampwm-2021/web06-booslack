import Label from '@atoms/Label';
import BrowseMordalContainer from '@organisms/BrowseMordalContainer';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import ChatHeader from '@molecules/ChatHeader';
import AsyncBranch from '@molecules/AsyncBranch';
import SelectbrowseChannelPage from '@molecules/SelectbrowseChannelPage';
import { BrowserChannelListSize, CHANNELTYPE } from '@enum/index';
import useAsync from '@hook/useAsync';
import API from '@global/api';
import { SortOption } from '@global/type';
import { browseChannelSortOption, browseCursorValue } from '@state/Channel';
import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
} from './styles';

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const userId = localStorage.getItem('id');

const BrowseChannelList = (): JSX.Element => {
  const sortOption = useRecoilValue<SortOption>(browseChannelSortOption);
  const cursorOption = useRecoilValue<number>(browseCursorValue);
  const { data, loading, error } = useAsync(
    {
      params: {
        offsetStart: cursorOption,
        userId,
        sortOption,
      },
    },
    API.get.channel.all,
    [sortOption, cursorOption],
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

  const RightButton = <BrowseMordalContainer />;

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
          <SelectbrowseChannelPage dataCount={channelCount} />
          <MarginBottomDiv margin={30} />
        </ScrollBox>
      </ChannelListBackground>
    </Container>
  );
};

export default BrowseChannelList;
