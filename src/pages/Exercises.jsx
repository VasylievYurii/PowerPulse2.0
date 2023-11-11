import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import {NavLink} from 'react-router-dom';

const Exercises = () => {
  return (
    <SectionTemplate>
      <div className='ExercisesCategories_ExercisesPage'>
        <h2>Exercices</h2>
        <ul className="exercices_nav">
          <li className="exercices_nav_item">
            <NavLink to="/">Body parts</NavLink>
          </li>
          <li className="exercices_nav_item">
            <NavLink to="/">Muscles</NavLink>
          </li>
          <li className="exercices_nav_item">
            <NavLink to="/">Equipment</NavLink>
          </li>
        </ul>
      </div>
    </SectionTemplate>
  );
};

export default Exercises;
