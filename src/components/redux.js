import React from 'react'
import store from '../plugins/my-store'

class Redux extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        store.subscribe(() => {
        console.log("subscribe");
        this.forceUpdate();
        //this.setState({});
         });
     }
    add = () => {
        store.dispatch({type:'add'})
    }
    render(){
        return (
            <div>
            {store.getState()}
            <button onClick={e=>{this.add()}}>增加</button>
            </div>
            
        )
    }
}

export default Redux