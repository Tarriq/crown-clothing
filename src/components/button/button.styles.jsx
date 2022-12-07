import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans';
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 200ms;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:active {
    background-color: hsl(0, 0%, 95%);
    transition: 0s;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
  &:active {
    background-color: hsl(217, 80 %, 50 %);
    transition: 0s;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: hsl(0, 0%, 10%);
    color: white;
  }
  &:active {
    background-color: black;
  }
`;
