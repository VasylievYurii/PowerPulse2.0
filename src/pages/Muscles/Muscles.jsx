import { Wrapper } from '../BodyParts/BodyParts.styled';
import ExercisesItem from '../../components/ExercisesItem/ExercisesItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesMuscles } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';

const Muscles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { muscles } = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExercisesMuscles());
  }, [dispatch]);
  console.log('bod', muscles);
  const exePerPage = 9;
  const lastExeIndex = currentPage * exePerPage;
  const firstExeIndex = lastExeIndex - exePerPage;
  function arrayPerPage() {
    const currentExe = muscles.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ExersisesArrayTmg arr={arrayPerPage()} />
      <Pagination
        exePerPage={exePerPage}
        totalExe={muscles.length}
        paginate={paginate}
      />
    </>
  );
};

export default Muscles;

export const ExersisesArrayTmg = ({ arr }) => {
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <Wrapper>
      {arr.map(({ name, imgURL, _id, filter }) => (
        <ExercisesItem
          key={_id}
          fig={imgURL}
          nameImg={ucFirst(name)}
          category={filter}
        />
      ))}
    </Wrapper>
  );
};
