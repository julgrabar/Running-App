import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from 'components/Button/Button.styled';
import { IButton, IGoToBtn } from 'types/types';
export const Button: FC<IButton> = ({
  title,
  onClick,
  primary,
  round,
  marginTop,
  type = 'button',
}) => {
  return (
    <StyledButton
      primary={primary}
      round={round}
      onClick={onClick}
      marginTop={marginTop}
      type={type}
    >
      {title}
    </StyledButton>
  );
};

export const GoToBtn: FC<IGoToBtn> = ({ title, path, primary, marginTop }) => {
  const navigate = useNavigate();
  return (
    <StyledButton
      type="button"
      primary={primary}
      onClick={() => navigate(path)}
      marginTop={marginTop}
    >
      {title}
    </StyledButton>
  );
};
