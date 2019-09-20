import React from 'react'
import { userInfo } from 'os'
import { connect } from 'react-redux'
//import {useState} from 'react'

const mapStateToProps = (state) => {
    return {
        count : state.count
    }
}

const Counter = (props) => {
    //const [count, setCount] = React.useState(0)
    const increment= () =>{
        props.dispatch({type:"INCREMENT"})

    }
    const decrement= () =>{
        props.dispatch({type:"DECREMENT"})
    }
    
    return(
        <div>
            <button onClick={increment}>+</button>
            <span>{props.count}</span>
            <button onClick={decrement}>-</button>
        </div>
        
    )
}
export default connect(mapStateToProps)(Counter)