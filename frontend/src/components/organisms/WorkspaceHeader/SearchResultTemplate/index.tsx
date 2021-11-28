import { UserHasWorkspace, Channel } from '@global/type';
import React from 'react';
import MemberElement from '@organisms/MemberElement';
import ChannelElement from './ChannelElement';
import useKeyboardNavigator from '@hook/useKeyboardNavigator';

interface Props {
  matches: Array<UserHasWorkspace | Channel>;
  setValue: React.Dispatch<any>;
}

const SearchResultTemplate = ({ matches, setValue }: Props): JSX.Element => {
  const index = useKeyboardNavigator(matches, setValue);

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
