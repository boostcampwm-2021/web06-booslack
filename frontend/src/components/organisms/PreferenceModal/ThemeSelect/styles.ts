import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';
import { flexAlignCenter } from '@global/style/mixin';

export const StyledBigImageBox = styled(ImageBox)`
  width: inherit;
  height: 100%;
  margin-bottom: 5px;
`;

export const AlignCenterDiv = styled.div`
  width: 100%;
  height: 60%;
  ${flexAlignCenter}
  margin-bottom : 50px;
`;
