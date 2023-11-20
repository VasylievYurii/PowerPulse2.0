import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SectionTemplate from '../../components/SectionTemplate';
import TitlePage from '../../components/TitlePage';
import ChapterTemplate from '../../components/ChapterTemplate';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';
import { ChaptersWrapper, LinkStyled } from './Exercises.styled';

const Exercises = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

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
