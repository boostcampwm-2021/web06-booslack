import styled from 'styled-components';
import { theme } from 'styled-tools';
import Label from '@atoms/Label';
import { flexAlignCenter } from '@global/style/mixin';
import { defaultTheme } from '@global/style/theme';

export const AlignCenterDiv = styled.div`
  width: 100%;
  height: 60%;
  ${flexAlignCenter}
  margin-bottom : 50px;
`;

export const StyledLabel = styled(Label)`
  font-size: 4rem;
  color: ${theme('backgroundColor', defaultTheme.backgroundColor)};

  margin: 15px;
`;
