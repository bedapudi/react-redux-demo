import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
const mapStateToProps= (state) => {
    return{
        count: state.count,
        anotherCount: state.anotherCount
    }
}
const Display = (props)=>{
    return   (
    <div>    
    <div>
        i am display component. count from redux store is {props.count}
    </div>
    </div>
    )
}
    


export default connect(mapStateToProps)(Display);