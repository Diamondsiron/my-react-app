import React from 'react';
import Classes from '../common/class'
import { connect } from 'react-redux'


class Props extends React.Component {
    constructor(){
        super()
        this.state={
            name:'white',
            age:'24',
           
        }
    }
    changeValue=(value)=>{
        this.setState({
            name:value
        })
    }
    log = () => {
        console.log(this.props,'log')
    }
    changeAge=(value)=>{
        this.setState({
            age:value
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.name}{this.state.age}</div>
                <p>{this.props.sex}?</p>
                <button onClick={this.props.onIncreaseClick}>性别</button>
                <button onClick={this.log}>this</button>
                <Classes 
                    name={this.state.name}
                    age={this.state.age} 
                    sex={this.state.sex} 
                    changeValue={this.changeValue} 
                    changeAge={this.changeAge}
                />
            </div>
            
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         sex:state.a,
//         count: state.count
//     }
// }
function mapStateToProps(state) {
    return {
        sex:state.rootReducer.sex,//要加上reducer的名字
        count: state.count
    }
  }
  
//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//propsName是props state是store

const mapDispatchToProps = (dispatch, ownerProps) => {
    return {
        onIncreaseClick: () => {
            console.log(this,'this')
            dispatch({
                type:'Sex',
                value:'123'
            })
        }
    }
}
//那些props调取会出发dispatch

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Props)