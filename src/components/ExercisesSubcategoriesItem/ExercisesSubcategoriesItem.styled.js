import styled from 'styled-components';

export const ContainerItem = styled.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const Img = styled.img`
  width: 335px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const TextItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`;

export const NameImg = styled.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`;

export const NameCategory = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`;
