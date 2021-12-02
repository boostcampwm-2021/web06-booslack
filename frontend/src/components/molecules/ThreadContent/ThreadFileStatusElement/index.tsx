import React, { useState } from 'react';
import {
  ThreadFileStatusElementImage,
  ThreadMdTextSnippet,
  ThreadFileStatusLayOut,
  DownloadContainer,
  DownloadCover,
} from './styles';

interface Props {
  file: File;
}

const ThreadFileStatusElement = ({ file }: Props): JSX.Element => {
  const fileUrl = file?.url;
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <ThreadFileStatusLayOut>
        {fileUrl ? (
          <DownloadContainer
            href={fileUrl}
            target="_blank"
            download
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <ThreadFileStatusElementImage image={fileUrl} />
          </DownloadContainer>
        ) : (
          <ThreadMdTextSnippet />
        )}
        {isHover && (
          <DownloadCover style={isHover ? { zIndex: 5 } : { zIndex: -5 }}>
            <span>클릭시 다운로드됩니다.</span>
          </DownloadCover>
        )}
      </ThreadFileStatusLayOut>
    </>
  );
};

export default ThreadFileStatusElement;
