type Action = {
    type: string,
    payload?: any 
}
type ThunkResult<R> = ThunkAction<R, IinitialState, undefined, any>;