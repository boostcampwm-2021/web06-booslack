/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ImageBox from '@atoms/ImageBox';
import Label from '@atoms/Label';
import { flexAlignCenter } from '@global/mixin';

export const Container = styled.div`
  ${flexAlignCenter}

  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  height: 100vh;
  width: 100vw;
  align-items: center;
  & > * {
    margin-bottom: 5vh;
  }
`;

export const StyledLabel = styled(Label)`
  font-size: 120px;
  color: #3881e7;
`;

export const StyledButton = styled(LabeledDefaultButton)`\
  position : absolute;
  bottom:3vh;
  height: 5vh;
  width:10vw;
  min-width:200px;
  min-height:30px;

  background-color: #5c8dcf;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    text-decoration: none;

  &:hover{
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
  }


`;
