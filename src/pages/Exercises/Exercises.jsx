import { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SectionTemplate from '../../components/SectionTemplate';
import TitlePage from '../../components/TitlePage';
import ChapterTemplate from '../../components/ChapterTemplate';
import { getExercises } from '../../redux/exercises/exeOperation';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';
import { ChaptersWrapper, LinkStyled } from './Exercises.styled';


const Exercises = () => {
  // const dispatch = useDispatch();
  // const { array } = useSelector((state) => state.exercises);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  // useEffect(() => {
  //   dispatch(getExercises());
  // }, [dispatch]);
  // console.log('all', array);
  return (
    <SectionTemplate>
      <TitlePage>Exercises</TitlePage>
      <ChaptersWrapper>
        <li>
          <LinkStyled to="body parts">
            <ChapterTemplate>Body parts</ChapterTemplate>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="muscles">
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
        {/* <button onClick={toggleModal}>Add to diary</button> */}
        {isModalOpen && (
          <BasicModalWindow onClick={toggleModal}>
            <AddExerciseSuccess onClick={toggleModal} />
          </BasicModalWindow>
        )}
        <Outlet />
      </Suspense>
    </SectionTemplate>
  );
};

export default Exercises;
