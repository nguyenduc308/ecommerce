const { isEmpty } = require('../helpers/validator')

module.exports.validatorCreatePost = (data) => {
    let errors = {}
    if(isEmpty(data.title)) {
        errors.title = "Title is required"
    } 

    if(isEmpty(data.content)) {
        errors.content = "Content is required"
    } 

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}
