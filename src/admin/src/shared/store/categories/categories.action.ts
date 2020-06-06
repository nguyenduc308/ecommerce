import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, DELETE_CATEGORY, CREATE_CATEGORY } from "./contants"
import { Dispatch } from "redux";
import {  toast } from 'react-toastify';

import { httpAxios } from "shared/helpers/axios-service";

export const fetchCategories = () => async (dispatch: Dispatch) => {
    return httpAxios.get('/categories')
        .then((data : any) => {
            dispatch(getCategoriesSuccess(data.categories));
        })
        .catch(error => {
            dispatch(getCategoriesFail("Some error occurred"));
        })

}

const getCategoriesSuccess = ( categories: Category ): Action => ({type: GET_CATEGORIES_SUCCESS, payload: categories});

const getCategoriesFail = (message: string): Action => ({type: GET_CATEGORIES_FAIL, payload: message});


export const fetchDeleteCategory = (slug: string) => async (dispatch: Dispatch) => {
    try {
        await httpAxios.delete(`/categories/${slug}`);
        toast.success("Delete Success !");
        dispatch(deleteCategory(slug));
    }
    catch (error) {
        toast.error("Delete Fail !");
    }
}

const deleteCategory = (slug: string): Action => ({type:DELETE_CATEGORY, payload: slug });

export const fetchCreateCategory = (category: Category) => async (dispatch: Dispatch) => {
    try {
        const res:any = await httpAxios.post(`/categories`, category);
        toast.success("Created Success !");
        dispatch(createCategory(res))
        return Promise.resolve()
    }
    catch (error) {
        toast.error("Created Fail !");
        return Promise.reject();
    }
}

const createCategory = (category: Category): Action => ({type: CREATE_CATEGORY, payload: category})