import React , {useContext} from 'react'
import {createBrowserHistory} from 'history'

const RouterContext = React.createContext()

class Link extends React.Component{
    handleClick(e, history){
        e.preventDfault()
        history.push(this.props.to)
    }

    render(){
        const {to, children} = this.props
        return(
            <RouterContext.Consumer>
            {context=>{
                return(
                    <a 
                        onClick= {(e)=>this.handleClick(e, context.history)}
                        href={to}
                    >
                        {children}
                    </a>
                )
            }}
            </RouterContext.Consumer>
        )
    }
}

function Route(props){
    const ctx = useContext(RouterContext)
    const {path, component:Cmp} = props
    const {location} = ctx
    let match = path === location.pathname;
    return match ? <Cmp/> : null
    
}
//location history 在context中定义 依靠history来匹配和监听href变化
class BrowserRouter extends React.Component{
    constructor(props){
        super(props)
        this.history = createBrowserHistory(this.props)
        this.state = {
            location:this.history.location
        }
        this.unlisten = this.history.listen(location=>{
            this.setState({location})
        })
    }

    componentWillUnmount() {
        
        if (this.unlisten) this.unlisten()
    }

    render(){
        return(
            <RouterContext.Provider
                children = {this.props.children||null}
                value = {{
                    history:this.props.history,
                    location:this.state.location
                }}
            />
        )
    }
}
export {
    Link,
    Route,
    BrowserRouter

}