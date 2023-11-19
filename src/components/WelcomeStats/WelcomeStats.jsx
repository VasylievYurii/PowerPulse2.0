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
  // const [workouts, setWorkouts] = useState();
  // const [burnedCalories, setBurnedCalories] = useState();
  // const [workoutsTime, setWorkoutsTime] = useState();
  // const [userCount, setUserCount] = useState();
  // const [videoCount, setVideoCount] = useState();
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statistics) {
      setStats(statistics);
      // setWorkouts(statistics.workouts);
      // setBurnedCalories(statistics.burnedCalories);
      // setWorkoutsTime(statistics.workoutsTime);
      // setUserCount(statistics.userCount);
      // setVideoCount(statistics.videoCount);
    }
  }, [statistics]);

  useEffect(() => {
    setLoading(true);
    dispatch(getStatistics());
    setLoading(false);
  }, [dispatch]);

  // const uploadStatistics = async (e) => {
  //   setLoading(true);
  //   try {
  //     dispatch(getStatistics());
  //   } catch (error) {
  //     if (error.response === 404) {
  //       setStats(null);
  //     }
  //   }
  //   setLoading(false);
  // };

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
