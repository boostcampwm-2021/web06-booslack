import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: 500px;
  width: 900px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 60px;
  font-weight: 600;
`;

export const LabelColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 500px;
`;

export const StyledImageBox = styled(ImageBox)``;
