import {
  CalCount,
  CalStats,
  Descr,
  IconRunWrapper,
  IconWrapper,
  StatThumb,
  VideoCount,
  VideoStats,
  Wrapper,
  StatsWrapper,
} from './WelcomeStats.styled';
import sprite from '../../assets/sprite.svg';
import SectionTemplateRight from '../../components/SectionTemplateRight';

const WelcomeStats = () => {
  return (
    <SectionTemplateRight>
      <StatsWrapper>
        <VideoStats>
          <Wrapper>
            <IconWrapper>
              <use href={`${sprite}#icon-play`} />
            </IconWrapper>
          </Wrapper>

          <div>
            <VideoCount>350+</VideoCount>
            <Descr>Video tutorial</Descr>
          </div>
        </VideoStats>

        <CalStats>
          <IconRunWrapper>
            <IconWrapper>
              <use href={`${sprite}#icon-run`} />
            </IconWrapper>
          </IconRunWrapper>

          <StatThumb>
            <CalCount>500</CalCount>
            <Descr>cal</Descr>
          </StatThumb>
        </CalStats>
      </StatsWrapper>
    </SectionTemplateRight>
  );
};

export default WelcomeStats;
