import React from 'react'
import {connect} from '../plugins/my-react-redux'

class ReactRedux extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    render(){
        const {num, add, asyncadd} = this.props
        return (
            <div>
            {num}
            <button onClick={add}>增加</button>
            <button onClick={asyncadd}>异步增加</button>
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {num:state}
}

const mapDispatchToProps = {
    add:()=>{
        return {type:'add'}
    },
    asyncadd:() => dispatch => {
        setTimeout(() => {
          dispatch({ type: "add" });
        }, 1000);
    }
}


export default connect(
    mapStateToProps, //状态映射 mapStateToProps
    mapDispatchToProps, //派发事件映射
)(ReactRedux)