import SectionTemplate from '../../components/SectionTemplate/SectionTemplate';

import {
  ExercisesCategories_ExercisesPage,
  Header,
  Exercices_nav,
  StyledLink
} from './Exercises.style';

const Exercises = () => {
  return (
    <SectionTemplate>
      <ExercisesCategories_ExercisesPage>
        <Header>Exercices</Header>
        <Exercices_nav>
          <StyledLink to="bodyparts">Body parts</StyledLink>
          <StyledLink to="muscles">Muscles</StyledLink>
          <StyledLink to="equipment">Equipment</StyledLink>
        </Exercices_nav>
      </ExercisesCategories_ExercisesPage>
    </SectionTemplate>
  );
};

export default Exercises;
