import React from 'react';

function Child(props) {
    return <div> {props.a}child</div>
}
//多一层函数处理
const foo = Cmp => props => {
   return <Cmp {...props}/>
}

export default function HocPage(props) {
    const Foo = foo(Child)
    const a = "a"
    return (
        <div>
            HocPage
            <Foo a={a}/>
        </div>
         )
}



