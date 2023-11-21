import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getExercisesBodyparts } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { WrapperPagination } from './BodyParts.styled';
import Loader from '../../components/Loader/Loader';
const BodyParts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { bodyparts, isLoading } = useSelector((state) => state.exercises);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExercisesBodyparts());
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
  const allExersise = bodyparts.length;

  function arrayPerPage() {
    const currentExe = bodyparts.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isLoading && <Loader />}
      <ExercisesSubcategoriesList arr={arrayPerPage()} />
      <WrapperPagination>
        {allExersise !== perPage() && (
          <Pagination
            exePerPage={perPage()}
            paginate={paginate}
            totalExe={bodyparts.length}
          />
        )}
      </WrapperPagination>
    </>
  );
};

export default BodyParts;
