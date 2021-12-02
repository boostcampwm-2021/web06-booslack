import React, { useContext } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavLink, useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import AsyncBranch from '@molecules/AsyncBranch';
import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import SidebarAddElement from '@molecules/SidebarAddElement';
import { channelCreateModalState } from '@state/modal';
import userState from '@state/user';
import { useChannelListQuery } from '@hook/useChannels';
import { Container, MarginDiv } from './style';

interface Props {
  userId: string;
  workspaceId: string;
}
const ChannelList = ({ userId, workspaceId }: Props): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const { titleText, smallText } = themeContext;
  const { data } = useChannelListQuery(userId, workspaceId);

  return (
    <>
      {data.map((channel) => {
        return (
          <NavLink
            key={channel.id}
            to={`/client/${workspaceId}/${channel.id}`}
            style={{ textDecoration: 'none', color: smallText }}
            activeStyle={{ color: titleText }}
          >
            <SidebarChannelElement
              label={channel.name}
              isPrivate={channel.private === 1}
              onClick={() => {}}
            />
          </NavLink>
        );
      })}
    </>
  );
};

const WorkspaceSidebar = (): JSX.Element => {
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();
  const themeContext = useContext(ThemeContext);
  const { titleText, smallText } = themeContext;

  const setIsChannelCreateModalOpen = useSetRecoilState(
    channelCreateModalState,
  );

  return (
    <Container>
      <SidebarDivision label="Channels" options type="Channels" />
      <NavLink
        to={`/client/${workspaceId}/browse-channels`}
        style={{
          textDecoration: 'none',
          color: smallText,
        }}
        activeStyle={{ color: titleText }}
      >
        <SidebarChannelElement
          label="Channel browser"
          isPrivate={false}
          onClick={() => {}}
        />
      </NavLink>
      <AsyncBranch size={25}>
        {/* TODO: remove toString */}
        <ChannelList userId={user.id.toString()} workspaceId={workspaceId} />
      </AsyncBranch>
      <SidebarAddElement
        label="Add Channels"
        onClick={() => setIsChannelCreateModalOpen(true)}
      />
      <MarginDiv />
    </Container>
  );
};

export default WorkspaceSidebar;
