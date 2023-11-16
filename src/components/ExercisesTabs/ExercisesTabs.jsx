import { Link } from 'react-router-dom';
import {
  ChaptersWrapper,
  ChapterTemplate,
  ChapterTemplateCurrent,
} from './ExercisesTabs/ExercisesTabs.styled';

const ExercisesTabs = () => {
  return (
    <div>
      {' '}
      <ChaptersWrapper>
        <li>
          <Link to="bodyparts">
            {' '}
            <ChapterTemplateCurrent>Body parts</ChapterTemplateCurrent>
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
    </div>
  );
};

export default ExercisesTabs;
