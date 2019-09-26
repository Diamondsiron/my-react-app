import React from 'react'
import Children from './children'

class Classes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            age:''
        }
    }
    handler=(e)=>{
        e.preventDefault();
        this.props.changeValue(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
    changeAge=(value)=>{
        this.props.changeAge(value)
        this.setState({
            age:value
        })
    }
    render() {
        return (
            <div>
                
                <input value={this.state.name} onChange={this.handler}/>
                <p>{this.props.name},{this.state.name}</p>
                <p>{this.props.age},{this.state.age}</p>
                <Children changeAge={this.changeAge} age={this.props.age}/>
            </div>
        )
    }
}

export default Classes