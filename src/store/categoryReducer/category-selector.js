import { createSelector } from 'reselect';

const categoryData = (state) => state.category;

export const getCategoriesData = createSelector(
    [categoryData],
    (category) => category.category_data
);

