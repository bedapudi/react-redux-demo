import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
const mapStateToProps= (state) => {
    return{
        count: state.count,
        anotherCount: state.anotherCount,
        demo:'here'
    }
}
const Display = (props)=>{
    function demo(){
        alert('demo')
    }

    return   (
    <div>    
    <div>
        i am display component. count from redux store is {props.count}
    </div>
    <button onClick={demo}>display demo button </button>
    </div>
    )
}
    


export default connect(mapStateToProps)(Display);