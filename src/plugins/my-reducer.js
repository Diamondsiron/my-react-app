const rootReducer = (state = 0, action) => {
    
    switch (action.type) {
        case 'add' :{
            return state+1
        }
        case 'asyncadd':{
            console.log(state)
            return setTimeout(()=>{ 
                    console.log(state) 
                    return state+2},
                    1000)
        }
        default:
            return state
    }
}
export default rootReducer