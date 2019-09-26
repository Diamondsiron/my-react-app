// import { Sex } from './actionTypes'

// // export const sex = value => ({
// //     type: Sex,
// //     payload: value
// // })
// const ADD_TODO = '添加todo'
// function addTodo(text) {
//     return {
//         type:ADD_TODO,
//         text
//     }
// }
// const ation = addTodo('Learn Redux')
//View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
//上面代码中，addTodo函数就是一个 Action Creator。
 const rootReducer = (state = { sex: 'man' }, action) => {
    const sex = state.sex
    switch (action.type) {
        case 'Sex' :{
            console.log(action.value,'action.value')//获得action中的参数
            return {sex : 'blgt'}
        }
        default:
            return state
    }
}
export default rootReducer