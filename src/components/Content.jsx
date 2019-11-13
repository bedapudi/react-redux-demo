import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

let Content = (props)=>{
  let [data, setData] = useState('abcd')
  useEffect(()=>{
    console.log('i am use effect')
  })
  return (<div>i am content and {data} and store info >> {props.count1}</div>)
}

const mapStateToProps = state =>{ return {count1: state.count}}

export default  connect(mapStateToProps)(Content);