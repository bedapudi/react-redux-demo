import React from 'react'
import { defaultCipherList } from 'constants'

function ReactChildrenDemo(props){
    return(
        <div className='reactChildrenDemo'>
            {props.children}
            <div>
                {props.subComponent}
            </div>
        </div>
    )
}

export default ReactChildrenDemo;