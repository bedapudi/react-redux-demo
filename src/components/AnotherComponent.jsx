import React from 'react'
import {connect} from "react-redux"
function mapStateToProps(state){
    return{
        anotherfieldForDiffComponent: state.anotherfieldForDiffComponent
    }
}
class AnotherComponent extends React.Component{
    render(){
        return(<div>i am another component and i have this prop 
            <strong>{this.props.anotherfieldForDiffComponent}</strong> from redux store
            <button onClick={() =>this.props.dispatch({type:'ANOTHER', value:'ddeerr'})}>change it to ddeerr</button>
            </div>)
    }
}

export default connect(mapStateToProps)(AnotherComponent)