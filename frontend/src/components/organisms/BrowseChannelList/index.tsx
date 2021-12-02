import React, { useContext, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ErrorSpinner, Spinner } from '@atoms/Spinner';
import Label from '@atoms/Label';
import ChannelList from '@molecules/ChannelList';
import SearchBar from '@molecules/SearchBar';
import AsyncBranch from '@molecules/AsyncBranch';
import SelectbrowseChannelPage from '@molecules/SelectbrowseChannelPage';
import BrowseMordalContainer from '@organisms/BrowseMordalContainer';
import { CHANNELTYPE } from '@enum/index';
import usePagination from '@hook/usePagination';
import API from '@global/api';
import { Channel, SortOption } from '@global/type';
import { browseChannelSortOption } from '@state/Channel';
import { SortedOptionMordalState } from '@state/modal';
import { ThemeContext } from 'styled-components';
import {
  Container,
  ScrollBox,
  ChannelListBackground,
  MarginBottomDiv,
  MarginBetweenMenuDiv,
  CenterAlignedDiv,
  StyledBrowseChannelHeader,
} from './styles';

const LOADINGSIZE = 50;

interface IChannelList {
  isLoading: boolean;
  error: unknown;
  data: { channels: null | Channel[] };
}

const GetListByGET = ({
  isLoading,
  data,
  error,
}: IChannelList): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.bigHeaderColor;

  if (isLoading) return <Spinner size={LOADINGSIZE} color={color} />;
  if (error) return <ErrorSpinner size={LOADINGSIZE} color={color} />;
  if (!data) return <></>;

  const { channels } = data;
  return (
    <AsyncBranch size={LOADINGSIZE}>
      {channels?.map(({ id, name, private: isPrivate, description }) => {
        return (
          <ChannelList
            channelId={id}
            channelType={`${CHANNELTYPE[isPrivate]}`}
            firstLabelContent={` ${name}`}
            secondLabelContent={description}
            key={`BrowseChannelList${id}`}
          />
        );
      })}
    </AsyncBranch>
  );
};

const BrowseChannelList = (): JSX.Element => {
  const sortOption = useRecoilValue<SortOption>(browseChannelSortOption);
  const checkedItems = useRecoilValue(SortedOptionMordalState);

  const [dbLikedOption, setLikedOption] = useState<string>('');
  const { workspaceId }: { workspaceId: string } = useParams();

  async function getWorkspaceLists(page: number) {
    const res = await axios.get(API.get.channel.base, {
      params: {
        offsetStart: page,
        sortOption,
        workspaceId,
        like: dbLikedOption,
        showPrivate: checkedItems[0],
        showPublic: checkedItems[1],
        showMine: checkedItems[2],
      },
    });
    return res.data;
  }

  const { page, setPage, isLoading, data, error } = usePagination(
    [workspaceId, sortOption, dbLikedOption, ...checkedItems],
    getWorkspaceLists,
  );

  const channelCount = data?.count ?? 0;

  const SubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const { value } = target.firstChild as HTMLInputElement;
    setPage(0);
    setLikedOption(value);
  };

  const Title: JSX.Element = (
    <Label color="grey" text={`channel ${channelCount}개`} />
  );

  const RightButton = <BrowseMordalContainer setPage={setPage} />;

  return (
    <Container>
      <SearchBar onSubmit={SubmitInput} placeholder="검색어를 입력하세요." />
      <MarginBetweenMenuDiv />
      <CenterAlignedDiv>
        <StyledBrowseChannelHeader title={Title} rightButton={RightButton} />
      </CenterAlignedDiv>
      <ChannelListBackground>
        <ScrollBox>
          <GetListByGET isLoading={isLoading} data={data} error={error} />
          <SelectbrowseChannelPage
            dataCount={channelCount}
            cursor={page}
            setCursor={setPage}
          />
          <MarginBottomDiv />
        </ScrollBox>
      </ChannelListBackground>
    </Container>
  );
};

export default BrowseChannelList;
