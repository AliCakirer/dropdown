import React, { Component } from 'react'
class Box extends Component {



    render() {
        const dataList = this.props.data.map((element) =>
        <li key ={element.name} onClick={this.handleClick} value={element} id={element.name}>{element.name}</li>
        
        );

        return (
            <div>
                
            <ul>{dataList}</ul>
            </div>
        )
    }
}

export default Box
