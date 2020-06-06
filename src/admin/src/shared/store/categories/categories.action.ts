import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, DELETE_CATEGORY } from "./contants"
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


export const fetchDeleteCategory = (slug: string) => (dispatch: Dispatch) => {
    return httpAxios.delete(`/categories/${slug}`)
            .then(res=> {
                toast.success("Delete Success !");
                dispatch(deleteCategory(slug))
            })
            .catch(error => toast.error("Delete Fail !"))
}

const deleteCategory = (slug: string): Action => ({type:DELETE_CATEGORY, payload: slug });
