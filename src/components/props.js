import React from 'react';
import Classes from '../common/class'

class Props extends React.Component {
    constructor(){
        super()
        this.state={
            name:'white',
            age:'24'
        }
    }
    changeValue=(value)=>{
        this.setState({
            name:value
        })
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
                <Classes name={this.state.name} age={this.state.age} changeValue={this.changeValue} changeAge={this.changeAge}/>
            </div>
            
        )
    }
}
export default Props