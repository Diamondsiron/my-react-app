import React from 'react';
import {Consumer} from '../App.context'



class Consumers extends React.Component {
    
    
    render(){
        return(
            <div>
                <Consumer>
                    {ctx => <div>{ctx.user.name}</div>}
                </Consumer>
                
            </div>
            
        )
    }
}



export default Consumers