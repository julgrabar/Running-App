import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/Container';

export const Header = styled.header`
  background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
  box-shadow: 0 0 3px darkgrey;
`;

export const HeaderContainer = styled(Container)`
  height: 72px;
  min-height: 72px;
  padding: 0 30px;
  display: flex;
  nav {
    margin-right: 12px;
    display: flex;
    a {
      padding: 24px 0;
      font-weight: 600;
    }
  }
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  cursor: pointer;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const UserBlock = styled.div`
  margin: auto 0 auto auto;
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  overflow: hidden;
  word-wrap: break-word;

  p {
    max-width: 80%;
  }
  a,
  button {
    background-color: #fff;
    color: #92a3fd;
    padding: 6px 15px;
    border-radius: 50px;
    cursor: pointer;

    @media screen and (max-width: 400px) {
      font-size: 12px;
      padding: 4px 8px;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .logout-btn {
    border: none;
    background-color: transparent;
    padding: 0;
  }
`;
