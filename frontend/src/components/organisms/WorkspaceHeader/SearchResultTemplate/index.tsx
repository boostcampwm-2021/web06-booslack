import { UserHasWorkspace, Channel } from '@global/type';
import React from 'react';
import ChannelElement from './ChannelElement';
import MemberElement from './MemberElement';

interface Props {
  matches: Array<UserHasWorkspace | Channel>;
  index: number;
}

const SearchResultTemplate = ({ matches, index }: Props): JSX.Element => {
  return (
    <div>
      {matches.map((match, idx) => {
        return match.nickname ? (
          <MemberElement
            key={`member${match.id}`}
            userHasWorkspace={match}
            selected={index === idx}
          />
        ) : (
          <ChannelElement
            key={`channel${match.id}`}
            channel={match}
            selected={index === idx}
          />
        );
      })}
    </div>
  );
};

export default SearchResultTemplate;
