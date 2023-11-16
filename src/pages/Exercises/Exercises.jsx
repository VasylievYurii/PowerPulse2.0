import { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ButtonExerStyled } from '../../components/AddExerciseSuccess/AddExerciseSuccess.styled';
import SectionTemplate from '../../components/SectionTemplate';
import TitlePage from '../../components/TitlePage';
import ChapterTemplate from '../../components/ChapterTemplate';
import { ChaptersWrapper, LinkStyled, GoBack } from './Exercises.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getExercises } from '../../redux/exercises/exeOperation';
import ExercisesItem from '../../components/ExercisesItem/ExercisesItem';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';
import { ToastContainer } from 'react-toastify';

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
            <LinkStyled to="bodyparts">
              {' '}
              <ChapterTemplate>Body parts</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="muscles">
              {' '}
              <ChapterTemplate>Muscles</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="equipment">
              <ChapterTemplate>Equipment</ChapterTemplate>
            </LinkStyled>
          </li>
        </ChaptersWrapper>
        <Suspense fallback={<p>Loader</p>}>
          <ButtonExerStyled $nomarginleft onClick={toggleModal}>
            Add to diary
          </ButtonExerStyled>
          {isModalOpen && (
            <BasicModalWindow onClick={toggleModal}>
              <AddExerciseSuccess onClick={toggleModal} />
            </BasicModalWindow>
          )}
          <Outlet />
        </Suspense>
        <ToastContainer />
      </SectionTemplate>
    </>
  );
};

export default Exercises;
