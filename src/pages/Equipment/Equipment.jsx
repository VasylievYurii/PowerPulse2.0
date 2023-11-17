import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesEquipment } from '../../redux/exercises/exeOperation';
import Pagination from '../../components/Pagination/Pagination';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';

const Equipment = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { equipment } = useSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(getExercisesEquipment());
  }, [dispatch]);

  const exePerPage = 10;
  const lastExeIndex = currentPage * exePerPage;
  const firstExeIndex = lastExeIndex - exePerPage;
  function arrayPerPage() {
    const currentExe = equipment.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ExercisesSubcategoriesList arr={arrayPerPage()} />
      <Pagination
        exePerPage={exePerPage}
        totalExe={equipment.length}
        paginate={paginate}
      />
    </>
  );
};

export default Equipment;
