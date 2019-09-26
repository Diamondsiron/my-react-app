import React from 'react'
import { connect } from 'react-redux'

class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           sex:'' 
        }
    }

    handlerAge = (e) => {
        this.setState({
            sex:e.target.value
        })
        
    }
    render() {
        return (
            <div>
                <input value={this.props.sex} onChange={this.handlerAge} placeholder="性别"/>   
                <p></p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sex:state.rootReducer.sex,//要加上reducer的名字
        count: state.count
    }
  }

export default connect(mapStateToProps)(Child)