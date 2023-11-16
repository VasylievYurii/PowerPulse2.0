import styled from 'styled-components';
export const ChaptersWrapper = styled.ul`
  display: flex;
  gap: 32px;
  position: relative;
`;
export const ChapterTemplate = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
`;
export const ChapterTemplateCurrent = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 77px;
    height: 4px;
    left: 0px;
    top: 24px;
    background: rgba(239, 137, 100, 1);
    border-radius: 2px;
  }
`;
