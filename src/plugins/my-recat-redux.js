import React, { useContext, useState, useEffect} from 'react'
import { get } from 'http'

const Context = React.Context()

export function Provider ({store, children}) {
    return (<Context.Provider value={store}>
                {children}
            </Context.Provider>)
    
}

export const connect = (
    mapStateToProps,
    mapDispatchToProps
) => Cmp => props => {
    const store = useContext(Context)
    const getMoreProps = () => {
        const stateProps = mapStateToProps(store.getState())
        const dispatch = bindActionCreators(
            mapDispatchToProps,
            store.dispatch
        )
        return {...stateProps,...dispatch}
    }
    const [moreProps, setMoreProps] = useState(getMoreProps)
    useEffect(()=> {
        store.subscribe(()=>{
            setMoreProps({...moreProps, ...getMoreProps})
        })
    },[])
    return <Cmp {...props} {...moreProps}/>
}

function bindActionCreator(creator, dispatch){
    return (...args) => dispatch(creator(...args))
}

function bindActionCreators(actionCreators, dispatch){
    const boundActionCreators = {}
    for (const key in actionCreators) {
        boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
    }
    return boundActionCreators

}