import React, { useState } from 'react';
import {
  ThreadFileStatusElementImage,
  ThreadMdTextSnippet,
  ThreadFileStatusLayOut,
  DownloadContainer,
  DownloadCover,
  StyleMdInsertDriveFile,
} from './styles';

interface Props {
  file: File;
}

const ThreadFileStatusElement = ({ file }: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { url, extension } = file;
  const fileUrl = url;
  const index = extension.indexOf('/');
  const fileExtension =
    index === -1 ? extension : extension.substring(0, index);
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
            {fileExtension === 'file' || fileExtension === 'image' ? (
              <ThreadFileStatusElementImage image={fileUrl} />
            ) : (
              <StyleMdInsertDriveFile />
            )}
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
