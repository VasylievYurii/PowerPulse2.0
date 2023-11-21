import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesMuscles } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';

const Muscles = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { muscles } = useSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(getExercisesMuscles());
  }, [dispatch]);

  function perPage() {
    let exePerPage;
    if (window.matchMedia('(min-width: 1440px)').matches) {
      exePerPage = 10;
    } else {
      exePerPage = 9;
    }
    return exePerPage;
  }
  const lastExeIndex = currentPage * perPage();
  const firstExeIndex = lastExeIndex - perPage();

  function arrayPerPage() {
    const currentExe = muscles.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ExercisesSubcategoriesList arr={arrayPerPage()} />
      <Pagination
        exePerPage={perPage()}
        totalExe={muscles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Muscles;
