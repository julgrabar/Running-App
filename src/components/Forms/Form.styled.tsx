import styled from 'styled-components';

export const Form = styled.form`
  input {
    width: 100%;
    padding: 15px;
    background: #f7f8f8;
    border: 1px solid #f7f8f8;
    border-radius: 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  button {
    margin-top: auto;
  }

  p {
    font-size: 10px;
    color: red;
  }
`;
