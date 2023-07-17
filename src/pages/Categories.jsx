import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h2>
        Categories:
        {categories}
      </h2>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
};

export default Categories;
