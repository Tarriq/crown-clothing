import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 240px;
  height: ${({ open }) => (open ? '340px' : '0')};
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  padding-block: ${({ open }) => (open ? '20px' : '0')};
  border: ${({ open }) => (open ? '1px solid black' : 'none')};
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  transition: 0.15s;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    transition: 0.1s;
    height: ${({ open }) => (open ? '50px' : '0')};
    border: ${({ open }) => (open ? '1px black solid' : 'none')};
    opacity: ${({ open }) => (open ? '1' : '0')};
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    overflow: overlay;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #666;
      border-radius: 20px;
    }
  }
`;
