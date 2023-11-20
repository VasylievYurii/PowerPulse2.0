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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../redux/statistics/staticticsOperations';
import Loader from '../Loader';

const WelcomeStats = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.statistics);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statistics) {
      setStats(statistics);
    }
  }, [statistics]);

  useEffect(() => {
    setLoading(true);
    dispatch(getStatistics());
    setLoading(false);
  }, [dispatch]);

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
            <VideoCount>{stats.videoCount}</VideoCount>
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
            <CalCount>
              {(Math.round(stats.burnedCaloriesSum) / 1000).toFixed(1) ?? '0'}
            </CalCount>
            <Descr>kcal</Descr>
          </StatThumb>
        </CalStats>
      </StatsWrapper>

      {loading && <Loader />}
    </SectionTemplateRight>
  );
};

export default WelcomeStats;
