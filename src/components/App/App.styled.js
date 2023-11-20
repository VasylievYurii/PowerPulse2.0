import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

export const ToastContainerStyled = styled(ToastContainer)`
  &&&.Toastify__toast-container--top-center {
    top: 6em;
  }
  .Toastify__toast {
    border: 1px solid #ef8964;
  }
  .Toastify__toast-theme--dark {
    background: #303030;
  }
`;
