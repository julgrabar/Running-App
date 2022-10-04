import styled, { css } from 'styled-components';

export const Loader = styled.div<{ absolute?: boolean }>`
  ${({ absolute }) =>
    absolute
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          margin: 0 auto;
        `}

  width: 60px;
  aspect-ratio: 2;
  background: ${({ theme }) => theme.loaderElement} 0% 50%,
    ${({ theme }) => theme.loaderElement} 50% 50%,
    ${({ theme }) => theme.loaderElement} 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: d3 1s infinite linear;

  @keyframes d3 {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;
