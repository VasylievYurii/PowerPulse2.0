import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExercisesEquipment } from '../../redux/exercises/exeOperation';
import { ExersisesArrayTmg } from '../Muscles/Muscles';
import Pagination from '../../components/Pagination/Pagination';

const Equipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { equipment } = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExercisesEquipment());
  }, [dispatch]);
  console.log('bod', equipment);
  const exePerPage = 9;
  const lastExeIndex = currentPage * exePerPage;
  const firstExeIndex = lastExeIndex - exePerPage;
  function arrayPerPage() {
    const currentExe = equipment.slice(firstExeIndex, lastExeIndex);
    return currentExe;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ExersisesArrayTmg arr={arrayPerPage()} />
      <Pagination
        exePerPage={exePerPage}
        totalExe={equipment.length}
        paginate={paginate}
      />
    </>
  );
};

export default Equipment;
