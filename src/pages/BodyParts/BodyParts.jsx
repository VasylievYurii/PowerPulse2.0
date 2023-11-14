import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getExercisesBodyparts } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';
import { ExersisesArrayTmg } from '../Muscles/Muscles';

const BodyParts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { bodyparts } = useSelector((state) => state.exercises);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExercisesBodyparts());
  }, [dispatch]);
  console.log('bod', bodyparts);
  const exePerPage = 9;
  const lastExeIndex = currentPage * exePerPage;
  const firstExeIndex = lastExeIndex - exePerPage;
  function arrayPerPage() {
    const currentExe = bodyparts.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ExersisesArrayTmg arr={arrayPerPage()} />
      <Pagination
        exePerPage={exePerPage}
        paginate={paginate}
        totalExe={bodyparts.length}
      />
    </>
  );
};

export default BodyParts;
