import React from 'react';
import {Provider} from './App.context'
import Consumers from './modularization/Consumer'
import HocPage from './modularization/Hoc';
import Classes from './modularization/Class'
import State from './hooks/state'

const store = {
    user: {
      name: "哪吒xxx",
      contextName:'contextNames'
    },
  };

class Modularization extends React.Component {
    render(){
        return(
            <div>
                 modularization
                <Provider value={store}>
                
                <Consumers></Consumers>
                <State/>
                </Provider>
                <HocPage></HocPage>
                <Classes>{}
                
                {
                    {
                        btns:<button>下载</button>
                    }
                }
                </Classes>
              
            </div>
            
        )
    }
}



export default Modularization