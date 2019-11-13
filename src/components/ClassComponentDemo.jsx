import React from 'react'

class ClassComponentDemo extends React.Component{
    /* constructor(props){
        super(props)
        this.demo = this.demo.bind(this)
    } */

    /* demo(){
        console.log("class comp demo", this)
    } */
    demo = () => {
        console.log("class comp demo", this)
    }
    render(){
        return(
            <div>i am class Component
                <button onClick={this.demo}>class comp button</button>
            </div>  
        )
    }
}

export default ClassComponentDemo; 