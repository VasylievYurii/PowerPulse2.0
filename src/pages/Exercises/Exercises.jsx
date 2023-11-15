import { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import SectionTemplate from '../../components/SectionTemplate';
import TitlePage from '../../components/TitlePage';
import ChapterTemplate from '../../components/ChapterTemplate';
import { ChaptersWrapper, GoBack } from './Exercises.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../../redux/exercises/exeOperation';
import ExercisesItem from '../../components/ExercisesItem/ExercisesItem';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';

const Exercises = () => {
  const { array } = useSelector((state) => state.exercises);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <>
      <ExercisesItem />
      <SectionTemplate>
        <Link to={backLinkHref.current}>
          <GoBack>Go Back</GoBack>
        </Link>
        <TitlePage>Exercises</TitlePage>
        <ChaptersWrapper>
          <li>
            <Link to="bodyparts">
              {' '}
              <ChapterTemplate>Body parts</ChapterTemplate>
            </Link>
          </li>
          <li>
            <Link to="muscles">
              {' '}
              <ChapterTemplate>Muscles</ChapterTemplate>
            </Link>
          </li>
          <li>
            <Link to="equipment">
              <ChapterTemplate>Equipment</ChapterTemplate>
            </Link>
          </li>
        </ChaptersWrapper>
        <Suspense fallback={<p>Loader</p>}>
          <button onClick={toggleModal}>Add to diary</button>
          {isModalOpen && (
            <BasicModalWindow onClick={toggleModal}>
              <AddExerciseSuccess onClick={toggleModal} />
            </BasicModalWindow>
          )}
          <Outlet />
        </Suspense>
      </SectionTemplate>
    </>
  );
};

export default Exercises;
