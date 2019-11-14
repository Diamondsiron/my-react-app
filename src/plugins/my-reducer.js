const rootReducer = (state = 0, action) => {
    
    switch (action.type) {
        case 'add' :{
            return state+1
        }
        case 'asyncadd':{
            return state+2
        }
        default:
            return state
    }
}
export default rootReducer