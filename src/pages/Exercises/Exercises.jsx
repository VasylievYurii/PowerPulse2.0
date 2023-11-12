import SectionTemplate from '../../components/SectionTemplate/SectionTemplate';
import { Routes, Route } from "react-router-dom";

import {
  ExercisesCategories_ExercisesPage,
  Header,
  Exercices_nav,
  StyledLink
} from './Exercises.style';

// const BodyParts = lazy(() => import("./BodyParts"));
// const Muscles = lazy(() => import("./Muscles"));
// const Equipment = lazy(() => import("./Equipment"));

const Exercises = () => {
  return (
    <SectionTemplate>
      <ExercisesCategories_ExercisesPage>
        <Header>Exercices</Header>
        <Exercices_nav>
          <StyledLink to="/BodyParts">Body parts</StyledLink>
          <StyledLink to="/Muscles">Muscles</StyledLink>
          <StyledLink to="/Equipment">Equipment</StyledLink>
        </Exercices_nav>

        <Routes>
          {/* <Route path='/BodyParts' element={
            <BodyParts />
          } />
          <Route path='/Muscles' element={
            <Muscles />
          } />
          <Route path='/Equipment' element={
            <Equipment />
          } /> */}
        </Routes>

      </ExercisesCategories_ExercisesPage>
    </SectionTemplate>
  );
};

export default Exercises;
