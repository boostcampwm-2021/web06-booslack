import React from 'react';
import Label from '@atoms/Label';
import workspaceDefaultImage from '@global/image/workspace_default_image.png';
import useAsync from '@hook/useAsync';
import {
  Container,
  TextSet,
  StyledImageBox,
  StyledImageColumn,
} from './styles';

interface Props {
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string | number;
  // eslint-disable-next-line react/require-default-props
  fileId?: number | null;
  className?: string;
}

const SelectWorkspace = ({
  firstLabelContent,
  secondLabelContent,
  fileId,
  content,
  className,
}: Props): JSX.Element => {
  // eslint-disable-next-line no-trailing-spaces
  // eslint-disable-next-line operator-linebreak
  const titleText =
    firstLabelContent?.length > 13
      ? `${firstLabelContent.substr(0, 13)}...`
      : firstLabelContent;
  const { data, loading, error } =
    fileId === 1 || fileId === null ? {} : useAsync({}, `/api/files/${fileId}`);
  const isNotImageUrl = () => {
    // eslint-disable-next-line max-len
    return (
      loading ||
      error ||
      fileId === 1 ||
      fileId === null ||
      data === {} ||
      data === null ||
      !data.files.url
    );
  };
  return (
    <Container className={className}>
      <StyledImageColumn>
        {isNotImageUrl() ? (
          <StyledImageBox image={workspaceDefaultImage} />
        ) : (
          <StyledImageBox image={data.files.url} />
        )}
      </StyledImageColumn>
      <TextSet>
        <Label text={titleText} />
        <Label text={secondLabelContent} />
        <div>{`${content}명의 맴버`}</div>
      </TextSet>
    </Container>
  );
};

SelectWorkspace.defaultProps = {
  firstLabelContent: '',
  secondLabelContent: '',
  className: '',
  content: 0,
};

export default SelectWorkspace;
