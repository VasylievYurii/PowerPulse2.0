import styled from 'styled-components';
export const TextBlood = styled.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`;
export const ContentBloodGender = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
export const ContentBlood = styled.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`;

export const ContentGender = styled.div`
  display: flex;
`;

export const LifestyleBtn = styled.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`;
