module.exports.reject = (obj, keys) => {
    return Object.keys(obj)
        .filter(k => !keys.includes(k))
        .map(k => Object.assign({}, {[k]: obj[k]}))
        .reduce((res, o) => Object.assign(res, o), {});
}