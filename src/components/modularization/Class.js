import React from 'react';

class Classes extends React.Component {
    
    
    render(){
        const {children} = this.props
        const a = []
        if (children.$$typeof){
            a.push(children)
        } else {
            for (let item in children) {
                a.push(children[item])
            }
        }
        return(
            <div>
                
                {a.map((item,index)=>{
                    return <React.Fragment key={index}>{item}</React.Fragment>
                })}
            </div>
            
        )
    }
}

export default Classes