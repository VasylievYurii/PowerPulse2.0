import SectionTemplate from '../../components/SectionTemplate/SectionTemplate';
import { NavLink } from 'react-router-dom';
import { } from './Exercises.style';

const Exercises = () => {
  return (
    <SectionTemplate>
      <ExercisesCategories_ExercisesPage>
        <Header>Exercices</Header>
        <Exercices_nav>
          <NavLink to="/">Body parts</NavLink>
          <NavLink to="/">Muscles</NavLink>
          <NavLink to="/">Equipment</NavLink>
        </Exercices_nav>
      </ExercisesCategories_ExercisesPage>
    </SectionTemplate>
  );
};

export default Exercises;
