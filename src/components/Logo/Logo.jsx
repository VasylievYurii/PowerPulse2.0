import sprite from '../../assets/sprite.svg';
import { IconWrapper, SecondaryIconWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <IconWrapper>
        <use href={`${sprite}#icon-vector`} />
      </IconWrapper>
      <SecondaryIconWrapper>
        <use href={`${sprite}#icon-powerpulse`} />
      </SecondaryIconWrapper>
    </div>
  );
};

export default Logo;
