import { isEmail, isEmpty } from '../helpers/validator'

export const validatorSignUp = (data:any) => {
    let errors = {
        email: null,
        password: null,
        confirmPassword: null,
    }
    if(isEmpty(data.email)) {
        errors.email = "Email is required"
    } else if(!isEmail(data.email)) {
        errors.email = "Email invalid"
    }
    if(isEmpty(data.password)) {
        errors.email = "Password is required"
    } else if(data.password.length < 6) {
        errors.password = "Password is weak"
    }
    if(data.password !== data.confirmPassword) {
        errors.confirmPassword = "Password confirm do not match"
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

export const validatorLogin = (data: any) => {
    let errors = {
        email: null,
        password: null,
        confirmPassword: null,
    }
    if(isEmpty(data.email)) {
        errors.email = "Email is required"
    }
    if(isEmpty(data.password)) {
        errors.email = "Password is required"
    } 
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}