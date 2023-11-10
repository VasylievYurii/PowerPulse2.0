import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const Text = styled.p`
 color: var(--color-text);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 28px;
`
  ;

export const LinkBtn = styled(Link)`
border-radius: 1px;
color: var(--color-main-three);
  `;

export const Button = styled.p`
color: var(--color-text);
width: 500;
font-size: 20px;
line-height: 1.2;
  `;