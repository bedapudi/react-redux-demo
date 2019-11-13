import React from 'react'
import {connect} from 'react-redux'

function CarsList(props){
    let cars = props.cars.map(car=><li key={car.id}>{car.name}</li>)
    return(
        <ul>{cars}</ul>
    )
}

const mapStateToProps = state => {return {cars: state.cars}}

export default connect(mapStateToProps)(CarsList);