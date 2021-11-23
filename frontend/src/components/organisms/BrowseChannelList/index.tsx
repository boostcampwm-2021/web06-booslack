import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Label from '@atoms/Label';
import AsyncBranch from '@molecules/AsyncBranch';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import SelectbrowseChannelPage from '@molecules/SelectbrowseChannelPage';
import BrowseMordalContainer from '@organisms/BrowseMordalContainer';
import { BrowserChannelListSize, CHANNELTYPE } from '@enum/index';
import usePagination from '@hook/usePagination';
import API from '@global/api';
import { SortOption } from '@global/type';
import { browseChannelSortOption } from '@state/Channel';

import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
  StyledBrowseChannelHeader,
} from './styles';

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const BrowseChannelList = (): JSX.Element => {
  const sortOption = useRecoilValue<SortOption>(browseChannelSortOption);
  const [dbLikedOption, setLikedOption] = useState<string>('');
  const { workspaceId }: { workspaceId: string } = useParams();

  async function getWorkspaceLists(page: number) {
    const res = await axios.get(API.get.channel.all, {
      params: {
        offsetStart: page,
        sortOption,
        workspaceId,
        like: dbLikedOption,
      },
    });
    return res.data;
  }

  const { page, setPage, isLoading, data, error } = usePagination(
    [sortOption, dbLikedOption],
    getWorkspaceLists,
    { staleTime: 'Infinity' },
  );

  const channelCount = data?.count ?? 0;

  const SubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const { value } = target.firstChild as HTMLInputElement;
    setPage(0);
    setLikedOption(value);
  };

  const GetListByGET = (): JSX.Element => {
    if (!data?.channels) return <></>;

    const { channels } = data;
    return (
      <>
        {channels.map(({ id, name, private: isPrivate, description }) => {
          return (
            <ChannelList
              channelId={id}
              firstLabelContent={`${CHANNELTYPE[isPrivate]} ${id} ${name}`}
              secondLabelContent={description}
              key={`BrowseChannelList${id}`}
            />
          );
        })}
      </>
    );
  };

  const Title: JSX.Element = (
    <Label color="grey" text={`channel ${channelCount}개`} />
  );

  const RightButton = <BrowseMordalContainer />;

  return (
    <Container width={ListWidth}>
      <SearchBar
        width={ListWidth}
        height={ListHeight}
        onSubmit={SubmitInput}
        placeholder="검색어를 입력하세요."
      />
      <MarginBottomDiv />
      <CenterAlignedDiv>
        <StyledBrowseChannelHeader
          width={ListWidth}
          title={Title}
          rightButton={RightButton}
        />
      </CenterAlignedDiv>
      <ChannelListBackground>
        <ScrollBox width={ListWidth}>
          <AsyncBranch data={data} loading={isLoading} error={error}>
            <GetListByGET />
          </AsyncBranch>
          <SelectbrowseChannelPage
            dataCount={channelCount}
            cursor={page}
            setCursor={setPage}
          />
          <MarginBottomDiv margin={30} />
        </ScrollBox>
      </ChannelListBackground>
    </Container>
  );
};

export default BrowseChannelList;
