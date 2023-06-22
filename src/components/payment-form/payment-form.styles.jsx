import styled from 'styled-components';
import Button from '../button/button.component';
import { BaseButton, InvertedButton } from '../button/button.styles';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(InvertedButton)`
  margin-left: auto;
  margin-top: 30px;
`;
