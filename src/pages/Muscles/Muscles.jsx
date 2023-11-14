import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesMuscles } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';

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
      <ExercisesSubcategoriesList arr={arrayPerPage()} />
      <Pagination
        exePerPage={exePerPage}
        totalExe={muscles.length}
        paginate={paginate}
      />
    </>
  );
};

export default Muscles;
