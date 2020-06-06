import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from "./contants"
import { Dispatch } from "redux";
import { httpAxios } from "shared/helpers/axios-service";

export const fetchCategories = () => async (dispatch: Dispatch) => {
    return httpAxios.get('/categories')
        .then((data : any) => {
            dispatch(getCategoriesSuccess(data.categories))
        })
        .catch(error => {
            dispatch(getCategoriesFail("Some error occurred"))
        })

}

const getCategoriesSuccess = ( categories: Category ): Action => ({type: GET_CATEGORIES_SUCCESS, payload: categories});

const getCategoriesFail = (message: string): Action => ({type: GET_CATEGORIES_FAIL, payload: message});
