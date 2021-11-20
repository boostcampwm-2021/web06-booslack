import React, { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import Label from '@atoms/Label';
import AsyncBranch from '@molecules/AsyncBranch';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import SelectbrowseChannelPage from '@molecules/SelectbrowseChannelPage';
import BrowseMordalContainer from '@organisms/BrowseMordalContainer';
import { BrowserChannelListSize, CHANNELTYPE } from '@enum/index';
import useAsync from '@hook/useAsync';
import API from '@global/api';
import { SortOption } from '@global/type';
import {
  browseChannelSortOption,
  browseCursor,
  browseCursorValue,
} from '@state/Channel';
import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  CenterAlignedDiv,
} from './styles';

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const BrowseChannelList = (): JSX.Element => {
  const sortOption = useRecoilValue<SortOption>(browseChannelSortOption);
  const cursorOption = useRecoilValue<number>(browseCursorValue);
  const resetCursor = useResetRecoilState(browseCursor);
  const [dbLikedOption, setLikedOption] = useState<string>('');

  const { workspaceId }: { workspaceId: string } = useParams();

  const { data, loading, error } = useAsync(
    {
      params: {
        offsetStart: cursorOption,
        sortOption,
        workspaceId,
        like: dbLikedOption,
      },
    },
    API.get.channel.all,
    [sortOption, cursorOption, dbLikedOption],
  );

  const channelCount = data?.count ?? 0;

  const SubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const { value } = target.firstChild as HTMLInputElement;
    resetCursor();
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
        <BrowseChannelHeader
          width={ListWidth}
          title={Title}
          rightButton={RightButton}
        />
      </CenterAlignedDiv>
      <ChannelListBackground>
        <ScrollBox width={ListWidth}>
          <AsyncBranch data={data} loading={loading} error={error}>
            <GetListByGET />
          </AsyncBranch>
          <SelectbrowseChannelPage dataCount={channelCount} />
          <MarginBottomDiv margin={30} />
        </ScrollBox>
      </ChannelListBackground>
    </Container>
  );
};

export default BrowseChannelList;
