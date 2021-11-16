import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import SidebarAddElement from '@molecules/SidebarAddElement';
import {
  channelCreateModalState,
  sidebarChannelInfoModalState,
} from '@state/modal';
import userState from '@state/user';
import { channelListState } from '@state/Channel';
import { Container } from './style';
import axios from 'axios';

const WorkspaceSidebar = (): JSX.Element => {
  // const user = useRecoilValue(userState);
  const [user, setUser] = useRecoilState(userState);
  const setIsChannelCreateModalOpen = useSetRecoilState(
    channelCreateModalState,
  );
  const [isSidebarChannelInfoModalOpen, setIsSidebarChannelInfoModalOpen] =
    useRecoilState(sidebarChannelInfoModalState);
  // const channelList = useRecoilValue(
  //   channelListFromServerState({
  //     userId: sessionStorage.getItem('id'),
  //     workspaceId: sessionStorage.getItem('workspaceId'),
  //   }),
  // );

  const [channelList, setChannelList] = useRecoilState(channelListState);

  useEffect(() => {
    if (!user.workspaceId) return;

    const getChannelList = async () => {
      const res = await axios.get(
        `/api/channels/channelsThatUserIn?userId=${user.id}&workspaceId=${user.workspaceId}`,
      );
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, [user.workspaceId]);

  return (
    <Container>
      <SidebarDivision label="Channels" options type="Channels" />
      <NavLink
        to={`/client/${user.workspaceId}/browse-channels`}
        style={{ textDecoration: 'none', color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        <SidebarChannelElement
          label="Channel browser"
          isPrivate={false}
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </NavLink>

      {channelList.map((channel) => {
        {
          /* {channelList.channels.map((channel) => { */
        }
        return (
          <NavLink
            key={channel.id}
            to={`/client/${user.workspaceId}/${channel.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
            activeStyle={{ color: 'red' }}
          >
            <SidebarChannelElement
              label={channel.name}
              isPrivate={channel.type === 'private'}
              onClick={() => {}}
              onContextMenu={(e) => {
                e.preventDefault();
                setIsSidebarChannelInfoModalOpen({
                  status: true,
                  channelId: channel.id,
                });
              }}
            />
          </NavLink>
        );
      })}
      <SidebarAddElement
        label="Add Channels"
        onClick={() => setIsChannelCreateModalOpen(true)}
      />
    </Container>
  );
};

export default WorkspaceSidebar;
