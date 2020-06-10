import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, DELETE_CATEGORY, CREATE_CATEGORY } from "./contansts"
import { Dispatch } from "redux";
import {  toast } from 'react-toastify';

import { httpAxios } from "shared/helpers/axios-service";
import { showLoading, hideLoading } from "../app/app.action";

export const fetchCategories = ()=> async (dispatch: Dispatch) => {
    dispatch(showLoading());
    return httpAxios.get('/categories')
        .then((data : any) => {
            dispatch(hideLoading());
            dispatch(getCategoriesSuccess(data.categories));
        })
        .catch(error => {
            dispatch(hideLoading());
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

export const fetchCreateCategory = (category: Category): ThunkResult<Promise<boolean>> => async (dispatch: Dispatch) => {
    try {
        const res:any = await httpAxios.post(`/categories`, category);
        toast.success("Created Success !");
        dispatch(createCategory(res))
        return Promise.resolve(true)
    }
    catch (error) {
        toast.error("Created Fail !");
        return Promise.reject(error);
    }
}

const createCategory = (category: Category): Action => ({type: CREATE_CATEGORY, payload: category})