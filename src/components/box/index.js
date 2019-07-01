import React, { Component } from 'react'
import './style.css'

class Box extends Component {

    render() {
        const dataList = this.props.data.map((element) =>
            <li className="list-group-item my-item" key={element.name} onClick={()=>this.props.handleClick(element)} value={element} id={element.name}>{element.name}</li>
        );

        return (
            <div className="list-group">
               {dataList}   
            </div>
        )
    }
}

export default Box
