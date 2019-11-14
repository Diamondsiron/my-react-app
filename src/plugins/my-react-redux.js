import React, { useContext, useState, useEffect} from 'react'


const Context = React.createContext()

export function Provider ({store, children}) {
    return <Context.Provider value={store}>
                {children}
            </Context.Provider>
    
}

export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps = {}
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
    
    useEffect(()=> {
        store.subscribe(()=>{
            setMoreProps({...moreProps, ...getMoreProps()})
        })
    },[])
    const [moreProps, setMoreProps] = useState(getMoreProps())
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