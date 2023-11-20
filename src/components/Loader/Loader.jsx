import { LoaderStyled } from './Loader.styled';

const Loader = ({color = 'rgba(230, 83, 60, 1)'}) => {
  return <LoaderStyled color={color}></LoaderStyled>;
};

export default Loader;
