import React from 'react';
import {NavLink} from 'react-router-dom';

const ExercisesCategories = () => {
  return (
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
  ) 
};

export default ExercisesCategories;
