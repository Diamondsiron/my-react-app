import React from 'react'

class Children extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           age:'' 
        }
    }

    handlerAge = (e) => {
        this.setState({
            age:e.target.value
        })
        this.props.changeAge(e.target.value)
    }
    render() {
        return (
            <div>
                <input value={this.props.age} onChange={this.handlerAge} placeholder="年龄"/>   
                <p>{this.props.age}{this.state.age}</p>
            </div>
        )
    }
}

export default Children